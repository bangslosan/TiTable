var table;

exports.create = function(data, template) {

	var items = JSON.parse(data);

	table = Ti.UI.createTableView();

	var rows = [];

	for (var i = 0; i < items.data.length; i++) {

		var row = Ti.UI.createTableViewRow({
			height : 50
		});

		var controls = [];
		
		controls.row = row;
		controls.table = table;
		
		template(controls);
		
		

		for (var c = 0; c < controls.length; c++) {

			controls[c].text = items.data[i][controls[c].field];

			row.add(controls[c]);

		}

		rows.push(row);

	}

	table.setData(rows);

	var win = Ti.UI.createWindow();

	win.add(table)

	win.open();

}

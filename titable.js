// creates a new table, pass the JSON data template function
// that generates the controls.

exports.create = function(data, template) {

	// parse the JSON
	var items = JSON.parse(data);

	// create a tableview
	var table = Ti.UI.createTableView();

	// init the rows
	var rows = [];

	// let's loop through the JSON
	for (var i = 0; i < items.data.length; i++) {

		// create a new row
		var row = Ti.UI.createTableViewRow({
			height : 50
		});

		// init a controls array for the row
		var controls = [];
		
		// append some pointers to the current row and table
		controls.row = row;
		controls.table = table;
		
		// call the template
		template(controls);
		
		// let's go through the controls and match 'field' to the JSON value
		for (var c = 0; c < controls.length; c++) {

			controls[c].text = items.data[i][controls[c].field];

			row.add(controls[c]);

		}
	
		rows.push(row);
	}
	
	// populate the table
	table.setData(rows);

	return table;
}

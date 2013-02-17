exports.create = function(items, template) {

    // create a tableview
    var table = Ti.UI.createTableView();

    // init the rows
    var rows = [];

    // let's loop through the JSON
    for (var i = 0; i < items.length; i++) {

        // create a new row
        var row = Ti.UI.createTableViewRow({
            height : 50
        });

        // call the template callback passing the JSON record
        var controls = []; 
        
        controls = template(items[i]);

        // add the controls to the row
        controls.forEach(function(control){
            row.add(control);
        });               

        // add the row to the rows array
        rows.push(row);
    }

    // populate the table
    table.setData(rows);

    return table;
}

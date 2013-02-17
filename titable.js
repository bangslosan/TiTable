exports.create = function(items, template) {

    // create a tableview
    var table = Ti.UI.createTableView();

    // init the rows
    var rows = [];

    // let's loop through the JSON
    for (var i = 0; i < items.length; i++) {

        // create a new row
        var row = Ti.UI.createTableViewRow({
            height : 'auto'
        });

        // call the template callback passing the JSON record
        var controls = []; 
        
        var e = {};
        
        e.item = items[i];
        e.row = row;
        
        controls = template(e);
       
        // add the row to the rows array
        rows.push(row);
    }

    // populate the table
    table.setData(rows);

    return table;
}

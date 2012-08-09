// get started
var table = require("TiTable/titable");

// demo JSON data
var data = '{"data":[{"title":"Label 1","subtitle":"Sublabel 1"},{"title":"Label 2","subtitle":"SubLabel 2"}]}';

// create a new table, pass through the feed
var mytable = table.create(data, function(controls) {

	// first label
	var title = Ti.UI.createLabel({
		field : "title",
		left : 10,
		top: 5
	});

	// second label
	var subTitle = Ti.UI.createLabel({
		field : "subtitle",
		left : 10,
		top :25
		
	});

	// sample event handler
	controls.row.addEventListener('click', function(e) {
		alert("You clicked the row! " + e.source);
	});

	// push the labels intro the control array
	controls.push(title);
	controls.push(subTitle);

});

	// create a window
	var win = Ti.UI.createWindow();

	// add the table
	win.add(mytable)

	// open it
	win.open();



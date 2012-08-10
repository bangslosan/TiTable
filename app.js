

// get started
var table = require("TiTable/titable");

// demo JSON data
var data = '[{"title":"hello","subtitle":"there"},{"title":"hello2","subtitle":"there2"}]';

// create a new table, pass through the feed
var mytable = table.create(data, function(controls) {

	// first label
	var title = Ti.UI.createLabel({
		field : "title",
		left : 10,
		top : 5
	});

	// second label
	var subTitle = Ti.UI.createLabel({
		field : "subtitle",
		left : 10,
		top : 25

	});

	// push the labels intro the control array
	controls.push(title);
	controls.push(subTitle);

});

// create a window
var win = Ti.UI.createWindow();

// for Android mainly
win.backgroundColor = '#fff';

// add the table
win.add(mytable)

// sample event handler
mytable.addEventListener('click', function(e) {
	alert("You clicked " + e.source);
});

// open it
win.open();


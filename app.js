

// get started
var table = require("TiTable/titable");

// demo JSON data
var data = '[{"title":"J blogs","subtitle":"Author"},{"title":"T Smith","subtitle":"Director"}]';

// create a new table, pass through the feed
var mytable = table.create(data, function(item) {

   // first label
	var title = Ti.UI.createLabel({
	    text : item['title'],		
		left : 10,
		top : 5
	});

	// second label
	var subTitle = Ti.UI.createLabel({
		text : item['subtitle'],    
		left : 10,
		top : 25
	});

	return [title,subTitle];
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


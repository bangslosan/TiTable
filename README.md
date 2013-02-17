TiTable
=======

Conceptual module for Titanium to make it easier to populate a tableview from a JSON feed.

Works in iOS, Android, Web

Example:-

Add the module to your project

	var table = require("titable");
	
The concept is you create the table, passing the JSON feed and then specifying a template function to build the rows for the table, then return the controls as an array.

Example JSON string

	var data = '[{"title":"hello","subtitle":"there"},{"title":"hello2","subtitle":"there2"}]';

So:-

	var mytable = table.create(data, function(item) {

		var title = Ti.UI.createLabel({
			text : item['title'],
			left : 10,
			top: 5
		});

		var subTitle = Ti.UI.createLabel({
			text : item['subtitle'],
			left : 10,
			top :25
			
		});
		
		return [title,subtitle];
		
	});


WORK IN PROGRESS!

;)

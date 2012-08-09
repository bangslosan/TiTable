TiTable
=======

Conceptual module for Titanium to make it easier to populate a tableview from a JSON feed.

Example:-

Add the module to your project

	var table = require("titable");
	
The concept is you create the table, passing the JSON feed and then specifying a template function to build the rows for the table, specifying the field to use.

So:-

	table.create(data, function(controls) {

		var title = Ti.UI.createLabel({
			field : "title",
			left : 10,
			top: 5
		});

		var subTitle = Ti.UI.createLabel({
			field : "subtitle",
			left : 10,
			top :25
			
		});

		controls.row.addEventListener('click', function(e) {
			alert("You clicked the row! " + e.source);
		});

		controls.push(title);
		controls.push(subTitle);

	});

The callback parameter *controls* has two propertes, *row* and *table* allowing you to attach event listeners etc.

WORK IN PROGRESS!

;)

var table = require("TiTable/titable");

var data = '{"data":[{"title":"Label 1","subtitle":"Sublabel 1"},{"title":"Label 2","subtitle":"SubLabel 2"}]}';

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


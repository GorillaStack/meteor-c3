C3 chart
========

A truly reactive C3 charting library based on D3 for MeteorJS projects.

Deals with some issues in `perak:c3` where unloading fields is not managed.  Adding tests and other things that really diverge this project enough to warrant a new repository.

This version handles both the loading and unloading of data via the c3 data api.  Now if your dataset shrinks, your graphs will update correctly.  There are also unit tests available to test our custom logic.

Usage
=====

Somewhere in your template, add this:

```Handlebars
<template name="someTemplate">

	{{> c3 myChartData}}

</template>
```

And in .js define helper that returns chart data object as described in c3 docs:

```JavaScript
Template.someTemplate.helpers({
	"myChartData": function() {
		return {
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'spline'
			}
		};
	}
});
```

Of course, instead providing static data, you can reactively show data from collection:

```JavaScript
Template.someTemplate.helpers({
	"myChartData": function() {

		theReport = SomeCollection.find().fetch();

		var theData = ["myData"];
		theData.concat(_.pluck(theReport, "expenses"));

		return {
			data: {
				columns: [
					theData
				],
				type: 'line'
			}
		};
	}
});
```
In this example, `SomeCollection` contains key `expenses` that will be shown in the graph.

Data can also be provided as a two dimensional array of rows, or as JSON

```JavaScript

// ...
return {
	data: {
		rows: [
			['col1', 'col2', 'col3', 'col4'],
			[4, 3, 5, 2],
			[6, 4, 3, 6]
		]
	}
};
// ...
return {
	data: {
		json: {
			data1: [4, 3, 5, 2],
			data2: [6, 4, 3, 6]
		}
	}
};
```

If you want to use **multiple charts on one page** you must specify a unique id, thus the syntax is a bit different:

```Handlebars
<template name="someTemplate">

	{{> c3 data=myChartData id="chart4"}}

</template>
```

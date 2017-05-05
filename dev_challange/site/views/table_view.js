/**
 * TableView
 *
 * @constructor
 * @this {TableView}
 * @param model - instanceof model
 */
const { SparklineGenerator } = require('../public/js/sparkline_generator.js');

class TableView {
  constructor(model) {
    this.model = model;
    this.tBody = document.getElementById("table_body");
  }
  /**
 * Creates a renderTable for View
 */
 renderTable() {
   const jData = this.model.dataObj;
   const element = document.getElementById(jData.name);
   if(element) {
     const tElement = document.getElementById(jData.name);
     for(var j = 0;j<Object.keys(jData).length;j++) {
       if(j == 0) {
         tElement.children[j].innerHTML = Object.values(jData)[j];
       } else {
         tElement.children[j].innerHTML = Object.values(jData)[j].toFixed(8);
       }
     }
    //  console.log(this.model.sGenerator);

   } else {
     var row = document.createElement("tr");
     row.setAttribute('id', jData.name);
     for(var j = 0;j<Object.keys(jData).length;j++) {
       if(j == 0) {
         row.innerHTML += "<td class='columnBg' id='"+Object.keys(jData)[j]+"'>"+Object.values(jData)[j]+"</td>";
       } else {
         row.innerHTML += "<td id='"+Object.keys(jData)[j]+"'>"+Object.values(jData)[j].toFixed(8)+"</td>";
       }
     }
     row.innerHTML += "<td><span class='sparkline' id='spark_"+jData.name+"'></span></td>";

     // create a instance of SparklineGenerator
     const sparkline = new SparklineGenerator(row.querySelector("span.sparkline"), this.model);
     this.model.sGenerator.push(sparkline);
     document.getElementById("table_body").appendChild(row);
   }
  // this.sort(true);
 }
// sorting table row
 sort(ascending) {
		var tbody = this.tBody;
		var rows = tbody.getElementsByTagName("tr");
		var unsorted = true;
		while(unsorted)
		{
			unsorted = false
			for (var r = 0; r < rows.length - 1; r++)
			{
				var row = rows[r];
				var nextRow = rows[r+1];
				var value = row.children[6].innerHTML;
				var nextValue = nextRow.children[6].innerHTML;

				value = value.replace(',', ''); // in case a comma is used in float number
				nextValue = nextValue.replace(',', '');

				if(!isNaN(value))
				{
					value = parseFloat(value);
					nextValue = parseFloat(nextValue);
				}

				if (ascending ? value > nextValue : value < nextValue)
				{
					tbody.insertBefore(nextRow, row);
					unsorted = true;
				}
			}
    }
  }
}

exports.TableView = TableView;

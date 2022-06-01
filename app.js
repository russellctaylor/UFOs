// import the data from data.js
const tableData = data;
// Reference the HTML table using d3 : D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
var tbody = d3.select("tbody");
//With this code, we:
//Declare a variable, tbody
//Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
//11.5.1
function buildTable(data) {
//function used to clear the data
    tbody.html("");
//Add the forEach Function
data.forEach((dataRow) => {
    let row = tbody.append("tr");
//Loop Through Data Rows
Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

//With this function, we have done the following:
//Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell
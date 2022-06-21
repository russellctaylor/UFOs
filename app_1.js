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
    });
  });
};


//With this function, we have done the following:
//Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell

//add filters 11.5.3
function handleClick() {
    let date = d3.select("#datetime").property("value");
    
    let filteredData = tableData;
//11.5.4 Use the “If” Statement
// Check to see if a date was entered and filter the
  // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    };
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
  
  };

d3.selectAll("#filter-btn").on("click", handleClick); //Listen for the Event



// Build the table when the page loads
buildTable(tableData);

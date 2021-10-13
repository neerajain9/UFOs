// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Table
function buildTable(data) {
    // Clear the table before loading...
    tbody.html("");
    // Loop through each row (object) in data.js (array) 
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow...
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the table-row body
            let cell = row.append("td");
            // now, add the values to the cell
            cell.text(val);
        });

    });
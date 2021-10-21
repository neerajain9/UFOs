// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Table
function buildTable(data) {
    // Clear the table before loading...
    tbody.html("");
    // Loop through each row (object) in data.js (array) 
    // function in a function
    // traditional function...
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow...
        // Arrow function usinf forEach function
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the table-row body
            let cell = row.append("td");
            // now, add the values to the cell
            cell.text(val);
        });
    });

// Filter Table Data (Click-Button Event)
function handleClick() {
    // Grab the datetime value from the filter
    // filter on date
    // d3.select("#datetime") -> instruct D3 to look for the #datetime id in the HTML tags
    // .property("value") -> Instruct D3 not only to look for where our date values are 
    //                       stored on the webpage, but to actually grab that 
    //                       information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");

    // set a default filter and save it to a new variable
    // This is the original data as imported from our data.js
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
// Attach an event to listen for the form button
// link the code directly to the filter button
// .on("click", handleClick) -> instruct D3 to execute handleClick() function
// when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);
};

// // Build the table when the page loads
buildTable(tableData);
//import the data from data.js
const tableData=data;

//reference the html table using d3
var tbody=d4.select("tbody");

// // takes 2 numbers and adds them
// function addition(a,b){
//     return a+b;
// };
// console.log(addition(4,5));

// //function can call other functions
// function doubleAddition(c,d){
//     var total= addition(c,d)*2;
//     return total
// }

// //ES6 functions
// printHello()=()=>"Hello There!";
// addition=(a,b)=>a+b;
// doubleAdditions=(c,d)=>addition(c,d)*2;

// //for loop
// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// function listLoop(userList){
//     for(var i=0;i<userList.length;i++){
//         console.log(userList[i]);
//     }
// }

// //for loop2
// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// for(var i=0;i<vegetables.length;i++){}

//for loop3
// for(var i=0;i<5;i++){console.log('I am counting '+i)}

//builging table
function buildTable(data){
    tbody.html(""); //this line makes an empty string when creating table,clear out any existing data
    // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row=tbody.append("tr") // Append a row to the table body
    
     // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
        let cell=row.append("td");
        cell.text(val);
    });
    });
};

function handleClick(){
    let date=d3.select("#datetime").property("value")  // Grab the datetime value from the filter
    let filteredData=tableData;

     // Check to see if a date was entered and filter the
  // data using that date.
    if(date){

            // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData=filteredData.filter(row=>row.datetime===date);
    };

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click",handleClick);

// Build the table when the page loads
buildTable(tableData);

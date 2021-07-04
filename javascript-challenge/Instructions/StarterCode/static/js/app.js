// from data.js
var tableData = data;

//Console.log the Aliencs data from data.js.
//console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
function buildTable(data){


//Step 1: Loop Through`data` and console.log each Aliencs data from data.js

//data.forEach(function (AlienssRdata) {

    //console.log(AlienssRdata);
//})

// Use d3 to append table rows for the Aliencs Data object

//data.forEach(function (AlienssRdata) {

    //console.log(AlienssRdata);

 //   var row = tbody.append("tr");
//})

// Use `Object.entries` to get the values of the data

//data.forEach(function (AlienssRdata) {

    //console.log(AlienssRdata);

//    var row = tbody.append("tr");

//    Object.entries(AlienssRdata).forEach(function ([key, value]) {

        //console.log(key,value);

//    })

//});

tbody.html("")
//Use d3 to append cells to table with values of dates, cities, states, countries, shape duration and comments.
data.forEach(function (AlienssRdata) {
    var row = tbody.append("tr");

    Object.values(AlienssRdata).forEach(function (val) {

        console.log(val);
        var cell = row.append("td").text(val);

    })

});

}

function handleClick() { 

 //Use a date form in your HTML document and write JavaScript code that will listen for events and find rows that match user input.
 // Getting a reference to the button

 var date = d3.select("#datetime").property("value");
 var userInputDate = tableData;

 // Getting a refernce to the input element
 if (date) {
    userInputDate = userInputDate.filter(row => row.datetime === date);
    

 }
 buildTable(userInputDate)
}

// Inorder to attach the event to the handler function we need to use the `on` function

d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table
buildTable(tableData);



// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filter = d3.select("#filter-btn");
tableData.forEach((xfile_row) => {
    var row = tbody.append("tr");
    Object.entries(xfile_row).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
filter.on("click", function(){
    d3.event.preventDefault();
    var select_date_time = d3.select("#datetime").property("value");  
    console.log(select_date_time)  
    
tbody.html("")
    var filteredData = tableData.filter(xfile_row => xfile_row.datetime === select_date_time);
    filteredData.forEach((xfile_row) => {
        var row = tbody.append("tr");
        Object.entries(xfile_row).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});
// THE TRUTH IS OUT THERE!

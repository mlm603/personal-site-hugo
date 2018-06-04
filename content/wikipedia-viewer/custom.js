$(document).ready(function(){ 
            });
$("#search").click(function(){
  $("#myTable tr").remove();
  var searchterm=$("#searchtext").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch="+searchterm+"&callback=?", function(result) {
    for (i=0;i<10;i++){
      var tableRef = document.getElementById('myTable');
    var newRow   = tableRef.insertRow(tableRef.rows.length);
      newRow.style.borderRight="2px solid black";
      newRow.style.borderLeft="2px solid black";
      newRow.style.borderTop="2px solid black";
      newRow.style.fontWeight="bold";
      newRow.style.fontSize="20px";
     newRow.style.color="white"; newRow.style.background="rgb(79,45,127)";
      newRow.innerHTML="<a href='http://en.wikipedia.org/wiki/"+result.query.search[i].title+"'>"+result.query.search[i].title+"</a>";
      var newRow2   = tableRef.insertRow(tableRef.rows.length);
      newRow2.style.borderRight="2px solid black";
      newRow2.style.borderLeft="2px solid black";
      newRow2.style.borderBottom="2px solid black";
  newRow2.style.background="rgb(200,200,200)"
      var newCell2  = newRow2.insertCell(0);
      newCell2.innerHTML="<td"+result.query.search[i].snippet+"... </td>";
      var newRow3   = tableRef.insertRow(tableRef.rows.length);
      var newCell3  = newRow3.insertCell(0);
      newCell3.style.className="blank-row";
    }

  });
   
});
$("#searchtext").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});
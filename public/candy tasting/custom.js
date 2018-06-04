$(document).ready(function() {
  // URL

  var url =
    "https://spreadsheets.google.com/feeds/list/1pg1Y7CRWiRrSlMEKXgQQd93qPw2xfxDPwDM-23XTEiU/od6/public/full?alt=json";
  var responseIDs=[]
  var respondents = [];
  var candy = [];
  var triedbefore = [];
  var eatagain = [];
  var rating = [];
  // Get Data from Google Sheets (yes, really).
  $.getJSON(url, function(result) {
    data = result.feed.entry;
    console.log(data)
    if(data!==undefined){
        for (i = 0; i < data.length; i++) {
          var response = data[i].content.$t;
          var end = response.search(",");
          respondents.push(response.substr(8, end - 8));
          response = response.substr(end + 2, response.length - (end + 2));
          end = response.search(",");
          candy.push(response.substr(7, end - 7));
          response = response.substr(end + 2, response.length - (end + 2));
          end = response.search(",");
          triedbefore.push(response.substr(13, end - 13));
          response = response.substr(end + 2, response.length - (end + 2));
          end = response.search(",");
          eatagain.push(response.substr(10, end - 10));
          response = response.substr(end + 2, response.length - (end + 2));
          end = response.search(",");
          rating.push(response.substr(8, end - 8));
        }}
    candy.push("Butterfinger")
    candy.push("Twix")
    candy.push("SweetTarts")
    candy.push("Nerds")
    candy.push("Laffy Taffy")
    candy.push("Gobstoppers")
    candy.push("Skittles")
    candy.push("Starbursts")
    candy.push("Nestle Crunch")
    candy.push("Baby Ruth")
    candy.push("Nestle Milk Chocolate")
    candy.push("Snickers")
    candy.push("M&Ms - plain")
    candy.push("M&Ms - peanut")
    candy.push("Sour Patch Kids")
    candy.push("Kit Kat")
    candy.push("Vanilla Tootsie Roll")
    candy.push("Cookies N Cream")
    candy.push("3 Musketeers")
    candy.push("Airhead")
    console.log(candy)
    var uniqueCandy = [];
    $.each(candy, function(i, el) {
      if ($.inArray(el, uniqueCandy) === -1) uniqueCandy.push(el);
    });
    uniqueCandy.sort();
    for (i = 0; i < uniqueCandy.length; i++) {
      $("#candy").append(
        $("<option></option>")
          .val(i)
          .html(uniqueCandy[i])
      );
    }
    $("#candy").append($("<option></option>").html("Other"));
  });
});


var $form = $('#gform'),
url = 'https://script.google.com/a/u.northwestern.edu/macros/s/AKfycbwUwmRPHPjpCR1mhUMcrRJRS2L6fqZQw0ZKSAh0DrLs7hGqng/exec'
$('#rateCandy').on('click',function(){
  $("#selections").css( "display", "none" );
  $("#formdiv").css( "display", "block" );
})
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var candy;
  if( $("#candy").find('option:selected').text()=="Other") {
    candy=$("#otherCandy").val()
  } else {candy=$("#candy").find('option:selected').text()}
  var json={}
  json["Response ID"]=""
  json["Person"]=$("#Name").val()
  json["Candy"]=candy
  json["Tried Before"]=$("#before").find('option:selected').text()
  json["Eat Again"]=$("#again").find('option:selected').text()
  json["Rating"]=Math.abs(($('input[name=star]:checked').val()-5)%5)+1
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: json
  }).success(
    console.log("yay")
  );
  $("#selections").css( "display", "block" );
  $("#formdiv").css( "display", "none" );
  $("#Name").val('')
  $("#candy").val(0)
  $("#otherCandy").val('')
  $("#before").val(0)
  $("#again").val(0)
  $("#star").val(3)

})
$("#candy").on('change',function(){
    if( $("#candy").find('option:selected').text()=="Other"){
      $("#otherCandy").css( "display", "block" );
    }
    else{
      $("#otherCandy").css("display","none")
    }
});
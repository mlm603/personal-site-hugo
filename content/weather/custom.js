$(document).ready(function() {
  CurrLoc();
});

$("#temptype").change(function() {
  var e = document.getElementById("temptype");
  var strUser = e.options[e.selectedIndex].value;
  if (strUser == "Fahrenheit") {
    degfar();
  }
  if (strUser == "Celcius") {
    degcel();
  }
});



function degfar() {
  var str=$("#temp").text();
  if (str.charAt(str.length-1)=="C"){
    var currtemp=str.substring(0,str.length-3);
    var newtemp = currtemp * (9/5) +32;
  newtemp = newtemp.toFixed(1);
  $("#temp").html(newtemp+" °F");
  } 
};

function degcel() {
  var str=$("#temp").text();
  if (str.charAt(str.length-1)=="F"){
    var currtemp=str.substring(0,str.length-3);
    var newtemp = (currtemp - 32) * (5/9);
  newtemp = newtemp.toFixed(1);
  $("#temp").html(newtemp+" °C");
  } 
};
$("#myLoc").click(function() {
  CurrLoc();
});

$("#submitzip").click(function(event) {event.preventDefault();
  ZipLoc();
  
});

  function lat(callback) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    callback.call(null, lat, lon);
  }, function(error) {
    console.log("Something went wrong: ", error);
  });
};

function CurrLoc() {

  lat(function(latitude, longitude) {
 
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude.toFixed(1) + "&lon=" + longitude.toFixed(1)+"&appid=c748866a1931059f53c7140ebbb33d97",
    dataType: "jsonp",
    success: function(data) {
      var temperature = data.main.temp;
      var city = data.name;
      var weather = data.weather[0].description;
      var icon=data.weather[0].icon;
      var id=data.weather[0].id;
      id=id.toString();
      id=id.substring(0,1);
      $("#temp").html(((temperature - 273.15) * 1.8 + 32).toFixed(1)+" °F");
      $("#city").html(city);
      $("#weath").html(weather); $("#icon").attr("src","https://openweathermap.org/img/w/"+icon+".png");
      bckd(id);
    }
  });
                                     });
};

function ZipLoc() {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?zip=" + $("#zip").val()+"&appid=c748866a1931059f53c7140ebbb33d97",
    dataType: "jsonp",
    success: function(data) {
      var zipTemp = data.main.temp;
      var zipCity = data.name;
      var zipWeather = data.weather[0].description;
      var zipIcon=data.weather[0].icon;
      var zipId=data.weather[0].id;
      zipId=zipId.toString();
      zipId=zipId.substring(0,1);
      $("#temp").html(((zipTemp - 273.15) * 1.8 + 32).toFixed(1)+" °F");
      $("#city").html(zipCity);
      $("#weath").html(zipWeather); $("#icon").attr("src","https://openweathermap.org/img/w/"+zipIcon+".png");
    bckd(zipId);
    }
  });
};

function bckd(identifier){
  $('body').css('background-image', 'url(/images/clouds.png)')
  if (identifier==2){
    $('body').css('background-image', 'url(/images/rain.png)');
  };
  if (identifier==3){
    $('body').css('background-image', 'url(/images/rain.png)');
  };
  if (identifier==5){
    $('body').css('background-image', 'url(/images/rain.png)');
  };
  if (identifier==6){
    $('body').css('background-image', 'url(/images/snow.png)');
  };
};
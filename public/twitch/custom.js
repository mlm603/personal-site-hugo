var StreamArr = ["avalontwitch","beohoff", "freecodecamp","habathcx","medrybw","noobs2ninjas","robotcaleb", "simuleios","storbeck", "terakilobyte"]    ;
var totalArr=[];

var start = function() {
  var num = 1;
  for (i = 0; i < StreamArr.length; i++) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + StreamArr[i], function(stream) { 
        if (stream.stream == null) {
          var newurl = stream._links.channel;
          $.getJSON(newurl, function(newstream) {
            var logo = newstream.logo;
            if (logo==null){
              logo="http://www.rccaleastcentral.org/image/default-user.jpg";
            }
            var url = newstream.url;
            if (url==null){
              url="";
            }
            var name = newstream.display_name;
            if (name==null){
              name="";
            }
            var status = newstream.status;
            if(status==null){
              status="";
            }
            var tempname="var"+i;
            var tempname={
              "logo":logo,
              "url":url,
              "name":name,
              "status":status,
              "ison":"offline"
            }
            totalArr.push(tempname);
          })
        } else {
          var logo = stream.stream.channel.logo;
          if (logo==null){
            logo="http://www.rccaleastcentral.org/image/default-user.jpg";
          }
          var url = stream.stream.channel.url;
          if (url==null){
            url="";
          }
          var name = stream.stream.channel.display_name;
          if (name==null){
            name="";
          }
          var status = stream.stream.channel.status;
          if(status==null){
            status="";
          }
          var tempname="var"+i;
          var tempname={
              "logo":logo,
              "url":url,
              "name":name,
              "status":status,
            "ison":"online"
            }
          totalArr.push(tempname);
          num++;
        }
      }

    );
  }
};
$(document).ready(function() {
  start();
  $("#username1").text("Loading...");
  window.setTimeout(all,2000)
});
var online = function() {
  $("#online").css("background-color", "rgb(180,180,130)");
  $("#offline").css("background-color", "rgb(51,51,51)");
  $("#all").css("background-color", "rgb(51,51,51)");
  var onlineArr=totalArr.filter(function(val){
    return val.ison=="online";
  })
  var num=1;
  for (i=0;i<onlineArr.length;i++){
    $("#img_src" + num).attr("src", onlineArr[i].logo);
    $("#img_link" + num).attr("href", onlineArr[i].url);
    $("#username" + num).text(onlineArr[i].name);
    //alert(totalArr[i].status);
    if (onlineArr[i].status.length > 40) {
      onlineArr[i].status = onlineArr[i].status.substring(0, 40) + "...";
    }
    $("#detail" + num).text(onlineArr[i].status);
      $("#ison" + num).attr("src", "/images/userOnline.png");
    
    num++;
}
  for (i=num;i<11;i++){
    //alert(i);
    $("#img_src" + num).attr("src", "/images/empty.png");
    $("#img_link" + num).attr("href", "");
    $("#username" + num).text("");
    $("#detail" + num).text("");
      $("#ison" + num).attr("src", "/images/empty.png");
  num++;
  }
};
var offline = function() {
  $("#offline").css("background-color", "rgb(180,180,130)");
  $("#online").css("background-color", "rgb(51,51,51)");
  $("#all").css("background-color", "rgb(51,51,51)");
  var offlineArr=totalArr.filter(function(val){
    return val.ison=="offline";
  })
  var num=1;
  for (i=0;i<offlineArr.length;i++){
    $("#img_src" + num).attr("src", offlineArr[i].logo);
    $("#img_link" + num).attr("href", offlineArr[i].url);
    $("#username" + num).text(offlineArr[i].name);
    //alert(totalArr[i].status);
    if (offlineArr[i].status.length > 40) {
      offlineArr[i].status = offlineArr[i].status.substring(0, 40) + "...";
    }
    $("#detail" + num).text(offlineArr[i].status);
      $("#ison" + num).attr("src", "/images/userBusy.png");
    
    num++;
}
  for (i=num;i<11;i++){
    //alert(i);
    $("#img_src" + num).attr("src", "/images/empty.png");
    $("#img_link" + num).attr("href", "");
    $("#username" + num).text("");
    $("#detail" + num).text("");
      $("#ison" + num).attr("src", "/images/empty.png");
  num++;
  }
};
var all = function() {
  $("#all").css("background-color", "rgb(180,180,130)");
  $("#offline").css("background-color", "rgb(51,51,51)");
  $("#online").css("background-color", "rgb(51,51,51)");
  var num=1;
  for (i=0;i<11;i++){
    $("#img_src" + num).attr("src", totalArr[i].logo);
    $("#img_link" + num).attr("href", totalArr[i].url);
    $("#username" + num).text(totalArr[i].name);
    //alert(totalArr[i].status);
    if (totalArr[i].status.length > 40) {
      totalArr[i].status = totalArr[i].status.substring(0, 40) + "...";
    }
    $("#detail" + num).text(totalArr[i].status);
    if (totalArr[i].ison=="offline"){
      $("#ison" + num).attr("src", "/images/userBusy.png");  
    }
    else{
      $("#ison" + num).attr("src", "/images/userOnline.png");
    }
    
    num++;
}
};
$("#offline").click(function() {
  offline();
});
$("#online").click(function() {
  online();
});
$("#all").click(function() {
  all();
});
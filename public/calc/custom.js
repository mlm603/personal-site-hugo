var string = "";
var curnum = "";
$("#AC").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = "";
  curnum = "";
  $("#display").html(curnum);
});
$("#CE").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string.substr(0, string.length - curnum.length);
  curnum = "";
  $("#display").html(curnum);
});
$("#0").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "0";
  curnum = curnum + "0";
  $("#display").html(curnum);
});
$("#1").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "1";
  curnum = curnum + "1";
  $("#display").html(curnum);
});
$("#2").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "2";
  curnum = curnum + "2";
  $("#display").html(curnum);
});
$("#3").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "3";
  curnum = curnum + "3";
  $("#display").html(curnum);
});
$("#4").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "4";
  curnum = curnum + "4";
  $("#display").html(curnum);
});
$("#5").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "5";
  curnum = curnum + "5";
  $("#display").html(curnum);
});
$("#6").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "6";
  curnum = curnum + "6";
  $("#display").html(curnum);
});
$("#7").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "7";
  curnum = curnum + "7";
  $("#display").html(curnum);
});
$("#8").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "8";
  curnum = curnum + "8";
  $("#display").html(curnum);
});
$("#9").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + "9";
  curnum = curnum + "9";
  $("#display").html(curnum);
});
$("#perd").click(function() {
  $("#xbut").css("background-color", "rgb(51,51,51)")
  $("#divbut").css("background-color", "rgb(51,51,51)")
  $("#-but").css("background-color", "rgb(51,51,51)")
  $("#plusbut").css("background-color", "rgb(51,51,51)")
  string = string + ".";
  curnum = curnum + ".";
  $("#display").html(curnum);

});
$("#x").click(function() {
  $("#xbut").css("background-color", "grey")
  string = string + "*";
  curnum = "";

});
$("#div").click(function() {
  $("#divbut").css("background-color", "grey")
  string = string + "/";
  curnum = "";

});
$("#-").click(function() {
  $("#-but").css("background-color", "grey")
  string = string + "-";
  curnum = "";

});
$("#plus").click(function() {
  $("#plusbut").css("background-color", "grey")
  string = string + "+";
  curnum = "";

});
$("#per").click(function() {
  string = string + "%";
  curnum = "";
  equals();

});
$("#equals").click(function() {
  equals();
});

var equals = function() {
  if (string.charAt(string.length-1) == "%") {
    ans=eval(string.substring(0,string.length-1));
    ans = ans / 100;
  }
  else{
   ans=eval(string); 
  }
  if (Math.floor(ans)!==ans){
    ans=ans.toFixed(7);
  }
  $("#display").html(ans);

};
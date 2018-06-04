var mins;
var maxout;

$(document).ready(function() {
  $("#remainingMins").text(25);
  $("#remainingSecs").text("00");
  mins = $("#remainingMins").text();
  secs = $("#remainingSecs").text();
  maxout = Number(mins) * 60 + Number(secs);
});
var audio;
var varCounter = 1;
var isPaused = false;
var myBreakTimer;
var varName = function() {
  if (!isPaused) {
    //$("#test").html(varCounter);
    if (varCounter <= maxout) {
      var secsRem = maxout - varCounter;
      $("#remainingMins").html(Math.floor(secsRem / 60));
      if ((secsRem - (Math.floor(secsRem / 60) * 60)) < 10) {
        $("#remainingSecs").html("0" + (secsRem - (Math.floor(secsRem / 60) * 60)));
      } else {
        $("#remainingSecs").html(secsRem - (Math.floor(secsRem / 60) * 60));
      }
      varCounter++;
    }
    if (varCounter == maxout + 1) {
      audio.pause();
      var newaudio = new Audio('http://www.brinkleyelectronics.com/informer/alert/hilo.wav');
      newaudio.play();
      clearInterval(myTimer);
      varCounter++;
  newmins = $("#BreakstartMins").text();
  $("#remainingMins").html(newmins);
  maxout = Number(newmins) * 60;
      newCounter=1;
      myBreakTimer=setInterval(breakTime, 1000);
      audio.play();
    }
  } else {
    audio.pause()
  }
};

var newmins;
var newCounter = 1;
var breakTime = function() {
 
  if (!isPaused) {
    //$("#test").html(newCounter);
    if (newCounter <= maxout) {
      var secsRem = maxout - newCounter;
      $("#remainingMins").html(Math.floor(secsRem / 60));
      if ((secsRem - (Math.floor(secsRem / 60) * 60)) < 10) {
        $("#remainingSecs").html("0" + (secsRem - (Math.floor(secsRem / 60) * 60)));
      } else {
        $("#remainingSecs").html(secsRem - (Math.floor(secsRem / 60) * 60));
      }
      newCounter++;
    }
    if (newCounter == maxout + 1) {
      audio.pause();
      var newaudio = new Audio('http://www.brinkleyelectronics.com/informer/alert/hilo.wav');
      newaudio.play();
      clearInterval(myBreakTimer);
      newCounter++;
      mins = $("#startMins").text();
  $("#remainingMins").html(mins);
  maxout = Number(mins) * 60;
      varCounter=1;
      myTimer=setInterval(varName, 1000);
      audio.play();
    }
  } else {
    audio.pause()
  }
};
var myTimer;
$("#start").click(function() {
  if (isPaused == true) {
    isPaused = false;
    audio.play();
  } else {
    audio = new Audio('http://soundbible.com/grab.php?id=1580&type=mp3');
    audio.play();
    audio.loop = true;
    myTimer=setInterval(varName, 1000);
  }
});
$("#pause").click(function() {
  isPaused = true;
});
$("#plusMin").click(function() {
  oldval = Number($("#startMins").text());
  $("#startMins").html(oldval + 1);
  $("#remainingMins").html(oldval + 1);
  mins = $("#remainingMins").text();
  secs = $("#remainingSecs").text();
  maxout = Number(mins) * 60 + Number(secs);
});
$("#minusMin").click(function() {
  oldval = Number($("#startMins").text());
  if (oldval > 0) {
    $("#startMins").html(oldval - 1);
    $("#remainingMins").html(oldval - 1);
    mins = $("#remainingMins").text();
    secs = $("#remainingSecs").text();
    maxout = Number(mins) * 60 + Number(secs);
  }
});
$("#BreakplusMin").click(function() {
  oldval = Number($("#BreakstartMins").text());
  $("#BreakstartMins").html(oldval + 1);
});
$("#BreakminusMin").click(function() {
  oldval = Number($("#BreakstartMins").text());
  if (oldval > 0) {
    $("#BreakstartMins").html(oldval - 1);
  }
});
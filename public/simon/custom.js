var lightup = 1;
var lightupArr = [0, 1, 2, 3];
var simonArr = [];
var playerArr = [];
var blueNoise = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redNoise = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var greenNoise=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var yellowNoise=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
$("#start").click(function() {
  SimonPlay()
})
var SimonPlay = function() {
  for (i = 0; i < simonArr.length; i++) {
    //alert(simonArr[i])
    var toLight = simonArr[i]
    if (toLight == 0) {
      window.setTimeout(BlueLight, i * 1000)
      window.setTimeout(BlueNormal, i * 1000 + 1000)
    }
    if (toLight == 1) {
      window.setTimeout(RedLight, i * 1000)
      window.setTimeout(RedNormal, i * 1000 + 1000)
    }
    if (toLight == 2) {
      window.setTimeout(GreenLight, i * 1000)
      window.setTimeout(GreenNormal, i * 1000 + 1000)
    }
    if (toLight == 3) {
      window.setTimeout(YellowLight, i * 1000)
      window.setTimeout(YellowNormal, i * 1000 + 1000)
    }
  }
  if (lightup > simonArr.length) {
    var timetolight = simonArr.length;
    if (timetolight == 0) {
      timetolight = 1;
    }
    var toLight = Math.floor(Math.random() * (4 - 0));
    if (toLight == 0) {
      window.setTimeout(BlueLight, timetolight * 1000)
      window.setTimeout(BlueNormal, timetolight * 1000 + 1000)
    }
    if (toLight == 1) {
      window.setTimeout(RedLight, timetolight * 1000)
      window.setTimeout(RedNormal, timetolight * 1000 + 1000)
    }
    if (toLight == 2) {
      window.setTimeout(GreenLight, timetolight * 1000)
      window.setTimeout(GreenNormal, timetolight * 1000 + 1000)
    }
    if (toLight == 3) {
      window.setTimeout(YellowLight, timetolight * 1000)
      window.setTimeout(YellowNormal, timetolight * 1000 + 1000)
    }
    simonArr.push(toLight);
  }

}
var BlueNormal = function() {
  $("#top-left").css("border", "15vh solid Blue");
  blueNoise.pause();
}

var BlueLight = function() {
  $("#top-left").css("border", "15vh solid LightBlue");
  blueNoise.play();
}
var RedNormal = function() {
  $("#top-right").css("border", "15vh solid Red");
  redNoise.pause();
}
var RedLight = function() {
  $("#top-right").css("border", "15vh solid Pink");
  redNoise.play();
}
var GreenNormal = function() {
  $("#bottom-left").css("border", "15vh solid Green");
  greenNoise.pause();
}
var GreenLight = function() {
  $("#bottom-left").css("border", "15vh solid Chartreuse")
  greenNoise.play();
}
var YellowNormal = function() {
  $("#bottom-right").css("border", "15vh solid Yellow");
  yellowNoise.pause();
}
var YellowLight = function() {
  $("#bottom-right").css("border", "15vh solid #FFFFCC");
  yellowNoise.play();
}
$("#top-left").click(function() {
  BlueLight(); window.setTimeout(BlueNormal,1000);
  playerArr.push(0);
  if (playerArr.length == simonArr.length) {
    checkAns();
  }
})
$("#top-right").click(function() {
  RedLight();
  window.setTimeout(RedNormal,1000);
  playerArr.push(1);
  if (playerArr.length == simonArr.length) {
    checkAns();
  }
})
$("#bottom-left").click(function() {
  GreenLight();
  window.setTimeout(GreenNormal,1000);
  playerArr.push(2);
  if (playerArr.length == simonArr.length) {
    checkAns();
  }
})
$("#bottom-right").click(function() {
  YellowLight();
  window.setTimeout(YellowNormal,1000);
  playerArr.push(3);
  if (playerArr.length == simonArr.length) {
    checkAns();
  }
})
var checkAns = function() {
  var isSame = "yes";
  for (i = 0; i < simonArr.length; i++) {
    if (simonArr[i] !== playerArr[i]) {
      isSame = "no";
    }
  }
  if (isSame == "yes") {
    lightup++;
    playerArr = [];
    window.setTimeout(SimonPlay,2000);
    $("#counter").text(lightup);
  }
  if (isSame == "no") {
    $("#counter").text("!!");
    playerArr = [];
    //lightup=1;
    window.setTimeout(function(){$("#counter").text(lightup)
  },1000);
    window.setTimeout(SimonPlay,2000);
  }
}
$("#reset").click(function(){
  playerArr=[];
  simonArr=[];
  lightup=1;
  $("#counter").text(lightup);
})

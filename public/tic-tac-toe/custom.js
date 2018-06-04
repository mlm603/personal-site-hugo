var complet = "x";
var playlet = "o";
var move;
$(document).ready(function() {
  $(".table-hide").hide();
  /*var startpt = Math.floor((Math.random() * 9));
  var tableRef = document.getElementById('myTable');
  var cell = tableRef.getElementsByTagName("td")[startpt];
  cell.innerHTML = complet;*/
  //compturn();
})
$("#top-left").click(function() {
  if ($("#top-left").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[0];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#top-center").click(function() {
  if ($("#top-center").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[1];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#top-right").click(function() {
  if ($("#top-right").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[2];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#mid-left").click(function() {
  if ($("#mid-left").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[3];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#mid-center").click(function() {
  if ($("#mid-center").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[4];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#mid-right").click(function() {
  if ($("#mid-right").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[5];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#bot-left").click(function() {
  if ($("#bot-left").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[6];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#bot-center").click(function() {
  if ($("#bot-center").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[7];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
$("#bot-right").click(function() {
  if ($("#bot-right").html() == "") {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[8];
    cell.innerHTML = playlet;
    checkwin();
    compturn();
  }
});
var oarr;
var compturn = function() {
  var tableRef = document.getElementById('myTable');
  /* var openarr = [];
   for (i = 0; i < 9; i++) {
     var tableRef = document.getElementById('myTable');
     var cell = tableRef.getElementsByTagName("td")[i];
     if(cell.innerHTML==""){
       openarr.push(i);
     }
   }  */
    randmove();
    var cell = tableRef.getElementsByTagName("td")[move];
    while (cell.innerHTML !== "") {
      randmove();
      cell = tableRef.getElementsByTagName("td")[move];
    }
    cell.innerHTML = complet;

  checkwin();
}
var randmove = function() {
  move = Math.floor((Math.random() * 9));

}
var checkwin = function() {
  var filledcells = 0;
  var tableRef = document.getElementById('myTable');
  var xarr = [];
  for (i = 0; i < 9; i++) {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[i];
    if (cell.innerHTML == "x") {
      xarr.push(1);
      filledcells++;
    } else {
      xarr.push(0);
    }
  }
  var oarr = [];
  for (i = 0; i < 9; i++) {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[i];
    if (cell.innerHTML == "o") {
      oarr.push(1);
      filledcells++;
    } else {
      oarr.push(0);
    }
  }
  //alert(xarr);
  /* if((xarr[0]==1&&xarr[1]==1&&xarr[2]==1)||(xarr[1]==1&&xarr[4]==1&&xarr[7]==1)){
     alert ("yes")
   }*/
  var gameover = "no";
  if ((xarr[0] == 1 && xarr[3] == 1 && xarr[6] == 1) || (xarr[1] == 1 && xarr[4] == 1 && xarr[7] == 1) || (xarr[2] == 1 && xarr[5] == 1 && xarr[8] == 1) || (xarr[0] == 1 && xarr[1] == 1 && xarr[2] == 1) || (xarr[3] == 1 && xarr[4] == 1 && xarr[5] == 1) || (xarr[6] == 1 && xarr[7] == 1 && xarr[8] == 1) || (xarr[0] == 1 && xarr[4] == 1 && xarr[8] == 1) || (xarr[2] == 1 && xarr[4] == 1 && xarr[6] == 1)) {
    if (playlet == "x") {
      alert("You win!");
    } else {
      alert("You lose!")
    }
    gameover = "yes"
    reset();
  }
  if ((oarr[0] == 1 && oarr[3] == 1 && oarr[6] == 1) || (oarr[1] == 1 && oarr[4] == 1 && oarr[7] == 1) || (oarr[2] == 1 && oarr[5] == 1 && oarr[8] == 1) || (oarr[0] == 1 && oarr[1] == 1 && oarr[2] == 1) || (oarr[3] == 1 && oarr[4] == 1 && oarr[5] == 1) || (oarr[6] == 1 && oarr[7] == 1 && oarr[8] == 1) || (oarr[0] == 1 && oarr[4] == 1 && oarr[8] == 1) || (oarr[2] == 1 && oarr[4] == 1 && oarr[6] == 1)) {
    if (playlet == "o") {
      alert("You win!");
    } else {
      alert("You lose!")
    }
    gameover = "yes";
    reset();
  }
  if (filledcells == 9 && gameover == "no") {
    alert("draw");
    reset();
  }
}
var reset = function() {
  var tableRef = document.getElementById('myTable');
  for (i = 0; i < 9; i++) {
    var tableRef = document.getElementById('myTable');
    var cell = tableRef.getElementsByTagName("td")[i];
    cell.innerHTML = "";
  }
}
$("#pickX").click(function() {
  playlet = "x";
  complet = "o";
  $(".choose-mark").hide();
  $(".table-hide").show();
  compturn();
})
$("#pickO").click(function() {
  playlet = "o";
  complet = "x";
  $(".choose-mark").hide();
  $(".table-hide").show();
  compturn();
})
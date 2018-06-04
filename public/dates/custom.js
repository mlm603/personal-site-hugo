$(document).ready(function() {
    $("#long-div").hide();
    $("#med-div").hide();
    $("#short-div").hide();
    $("#dets").hide();
    $("#datepicker").datepicker();
    $("#meddatepicker").datepicker();
    var $select = $(".0-24");
    for (i = 0; i <= 24; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
    var $select = $(".0-59");
    for (i = 0; i <= 59; i++) {
        if (i<10){
          i='0'+i
        }
        $select.append($('<option></option>').val(i).html(i))
    }
    var $select = $(".med0-24");
    for (i = 0; i <= 24; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
    var $select = $(".med0-59");
    for (i = 0; i <= 59; i++) {
        if (i<10){
          i='0'+i
        }
        $select.append($('<option></option>').val(i).html(i))
    }

});
$("#short-button").click(function() {
    $("#long-div").hide();
    $("#med-div").hide();
    $("#short-div").show();
    $("#dets").show();
    window.location.hash = '#short-div';
})
$("#med-button").click(function() {
    $("#short-div").hide();
    $("#long-div").hide();
    $("#med-div").show();
    $("#dets").show();
    window.location.hash = '#med-div';
})
$("#long-button").click(function() {
    $("#short-div").hide();
    $("#med-div").hide();
    $("#long-div").show();
    $("#dets").show();
    window.location.hash = '#long-div';
})
$("#send").click(function() {
    var email = 'mmaloy@luc.edu';
    var subject = 'Date invite';
    if ($("#short-div").is(":visible")===true){
        prefix="short"
    }
    if ($("#med-div").is(":visible")===true){
        prefix="med"
    }
    if ($("#long-div").is(":visible")===true){
        prefix="long"
    }
    dateloc=$("input[name='"+prefix+"dateoption']:checked").parent().text();
    date= $("#datepicker").datepicker().val();
    hour=$("#hour :selected").text();
    min=$("#min :selected").text();

    var emailBody = 'Hi Meghan,%0D%0DWould you like to go on a date with me?%0D%0DActivity: '+dateloc+'%0DDate: '+date+'%0DTime: '+hour+':'+min+'%0D%0DLove, Phillip';
    //document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    document.location="https://mail.google.com/mail?view=cm&tf=0&to="+email+"&su=Date invite&body=" + emailBody;
});
/*$("#medsend").click(function() {
    var email = 'mmaloy@luc.edu';
    var subject = 'Date invite';
    dateloc=$("input[name='meddateoption']:checked").parent().text();
    date= $("#meddatepicker").datepicker().val();
    hour=$("#medhour :selected").text();
    min=$("#medmin :selected").text();

    var emailBody = 'Hi Meghan,%0D%0DWould you like to go on a date with me?%0D%0DActivity: '+dateloc+'%0DDate: '+date+'%0DTime: '+hour+':'+min+'%0D%0DLove, Phillip';
    //document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    document.location="https://mail.google.com/mail?view=cm&tf=0&to="+email+"&su=Date invite&body=" + emailBody;
});*/
$(document).ready(function() {
   getquote();
   $("#twt a").attr('data-text', '"'+ $("#quote").text()+'"' +" "+ $("#author").text());
  $("#new-quote").click(function() {
    getquote();
    twtbutton();
    twttr.widgets.load(); 
  }); 
});

function getquote() {
  var arr = ["Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", "I'm not superstitious, but I am a little stitious.", "Occasionally, I'll hit someone with my car. So, sue me.", "Dwight, you ignorant slut!", "I understand nothing.", "It's a good thing Russia doesn't exist anymore.", "What's going to happen when you come into work and you're dead?", "I am faster than 80% of all snakes.", "Question...", "When someone smiles at me, all I see is a chimpanzee begging for its life", "The clothes at GapKids are too flashy, so I am forced to go to the American Girl store and order clothes for large colonial dolls.", "If I don't have some cake soon, I might die.", "I hate so much about the things you choose to be.", "There's too many people on this earth. We need a new plague.", "You and I are soup snakes.","How the turntables...","Sometimes, I feel like everyone I work with is an idiot. And by sometimes, I mean all times. All the time. Every of the time.","Nostalgia is truly one of the great human weaknesses. Second only to the neck.", "I love inside jokes. I'd love to be a part of one someday.","To get to sit in an air-conditioned room, downtown, judging people, while my lunch is paid for - that is the life.", "Whenever I try to make a taco, I get too excited and crush it.","I feel God in this Chili's tonight.","Who is Justice Beaver?","I have very little patience for stupidity.","Mini cupcakes? As in the miniature version of regular cupcakes? Which is already a mini version of cake? Honestly, where does it end with you people?"];
  var author = ["Michael Scott", "Michael Scott", "Michael Scott", "Michael Scott", "Michael Scott", "Michael Scott", "Michael Scott", "Dwight Schrute", "Dwight Schrute", "Dwight Schrute", "Angela Martin", "Stanley Hudson","Michael Scott","Dwight Schrute","Michael Scott","Michael Scott","Kevin Malone","Dwight Schrute","Michael Scott", "Stanley Hudson","Kevin Malone","Pam Beesly","Dwight Schrute","Kevin Malone","Kevin Malone"];
  var charpic = ["/images/michaelScott.png", "/images/dwightSchrute.png", "/images/angelaMartin.png", "/images/stanleyHudson.png","/images/pamBeasley.png","/images/kevinMalone.png"];
  var randnum = Math.random() * arr.length;
  $("#quote").html(arr[Math.floor(randnum)]);
  $("#author").html("-"+author[Math.floor(randnum)]);
  if (author[Math.floor(randnum)] == "Michael Scott") {
    $("#character img").attr("src", charpic[0]);
  }
  if (author[Math.floor(randnum)] == "Dwight Schrute") {
    $("#character img").attr("src", charpic[1]);
  }
  if (author[Math.floor(randnum)] == "Angela Martin") {
    $("#character img").attr("src", charpic[2]);
  }
  if (author[Math.floor(randnum)] == "Stanley Hudson") {
    $("#character img").attr("src", charpic[3]);
  }
  if (author[Math.floor(randnum)] == "Pam Beesly") {
    $("#character img").attr("src", charpic[4]);
  }
  if (author[Math.floor(randnum)] == "Kevin Malone") {
    $("#character img").attr("src", charpic[5]);
  }
}

  function twtbutton(){
     //ev.preventDefault();
  $("#twt iframe").remove(); 
      // Generate new markup
      var newBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
      .attr('data-count', 'none')
      .attr('data-via', 'mlm603')
        .attr('data-text', '"'+ $("#quote").text()+'"' +" "+ $("#author").text());
      $('#twt').append(newBtn);
      
}

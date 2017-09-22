'use strict';

$( document ).ready(function() {

  let blueDoor = document.getElementById('blueDoor');
  let redDoor = document.getElementById('redDoor');
  let H1 = document.getElementById('H1');
  
  const openingText = "Shiver me timbers! Ye wake up \'n find yourself separated from yer ship The Salty Dog\'n crew. Yer standin\' in wha\' ye reckon be a desert. Ye only know yer name, ye\'re thirsty, starvin\' \'n tired. Thar are two doors floatin\' in front o\' ye. One be red tha other blue both say \"Sail ho! this way to Thee Salty Dog.\"";
   //start random beginning scenario


  const blueDoorOutput0 = "Alas! Ye open thee blue door, nothing to see but a thick fog, ye step inside, ye have to git aft to yer galleon and mates.";
  const blueDoorOutput1 = "No quarter! Aft navigatin' through th' fog ye find yourself standin' knee deep in a pool o' water. Thar be a waterfall ahead.Ye 'ave ne'er seen water so clear, yer mouth feels like th' desert sand. As ye bend down t' cup a mouthful o' water ye hear a scream fer help comin' somewhere above th' waterfall.";
  const redDoorOuput0 = "Yarr! Ye open thee red door and look inside. Complete darkness but ye have to git aft to Thee Salty Dog, yer crew and quench yer thirst thar's no going aft. Ye step inside.";
  const redDoorOutput1 = "Ahoy! Ye step into thee darkness and feel a strong pull. Ye know it’s an undercurrent. Ye find yourself in thee middle of an ocean with no land in site, thirsty and surrounded by water, but not a drop to drink. On thee horizon, ye see yer galleon thee ‘salty dog’ fading into thee sunset. Ye bestow it yer all but after an hour of treading water, ye find yer way to Davy Jone’s locker.";
  
  

  //opening page with image, continue button and intro

  $(".H1").text(openingText);
  $("<button id='next'>Continue</button>").appendTo(".btnAppend");

  //first page show doors choose door 

  $( "#next").one('click',function() {
    $(".pirate,#next").hide();
    $(".H1").text("Choose yer fate.");
    $("#blueDoor, #redDoor").show(2000);
  });

 
  
  

  //second page choosing the red door
  
  $(redDoor).one('click', function(){
    $(blueDoor).hide(1000);
    $(".H1").show().text(redDoorOuput0);
    $("<button id='stepInsideRed'>Step inside</button>").appendTo(".btnAppend"); 
    
    //third page choosing the red door
    
    $("#stepInsideRed").one('click', function(){
      $(".H1").text(redDoorOutput1);
      $("#redDoor, #back").hide(1000);
      $("#stepInsideRed").remove();
       $("<div class='item'><img src=\"images/skull-crossbones.png\" alt =\"thumbnail\"/></div>").appendTo(".btnAppend"); 
    });
  });
  
 //secondPage choosing the blue door

  $(blueDoor).one('click', function(){
    $(redDoor).hide(1000);
$(".H1").show().text(blueDoorOutput0);
    $("<button id='stepInsideBlueDoor'>Continue page 2</button>").appendTo(".btnAppend"); 
    
    //third page choosing blue door 
    
    $( "#stepInsideBlueDoor" ).click(function() {
  $(".H1").text(blueDoorOutput1);
       $(blueDoor).hide(1000);
      $("#stepInsideBlueDoor").remove();
      
    $("<div class='item1'><img src=\"http://placehold.it/500x500\" alt =\"thumbnail\"/></div><button id='drink'>dink first</button> <div class='item2'><img src=\"http://placehold.it/500x500\" alt =\"thumbnail\"/></div><button id='help'>Help first</button>").appendTo(".btnAppend"); 
  
      
      
});//blue door third page function end
  });// blue door function end 


  
  
 
   


 


 

});//end ready 















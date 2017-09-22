'use strict';
//psudo psudo code
//-Set the stage/Intro
//-Choose a class
//-Scenario + Options
//-add/remove health
//-Outcome create health meter
$( document ).ready(function() {

  let blueDoor = document.getElementById('blueDoor');
  let redDoor = document.getElementById('redDoor');
  let H1 = document.getElementById('H1');
  const openingText = "Shiver me timbers! Ye wake up \'n find yourself separated from yer ship The Salty Dog\'n crew. Yer standin\' in wha\' ye reckon be a desert. Ye only know yer name, ye\'re thirsty, starvin\' \'n tired. Thar are two doors floatin\' in front o\' ye. One be red tha other blue both say \"Sail ho! this way to Thee Salty Dog.\"";
   //start random beginning scenario


  const blueDoorOutput0 = "Ye open th' blue door but ye cannot see anythin' but a thick fog. Do ye step through th' door?";
  const redDoorOuput0 = "Alas!, Ye open th\' red door, ye can nah see anythin\' but again ye\'re  thirsty \'n water does sound good right about now. Arrr! ye remember ye have to git aft to yer galleon, Ye can't go back now ye 'ave t' step inside.";
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

  //secondPage choosing the blue door

  $(blueDoor).one('click', function(){
    $(redDoor).hide(1000);

    $(".H1").text(blueDoorOutput0);
    $("<button id='stepInside'>Step inside</button>").appendTo(".btnAppend"); 
  });// blue door function end 
  
  

  //second page choosing the red door
  $(redDoor).one('click', function(){
    $(blueDoor).hide(1000);
    $(".H1").show().text(redDoorOuput0);
    $("<button id='stepInside'>Step inside</button>").appendTo(".btnAppend"); 
    //third page
    $("#stepInside").one('click', function(){
      $(".H1").text(redDoorOutput1);
      $("#redDoor, #stepInside, #back").hide(1000);
    });
  });


//third page
  $("#stepInside").one('click', function(){
    $(".H1").text();
    $("#redDoor, #stepInside, #back").hide(1000);
  });


 

});//end ready 















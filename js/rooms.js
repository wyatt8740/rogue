/* This file contains definitions for setting up the various rooms in the game.
   When a room is entered, a function here is called to build the room
   description, add items, enemies, and whatever else the room needs to
   function. This function should also contain functions for adjacent rooms
   and any other necessary logic. */

function buildRoom(variety){
   var room;
   if (variety === misc){
      var kind = 4*Math.random();
      if(kind == 1){
         room = treasure_room();
      }
      if(kind == 2){
         room = boss_room();
      }
      if(kind == 3){
         room = encounter_room();
      }
      if(kind == 4){
         room = exit_room();
      }
   }
   return room;
}

function treasure_room(room){
   //presumably this will generate items randomly
   
}

function boss_room(room){
   //dragons or something await, maybe smaller mobs?
}
function encounter_room(room){
   //standard room, with assorted obstacles and treasures, maybe sudden death events
}

function exit_area(room){
   //a way to the next area. How this works is TBD.
}
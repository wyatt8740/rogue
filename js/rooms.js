/* This file contains definitions for setting up the various rooms in the game.
   When a room is entered, a function here is called to build the room
   description, add items, enemies, and whatever else the room needs to
   function. This function should also contain functions for adjacent rooms
   and any other necessary logic. */

/*function buildRoom(variety){
   var room;
   if (variety === misc){
      var kind = Math.ceiling(4*Math.random());
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
}*/

function treasure_room(){
   //presumably this will generate items randomly
   var gold = Math.ceiling(100*Math.random());
   write("I've entered a small room, with a chest along the opposite wall. It's been left open and I can see gold pieces inside.");
   append("The only way out is back the way I came, to the west.");
   var encounter = roll();
   if(encounter == 1 || encounter == 2){
      append("Unfortunately I also see a goblin here. The creature immediately moves to guard the chest, glaring at me and readying its weapon. Here we go again.");
      start_battle(intro_goblin);
   }
}

function starter_room(){
   write("I look around this first room as I enter. It is small and empty. The door to the next room lies to the north.");
}
function enemy_room(){
   write("I enter a large interior hall. A large hearth dominates the western end of the room, the blaze within giving off heat that fills the room.");
   append("Along the eastern wall there is a sturdy metal door that has been left ajar. On the northern end a closed wooden door waits.");
   append("But in the center of the room a goblin has stood up from his chair at a long table.");
   append("The door behind me suddenly slams shut followed by the unmistakable sound of a bolt sliding home. I will have fight this creature");
   start_battle(intro_goblin);
}
function exit_area(){

   write("I enter a medium sized room. Moth eaten cloaks hang on one wall above dusty boots. Along the east are a few weapons and pieces of armor.");
   append("Clearly at some point this was a mud room, but that was so long ago nothing abandoned here is useful.");
   append("Though there may be some gold tucked away in the clothing. I could check before I move on.");
   append("The only way forward is a wooden door to the North. Light is spilling around its cracks and I can faintly hear trees rustling in the wind. This must be an exit")
}
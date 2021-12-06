/*
 *  This file is part of The Unnamed Game.
 *
 *  The Unnamed Game is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The Unnamed Game is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with The Unnamed Game.  If not, see <http://www.gnu.org/licenses/>.
 */

var game = {
  daysPlayed:    0,
  timeMinutes:   0,  /* goes from 0 to 1339. (60*24=1400)*/
  get dayOfWeek () {   /* function to get the day of the week. 0-6, Monday to
                          Sunday. */
    return ( this.daysPlayed % 7 );
  },
  playerPosition: 0, /* placeholder */
  gameFlags: {
    /* game flags go here */
  },
  hotKeysDisabled: false /* used to prevent 123456 and qwerty hotkeys from
                            interfering when text inputs are active */
};

function gameStart()
{
  /* start a new game */
  hideAllButtons();
  write(`I suddenly realize I am awake.

Eyes still closed, I yawn and stretch. Wow, that was a good night of sleep. And what a dream! It was so realistic. In it, I was panicked and scrambling to finish some group project while suffering from extreme burn-out.

In fact, it was so realistic and engrossing that you've forgotten who you are.

…What was your name, again…?\n`);
  // textPrompt([id of input element], [placeholder text, defaults to empty string])
  // automatically creates and appends a field to the output window contents
  textPrompt('player_name', 'First name');
  append('\n');
  textPrompt('player_lName', 'Last name');

  button[5].visible=true;
  button[5].func="gameStart_page2();";
  button[5].label="Next";
  /* give the player a gender option */

  /* give the player other stuff  */
}

// second page of character creation: only change anything after first page is
// filled properly (name is entered). Otherwise we stay in the page 1 state.
function gameStart_page2() {
  var name=document.getElementById('player_name');
  var lName=document.getElementById('player_lName');
  if((name && lName) && (name.value && lName.value)) {
    hideAllButtons();
    showStatsArea();
    // they both have to exist, and both have to be filled in
    player.name=name.value;
    player.lName=lName.value;

    player.avatar='./gfx/player.png';

    // initialize player stats and such
    player.money=400;
    player.stats.level=1;
    player.stats.exp=0;
    player.stats.HPMax=100;
    player.stats.HPCurr=player.stats.HPMax;
    player.stats.str=10;
    player.stats.acc=10;
    player.stats.def=10;
    player.stats.int=10;
    write("Yes, that's right. I'm " + player.name + ' ' + player.lName + `. Sword for hire. I'm tracking a troll in the hills west of the provincial capital.

With that identity crisis averted, I breathe a deep sigh. Thankfully, being banished, I am no longer a squire; I no longer have to worry about such complicated things. The dream is already fading from my memory as I stand up with a yawn.`);
    button[5].visible=true;
    button[5].func="gameStart_page3();";
    button[5].label="Next";
    
  }
  else {
    append(`\nSurely, I must have a full name. But what <i>was</i> it?`);
  }

}

function gameStart_page3() {
  hideAllButtons();
  write(`I hear a twig snap. Spinning around, I can see through the early morning fog something rustling in the overgrowth to the west.

Something that small is probably either a goblin or a wolf. My eyes dart around; goblins and wolves both often hunt in groups. Seeing nothing except for the small rustling patch in the overgrowth, I relax somewhat. Even if whatever it is knows I am here, I can almost certainly handle an enemy like this on my own.

As quickly as I can, I take my sword from its scabbard underneath my cot, No time to don armour now; the rustling is getting closer…`)
  button[5].visible=true;
  button[5].func="intro_goblin_battle();";
  button[5].label="Next";
}

function intro_goblin_battle() {
  write(`I only have wait about ten further seconds before something small and green emerges from the brush. It leaps in surprise. Apparently, the thing didn't know I was here. Instead of backing away, however, it collects itself and pulls a dagger from its belt.

Well, the goblin asked for it. Shame it wasn't a wolf, or it might have made good food. It looks like this will have to be a fight.\n`);
  start_battle("intro_goblin");
}

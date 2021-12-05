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

  write(`You suddenly realize you are awake.

Eyes still closed, you yawn and stretch. Wow, that was a good night of sleep! And what a dream. So realistic!

In fact, it was so realistic and engrossing that you've forgotten who you are.

…What was your name, again…?\n`);
  // textPrompt([id of input element], [placeholder text, defaults to empty string])
  // automatically creates and appends a field to the output window contents
  textPrompt('player_name', 'First name');
  append('\n');
  textPrompt('player_lName', 'Last name');

  button[0].visible=true;
  button[0].label="Main Menu";
  button[0].func="mainMenu();";
  button[5].visible=true;
  button[5].func="gameStart_page2();";
  button[5].label="Next";
  /* give the player a gender option */

  /* give the player other stuff  */
}

function gameStart_page2() {
  var name=document.getElementById('player_name');
  var lName=document.getElementById('player_lName');
  if((name && lName) && (name.value && lName.value)) { // they both have to exist, and both have to be filled in
    player.name=name.value;
    player.lName=lName.value;
  }
  
  
  write('');
}
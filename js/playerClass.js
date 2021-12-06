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

/*
 * See index.html for the rest of the JS files used, since
 * Javascript doesn't have "include" functionality built-in.
 */

/* create the player object. */
var player = {
  privData: { /* "Private" data, e.g. the raw values that the getters and
                 setters manipulate. Stored "privately" so we can dynamically
                 update the stat bars and such
              */
    name:      "—",
    lName:     "—",
    age:       18,  // idk if we need this
    gender:    "N", // neutral. for now we don't care at all about this
    money:     0,
    avatar:    ''   // the image displayed for the user
  },
  /* getters and setters start here */
  /* Documentation: doc/playerClass.txt */
  get name() {
    return this.privData.name;
  },
  set name(str) {
    this.privData.name = str;
    updateStatusPane();
  },
  get lName()
  {
    return this.privData.lName;
  },
  set lName(str) {
    this.privData.lName = str;
    updateStatusPane();
  },
  get age()
  {
    return this.privData.age;
  },
  set age(num)
  {
    this.privData.age=parseInt(num);
    updateStatusPane();
  },
  get sex()
  {
    return this.privData.sex;
  },
  set sex(str){
    var tmp=str.toUpper(); /* case-insensitive */
    if(tmp == 'M' || tmp == 'F' || tmp == 'O' || tmp == 'N')
    {
      this.privData.sex=tmp;
    }
    else
    {
      shellWrite("<yellow>ERROR</yellow>: sex must be one of 'M', 'F', 'N'! Leaving unchanged. You supplied: " + tmp + " !");
    }
    updateStatusPane();
  },
  get gender()
  {
    return this.privData.gender;
  },
  set gender(str)
  {
    var tmp=str.toUpper(); /* case-insensitive */
    if(tmp == 'M' || tmp == 'F' || tmp == 'O' || tmp == 'N')
    {
      this.privData.gender=tmp;
    }
    else
    {
      shellWrite("<yellow>ERROR</yellow>: gender must be one of 'M', 'F', 'O', 'N'! Leaving unchanged. You supplied: " + tmp + " !");
    }
    updateStatusPane();
  },
  get money()
  {
    return this.privData.money;
  },
  set money(num)
  {
    this.privData.money=parseInt(num);
    updateStatusPane();
  },
  get avatar()
  {
    return this.privData.avatar;
    // document.querySelector('#playerPic img').getAttribute('src');
  },
  set avatar(str)
  {
    this.privData.avatar=str;
    updateStatusPane();
  },
  stats:   {
    privData: {
      level:    0,
      exp:      0,
      HPMax:    0,
      HPCurr:   0,
      str:      0,
      acc:      0,
      def:      0,
      int:      0,
    },
    /* getters are apparently a new-ish thing in JS. Trying it out! */
    get level(){return this.privData.level;},
    set level(num){
      this.privData.level = parseInt(num);
      updateStatusPane();
    },
    get exp(){return this.privData.exp;},
    set exp(num){
      this.privData.exp=parseInt(num);
      updateStatusPane();
    },
    get HPMax(){return this.privData.HPMax;},
    set HPMax(num){
      this.privData.HPMax = parseInt(num);
      updateStatusPane();
    },
    get HPCurr(){return this.privData.HPCurr;},
    set HPCurr(num){
      this.privData.HPCurr = parseInt(num);
      updateStatusPane();
    },
    get str(){return this.privData.str;},
    set str(num){
      this.privData.str = parseInt(num);
      updateStatusPane();
    },
    get acc(){return this.privData.acc;},
    set acc(num){
      this.privData.acc=parseInt(num);
      updateStatusPane();
    },
    get def(){return this.privData.def;},
    set def(num){
      this.privData.def = parseInt(num);
      updateStatusPane();
    },
    get int(){return this.privData.int;},
    set int(num){
      this.privData.int = parseInt(num);
      updateStatusPane();
    },
    get XPToNextLevel () {
      /* To start, I'm just gonna say that levelling takes
         (your current level times 100) XP. Level 1: 100xp, 2: 200xp, etc. */
      return (parseInt(this.level) * 100);
    },
  },
  body:   {
    privData: {
      /* body type ID's are stored somewhere else (to be done).
       * type 0 is human.
       */
      head: {
        type: 0        
      },
      arms: {
        type: 0,
      },
      hands: {
        type: 0,
      },
      torso: {
        type: 0,
      },
      legs: {
        type: 0,
      },
      feet: {
        type: 0,
      },
    },
    get head() {
      return this.privData.head;
    },
    get arms() {
      return this.privData.arms;
    },
    get hands() {
      return this.privData.hands;
    },
    get torso() {
      return this.privData.torso;
    },
    get legs() {
      return this.privData.legs;
    },
    get feet() {
      return this.privData.feet;
    }
  },
};


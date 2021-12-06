/* default bare-bones templates for commonly used objects */

var templates = {
  npc: {
    
    race: 0, /* to-do: define global type constants */
    name: 'npc',
    desc: 'an NPC wojak',
    weaponStr: 1,
    weaponAcc: 1,
    weaponDef: 1,
    weaponInt: 1,
    stats: {
      level: 1,
      HPMax: 50,
      HPCurr: 50, // starting value
      dex: 0, 
      str: 0,
      agi: 0,
      int: 0, /* yes, you can have it be called int and JS doesn't complain */
      wis: 0
    }
  },
  intro_goblin: {    
    race: 1, /* goblin */
    name: 'goblin',
    desc: 'a startled goblin',
    weaponStr: 2,
    weaponAcc: 1,
    weaponDef: 1,
    weaponInt: 1,
    attackText: 'slashes viciously with its knife!',
    stats: {
      level: 1,
      HPMax: 70,
      HPCurr: 70, // starting value
      dex: 2, 
      str: 2,
      agi: 4,
      int: 0,
      wis: 0
    }
  },
  weapons: {
    starting_sword: {
      acc: 10, // accuracy bonus
      str: 4, // helps with attack strength
      def: 2, // helps with absorbing impact 
      int: 0, // helps with magical accuracy/power
    }
  }
};


function getWeaponData(weapon) {
  switch(weapon) {
    case 'starter_sword':
      return JSON.parse(JSON.stringify(templates.weapons.starting_sword));
      break;
    default:
      return null;
  }
}

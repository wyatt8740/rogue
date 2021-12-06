/* default bare-bones templates for commonly used objects */

var templates = {
  npc: {
    
    race: 0, /* to-do: define global type constants */
    stats: {
      dex: 0, 
      str: 0,
      agi: 0,
      int: 0, /* yes, you can have it be called int and JS doesn't complain */
      wis: 0
    }
  },
  intro_goblin: {    
    race: 1, /* goblin */
    stats: {
      dex: 2, 
      str: 2,
      agi: 4,
      int: 0, /* yes, you can have it be called int and JS doesn't complain */
      wis: 0
    }
  }
};

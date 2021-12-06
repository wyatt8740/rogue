// Battle script.



function start_battle(enemy)
{
  switch(enemy)
  {
    case "intro_goblin":
      // clone an object. No functions will survive a clone like this, but that's okay here.
      currentEnemy=JSON.parse(JSON.stringify(templates.intro_goblin));
      break;
    default:
      console.log("WARNING: Could not find enemy to start battle with! (start_battle() failed)");
  }
  fight_status();
  // TODO: if we had items, we should have a button to use the items in battle. Unimplemented right now.
  button[0].visible=true;
  button[0].label='Attack';
  button[0].func='attack_enemy();'
}

function fight_status()
{
  write("I am engaged in combat against " + currentEnemy.desc + '.\n\n');
  append('The ' + currentEnemy.name + ' looks ' + enemy_health_estimate());
}

function enemy_health_estimate() // (enemy) looks...
{
  var healthPercent=Math.floor(currentEnemy.hpCurr * 100) / currentEnemy.hpMax;
  if(healthPercent > 99){ // ~100%
    return 'to be undamaged..';
  }
  else if(healthPercent > 89){ // ~90%+
    return 'almost totally unharmed.';
  }
  else if(healthPercent > 74) { // ~75+
    return 'to be hurt, but still in decent shape.';
  }
  else if(healthPercent > 49) { // ~50%+
    return 'determined to keep fighting.';
  }
  else if(healthPercent > 32) {// ~33%+
    return 'like the fight is starting to get to them. Their confidence seems shattered.';
  }
  else if(healthPercent > 14) {// ~15%+
    return `to be pretty hurt. I don't think there's much fight left in them now…`;
  }
  else { // (epsilon) to 15%
    return 'Like they could go down any time now. I think victory is within sight.';
  }
}

function attack_enemy() {
  var roll=player_attack_roll();
  var dmg=roll.dmg;
  var crit=roll.crit;
  if(dmg==0) {
    write('Argh! I missed…')
    append('\n\n<b>The enemy took 0 damage</b>.\n')
  }
  else {
    write('I ' (crit ? 'crit ': 'hit ' ) + 'the ' + currentEnemy.name + ' for ' + dmg + ' damage.\n');
  }
  currentEnemy.hpCurr -= dmg;
  currentEnemy.hpCurr=Math.round(currentEnemy.hpCurr);
  if(currentEnemy.hpCurr > 0) {
    enemy_turn(); // it is now the enemy's turn to attack you.
  }
  else {
    append('I have defeated the ' + currentEnemy.name + '!');
    battle_victory();
  }
}

function player_attack_roll()
{
  var str=player.stats.str + player.weapon.str;
  var acc=player.stats.acc + player.weapon.acc;
  var def=player.stats.def + player.weapon.def;
  var int=player.stats.int + player.weapon.int;
  
  
  
  // ripped off the damage formula from Pokémon.
  var damage_dealt_to_enemy=((((((2 * player.level)/5) + 2) * player.weapon.str * player.stats.str / currentEnemy.str)/50) + 2);

  // roll a d20 for miss, roll for crit. Add a small amount of randomness.
  var rolled=roll(20);
  if(rolled==0) {
    return {
      dmg: 0,
      crit: false
    };
  }
  else if(rolled < 20) {
    return {
      dmg: Math.round(damage_dealt_to_enemy * (rolled / 2)),
      crit: false
    }
  }
  else { // rolled 20, double the damage on top of that.
    return {
      dmg: Math.round(damage_dealt_to_enemy * rolled),
      crit: true
    };
  }
}

function enemy_turn() {
  var str=player.stats.str + player.weapon.str;
  var acc=player.stats.acc + player.weapon.acc;
  var def=player.stats.def + player.weapon.def;
  var int=player.stats.int + player.weapon.int;
  
  
  
  // ripped off the damage formula from Pokémon.
  var damage_dealt_to_enemy=((((((2 * currentEnemy.level)/5) + 2) * currentEnemy.str * player.stats.str / currentEnemy.str)/50) + 2);
  
  // roll a d20 for miss, roll for crit. Add a small amount of randomness.
  var rolled=roll(20);
  if(rolled==0) {
    return {
      dmg: 0,
      crit: false
    };
  }
  else if(rolled < 20) {
    return {
      dmg: Math.round(damage_dealt_to_enemy * (rolled / 2)),
      crit: false
    }
  }
  else { // rolled 20, double the damage on top of that.
    return {
      dmg: Math.round(damage_dealt_to_enemy * rolled),
      crit: true
    };
  }
}

function enemy_attack_roll()
{
  
}

function battle_victory()
{
  
}
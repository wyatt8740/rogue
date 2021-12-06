// Battle script.



function start_battle(enemy)
{
  switch(enemy)
  {
    case "intro_goblin":
    // clone an object. No functions will survive a clone like this, but that's okay here.
    currentEnemy=JSON.parse(JSON.stringify(templates.intro_goblin));
    break;
    
  }
}

function fight_status()
{
/*  write("You are engaged in combat against " + + );*/

}

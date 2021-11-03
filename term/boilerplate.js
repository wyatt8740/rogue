var term=null;
var blessed=null;
module.exports = blessed;
/*exports window.blessed; */
blessed=require('neo-blessed');
module.exports=term;
/* we need to also use -x term.js when browserifying to exclude term.js, since we have that in the window context with a shim */



/*blessed.Terminal(); */
window.addEventListener('load', function() {
  /* from window.Terminal shim */
term=new Terminal({cols: 80, rows: 24, screenKeys: true});
  /*    
        term.on('data', function(data) {
        socket.emit('data', data);
        });*/
  
  term.on('title', function(title) {
    document.title = title;
  });
  termElement=document.querySelector("term");
  /* overwrites whatever element you open */
  term.open(termElement);
  
  term.write('\x1b[31mWelcome to term.js!\x1b[m\r\n');

  /* could listen for keypresses or use local messaging */
  /* this can be used for curses stuff in js(!) */
  /*    socket.on('data', function(data) {
        term.write(data);
        })*/
})

/* disconnect */
/*       term.destroy(); */

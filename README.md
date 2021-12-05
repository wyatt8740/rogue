# Unnamed Game

Map:

index.html: game page. Add new js files to the head of this html.

* `js/main.js`: main functionality

* `js/rooms.js`: room definitions and logic

* `js/gameState.js`: Game saving/loading logic. Serializes/deserializes entire game state to/from JSON. Also handles game button handling.
  * Each button has a label and a function associated with it, and can be enabled, hidden, or disabled (grayed out).
  * When a button is clicked, an event listener picks it up, looks up the function currently assigned to the button in an array, and runs that function.
  * Access buttons with button[(number)].

* `js/objTemplates.js`: contains "prototype" definitions for objects that we might expect something else to "inherit" from.

* `playerClass.js`: contains player information, getters, setters for stats.



You should be able to introspect every non-internal variable in the entire game from the javascript console on the webpage.


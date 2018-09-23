import Vignettes from './vignettes.js'
import {setup_window_variables} from "./windowVariables.js"

//let p = new p5();

window.setup = function() {
  angleMode(DEGREES);
  imageMode(CENTER);

  let vignettes = new Vignettes();
  setup_window_variables(vignettes);
  setup_vignettes(vignettes);
  setup_new_canvas(1280, 720);
}

window.draw = function() {
  background(255);
  vignettes.draw();
}

window.setup_new_canvas = function(width, height){
    window.p5Canvas = createCanvas(width, height).canvas;
    setup_scenes(vignettes);
}

window.mouseClicked = function(){
  vignettes.click();
}

window.mouseDragged = function(){
  vignettes.mouse_dragged();
}

window.mouseMoved = function(){
  vignettes.mouse_moved();
}

//p5js' default keyPressed function only seems to trigger once for certian keys in chrome.
//I am overriding this event with one that seems more reliable.
document.onkeydown = function(e) {
  if (!e.metaKey) {
    e.preventDefault();
  }

  keyCode = e.keyCode;
  key     = e.key;

  vignettes.key_pressed();

}

window.onkeyrelease = function(oPEvt){
  vignettes.key_released();
}

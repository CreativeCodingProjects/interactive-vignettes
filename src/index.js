import Vignettes from './vignettes.js'
import {setup_window_variables} from "./windowVariables.js"

//let p = new p5();

let base_size = {x:1280, y:720};

window.setup = function() {
  angleMode(DEGREES);
  imageMode(CENTER);

  let vignettes = new Vignettes(base_size);
  setup_window_variables(vignettes);
  setup_new_canvas(base_size.x, base_size.y);
  setup_vignettes(vignettes);
  setup_scenes(vignettes);

}

window.draw = function() {
  width  = base_size.x;
  height = base_size.y;
  background(255);
  vignettes.draw();
}

window.setup_new_canvas = function(i_width, i_height){
    window.p5Canvas = createCanvas(i_width, i_height).canvas;
}

window.mouseClicked = function(){
  vignettes.click();
}

window.mousePressed = function(){
  vignettes.mouse_pressed();
}

window.mouseReleased = function(){
  vignettes.mouse_released();
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

document.onkeyup = function(oPEvt){
  vignettes.key_released();
}

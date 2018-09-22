import Vignettes from './vignettes.js'
import {setup_window_variables} from "./windowVariables.js"

let p = new p5();

window.setup = function() {
  angleMode(DEGREES);
  imageMode(CENTER);

  let vignettes = new Vignettes();
  setup_window_variables(vignettes);
  setup_vignettes(vignettes);
  setup_new_canvas(100, 100);
}

window.draw = function() {
  background(255);
//  vignettes.draw();
}

window.setup_new_canvas = function(width, height){
    createCanvas(width, height);
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

window.keyPressed = function(){
  console.log(keyCode);
}

window.keyReleased = function(){
  vignettes.key_released();
}

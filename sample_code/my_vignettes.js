function setup_vignettes(vignettes){

}

function setup_scenes(){
  var scene1         = new Scene(scene1_draw);
  scene1.click       = scene1_click;
  scene1.key_pressed = scene1_keypress;

  var scene2         = new Scene(scene2_draw);
  scene2.click       = scene2_click;
  scene2.key_pressed = scene2_keypress;
}



function scene1_draw(){
  background(255,0,0);
  ellipse(mouseX, mouseY, 100, 100);
}

function scene1_click(){
  console.log("scene1 clicked!", mouseX, mouseY);
}

function scene1_keypress(){
  console.log("scene1 key pressed!");
  vignettes.go_to_scene(2);

}



function scene2_draw(){
  background(0,255,0);
  rect(mouseX, mouseY, 100, 100);
}

function scene2_click(){
  console.log("scene2 clicked!");
}

function scene2_keypress(){
  console.log("scene2 key pressed!");
}

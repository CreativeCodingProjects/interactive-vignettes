export default class Vignettes{

  constructor(){
    this._scenes = [];
    this._current_scene = 0;
  }

  add_scene(scene){
    this._scenes.push(scene);
  }

  draw(){
      if(this._scenes.length > 0){
        this._scenes[this._current_scene].draw();
      }
  }

  click(){
    if(this._scenes.length > 0){
      this._scenes[this._current_scene].click();
    }
  }

  mouse_moved(){
    if(this._scenes.length > 0){
      this._scenes[this._current_scene].mouse_moved();
    }
  }

  mouse_dragged(){
    if(this._scenes.length > 0){
      this._scenes[this._current_scene].mouse_dragged();
    }
  }

  key_pressed(keyboard_event){

    console.log(keyCode);
    if(keyCode == 39){
        this._current_scene = this._current_scene - 1;
        this._current_scene = this._current_scene < 0 ? this._scenes.length - 1 : this._current_scene;
    }else if(keyCode == 37){
        this.current_scene = (this.current_scene + 1)%this._scenes.length;
    }else if(this._scenes.length > 0){
        this._scenes[this._current_scene].key_pressed();
    }

    console.log(this._current_scene);

  }

  key_released(keyboard_event){
    this._scenes[this._current_scene].key_released();
  }

}

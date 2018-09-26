export default class Scene{

  constructor(draw_function){
      this._draw_function           = draw_function;
      this._click_function          = function(){};
      this._mouse_moved_function    = function(){};
      this._mouse_dragged_function  = function(){};
      this._mouse_pressed_function  = function(){};
      this._mouse_released_function = function(){};
      this._key_pressed_function    = function(){};
      this._key_released_function   = function(){};
      vignettes.add_scene(this);
  }

  draw(){
      this._draw_function();
  }

  get click(){
    return this._click_function;
  }

  get mouse_pressed(){
    return this._mouse_pressed_function;
  }

  get mouse_released(){
    return this._mouse_released_function;
  }

  get mouse_moved(){
    return this._mouse_moved_function;
  }

  get mouse_dragged(){
    return this._mouse_dragged_function;
  }

  get key_pressed(){
    return this._key_pressed_function;
  }

  get key_released(){
    return this._key_released_function;
  }

  set click(func){
    this._click_function = func;
  }

  set mouse_pressed(func){
    this._mouse_pressed_function = func;
  }

  set mouse_released(func){
    this._mouse_released_function = func;
  }

  set mouse_moved(func){
    this._mouse_moved_function = func;
  }

  set mouse_dragged(func){
    this._mouse_dragged_function = func;
  }

  set key_pressed(func){
    this._key_pressed_function = func;
  }

  set key_released(func){
    this._key_released_function = func;
  }

}

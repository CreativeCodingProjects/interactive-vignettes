import AssetLoader from "./assetLoader.js"

export default class Vignettes{

  constructor(){
    this._scenes = [];
    this._asset_loader = new AssetLoader();
    this._current_scene = 0;
    this._recording = false;
  }

  add_scene(scene){
    this._scenes.push(scene);
  }

  draw(){
      if(this._scenes.length > 0 && this._asset_loader.all_assets_loaded()){
        this._scenes[this._current_scene].draw();
      }

      if(this._recording){
        this.capture_frame();
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

  manually_change_scenes(manually_change){
    this._manually_change_scenes = manually_change;
  }

  go_to_scene(scene_number){
    this._current_scene = scene_number-1;
  }

  key_pressed(){

    console.log(keyCode, key);

    if(key == "ArrowRight" && !this._manually_change_scenes){// 'rightArrow'
        this.increment_current_scene();
    }else if(key == "ArrowLeft"  && !this._manually_change_scenes){// 'leftArrow'
        this.decrement_current_scene();
    }else if(key == "r" && !this._recording){// 'r'
        this.begin_recording();
    }else if(key == "r" && this._recording){
        this.end_recording();
    }else if(this._scenes.length > 0){
        this._scenes[this._current_scene].key_pressed();
    }

  }

  increment_current_scene(){
    this._current_scene = (this._current_scene + 1)%this._scenes.length;
  }

  decrement_current_scene(){
    this._current_scene = this._current_scene - 1;
    this._current_scene = this._current_scene < 0 ? this._scenes.length - 1 : this._current_scene;
  }

  key_released(keyboard_event){
    this._scenes[this._current_scene].key_released();
  }

  begin_recording(){
    console.log("started recording");
    ccapturer.start();
    this.capture_frame();
    this._recording = true;
  }

  capture_frame(){
    ccapturer.capture(p5Canvas);
  }

  end_recording(){
    console.log("finished recording");
    ccapturer.stop();
    ccapturer.save();
    this._recording = false;
  }

  //-------------asset loading and displaying------------------
    load_image(name, file_type){
      this._asset_loader.load_image(name, file_type);
    }
    load_image_sequence(name, file_type, sequence_length){
      this._asset_loader.load_image_sequence(name, file_type, sequence_length);
    }
    load_sound(name, file_type){
      this._asset_loader.load_sound(name, file_type);
    }
    draw_image(name, x, y){
      this._asset_loader.draw_image(name, x, y);
    }
    draw_image_from_sequence(name, x, y, frame){
      this._asset_loader.draw_image_from_sequence(name, frame, x, y);
    }
    play_sound(name){
      this._asset_loader.play_sound(name);
    }
    stop_sound(name){
      this._asset_loader.stop_sound(name);
    }
  //-----------------------------------------------------------

}

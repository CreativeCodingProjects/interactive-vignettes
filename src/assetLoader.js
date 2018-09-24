export default class AssetLoader{

  constructor(){
    this._total_assets_to_load = 0;
    this._loaded_images = 0;
    this._images = {};
    this._image_sequences = {};
    this._sounds = {};
  }

  load_image(name, file_type){
    this._total_assets_to_load++;
    this._images[name] = loadImage("./assets/images/"+name+"."+file_type, this.asset_loaded.bind(this));
  }

  load_image_sequence(name, file_type, sequence_length){
    this._total_assets_to_load += sequence_length;
    for(var i = 0; i < image_count; ++i){
      this._image_sequences[name][i] = loadImage("assets/images/"+name+"/"+name+"_"+i+"."+file_type, this.asset_loaded.bind(this));
    }
  }

  load_sound(name, file_type){
    this._total_assets_to_load++;
    this._sounds[name] = loadSound("./assets/sounds/"+name+"."+file_type, this.asset_loaded.bind(this));
  }

  draw_image(name, x, y){
    image(this._images[name], x, y);
  }

  draw_image_from_sequence(name, frame, x, y){
    image(this._image_sequences[name][frame], x, y);
  }

  play_sound(name){
    this._sounds[name].play();
  }

  stop_sound(name){
    if ( this._sounds[name].isPlaying() ) { 
      this._sounds[name].stop();
    }
  }

  all_assets_loaded(){
    return this._loaded_images >= this._total_assets_to_load;
  }

  asset_loaded(){
    this._loaded_images++;
  }

}

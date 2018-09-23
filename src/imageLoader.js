export default class PImageLoader{

  constructor(){
    this._total_images_to_load = 0;
    this._loaded_images = 0;
    this._images = {};
    this._image_sequences = {};
  }

  load_image(name, file_type){
    this._total_images_to_load++;
    this._images[name] = loadImage("./assets/"+name+"."+file_type, this.image_loaded.bind(this));
  }

  load_image_sequence(name, file_type, sequence_length){
    this._total_images_to_load += sequence_length;
    for(var i = 0; i < image_count; ++i){
      this._image_sequences[name][i] = loadImage("assets/"+name+"/"+name+"_"+i+"."+file_type, this.image_loaded.bind(this));
    }
  }

  draw_image(name, x, y){
    image(this._images[name], x, y);
  }

  draw_image_from_sequence(name, frame, x, y){
    image(this._image_sequences[name][frame], x, y);
  }

  all_images_loaded(){
    return this._loaded_images >= this._total_images_to_load;
  }

  image_loaded(){
    this._loaded_images++;
  }

}

import Scene from "./scene.js"

export const setup_window_variables = function(vignettes){
  window.vignettes = vignettes;
  window.Scene     = Scene;
  window.ccapturer = new CCapture( { format: 'webm' } );
}

export const setup_window_variables = function(vignettes){
  window.vignettes = vignettes;
  window.ccapturer = new CCapture( { format: 'webm' } );
}

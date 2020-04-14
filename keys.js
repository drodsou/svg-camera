var key = {
  LEFT:   37,
  RIGHT:  39,
  UP:     38,
  DOWN:   40,
  MINUS: 109,
  PLUS:  107,
};

let vb = {
  x: 0,
  y: 0,
  w: 1000,
  h: 666.67,
  str : ()=>`${vb.x} ${vb.y} ${vb.w} ${vb.h}`,
}


document.body.addEventListener('keyup', evt=>{
// document.getElementById('landscape').addEventListener('keyup', evt=>{
  let svg = document.getElementById('landscape').contentDocument.getElementById('thesvg');
  var keycode = evt.keyCode;
  //console.log('keydown', keycode);

  // -- zoom
  let ZOOM = .9
  if (keycode === key.MINUS) {
    let newW = vb.w / ZOOM;
    let newH = vb.h / ZOOM;
    let dX = (vb.w - newW) /2 ;
    let dY = (vb.h - newH) /2 ;
    vb.w = newW; vb.h = newH;
    vb.x += dX; vb.y += dY;
  }
  if (keycode === key.PLUS) {
    let newW = vb.w * ZOOM;
    let newH = vb.h * ZOOM;
    let dX = (vb.w - newW) /2 ;
    let dY = (vb.h - newH) /2 ;
    vb.w = newW; vb.h = newH;
    vb.x += dX; vb.y += dY;
  }

  if (keycode === key.RIGHT) {
    vb.x += vb.w * (1 - ZOOM);  
  }
  if (keycode === key.LEFT) {
    vb.x -= vb.w * (1 - ZOOM);  
  }

  if (keycode === key.DOWN) {
    vb.y += vb.h * (1 - ZOOM);  
  }
  if (keycode === key.UP) {
    vb.y -= vb.h * (1 - ZOOM);  
  }


  svg.setAttribute("viewBox", vb.str()); 
  console.log(vb.str())


});




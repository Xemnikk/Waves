
let angle = 0;
let w = 30;
let ma;

function setup() {
  createCanvas(1510, 725, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  ortho(-400, 370, -800, 800, 0, 1000);
  ambientLight(50, 0, 255, 0, );
  // translate(-100, -100, -100, 100)
  rotateX(-QUARTER_PI);
  rotateY(ma);
  //rotateX (angle * .10);
  //let offset = 0;
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      offset = map(d, 0, maxD, 1.0, -1.0);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, -800);
      ambientMaterial(190);
      translate(x - width / 2, 0, z - height / 2);
      box(w - 2, h, w - 2);
      //rect(x - width / 2 + w / 2, 0, w-1, h);

      pop();
    }
    //offset += ;
    angle += .0045;
  }
}

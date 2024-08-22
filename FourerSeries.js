let time = 0;
let wave = [];
let path = [];

let timeDelta;
let nTerms;

function setup() {
  createCanvas(600, 400);
  nTerms = createSlider(1, 50, 5); // Adjust number of terms
  timeDelta = createSlider(1, 10, 1) // Adjust time
}

function draw() {
  background(0);
  translate(150, 200);

  let x = 0;
  let y = 0;

  for (let i = 0; i < nTerms.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI)); // using the formula 4/(n*pi) * sin(t*theta)
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    stroke(255);
    line(prevx, prevy, x, y);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.01*timeDelta.value();


  if (wave.length > 300) {
    wave.splice(-50); // Remove last 50 elements from the stack
  }
}

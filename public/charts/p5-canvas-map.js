//p5 canvas functions
let mapImg;
let cLon = -95.6632;
let cLat = 36.5979;
let w = 500;
let h = 400;
let zoom = 2.55;

const cities = [
  {
    city: "Austin",
    state: "TX",
    lat: 36.5979,
    lon: -97.74305556
  },
  {
    city: "San Francisco",
    state: "CA",
    lat: 37.773972,
    lon: -122.431297
  },
  {
    city: "Montgomery",
    state: "AL",
    lat: 32.36681,
    lon: -86.29997
  },
  {
    city: "San Diego",
    state: "CA",
    lat: 32.715736,
    lon: -117.161087
  },
  {
    city: "Helena",
    state: "MT",
    lat: 46.59271,
    lon: -112.03611
  },
  {
    city: "Raleigh",
    state: "NC",
    lat: 35.7721,
    lon: -78.63861
  },
  {
    city: "Omaha",
    state: "NE",
    lat: 41.25861,
    lon: -95.93779
  },
  {
    city: "New York",
    state: "NY",
    lat: 40.71427,
    lon: -74.00597
  }
];

async function preload() {
  mapImg = await loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/-95.6632,36.5979,2.55,0,0/500x400?access_token=pk.eyJ1IjoibWljaGFlbGFkYW1iZXJyeTMiLCJhIjoiY2p4c2Vuc3kxMGkyNDNmbWpkYTMwbWR3dSJ9.3AsBmc5Rpw4xcj4_EPF5bA"
  );
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  let ctx = createCanvas(w, h);
  ctx.parent("us-map");
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapImg, 0, 0);

  var cx = mercX(cLon);
  var cy = mercY(cLat);

  //san diego sample test data
  // lat: 32.715736,
  // lon: -117.161087

  const makeDataBubble = (rawLat, rawLon, r, col) => {
    let x = mercX(rawLon) - cx;
    let y = mercY(rawLat) - cy;
    console.log("calculated lat lon as ", x, y);
    if (x < -width) {
      x += width;
    } else if (x > width) {
      x -= width;
    }
    let d = 4;
    noStroke();
    fill(col);
    ellipse(x, y, r, r);
  };

  cities.forEach(city => {
    let seed = Math.random();
    let rad = seed * 10 + 10;
    if (seed < 0.2) {
      col = "#fcb41d";
    } else if (seed < 0.5) {
      col = "#ee58fb";
    } else {
      col = "#36c3fb";
    }
    makeDataBubble(city.lat, city.lon, rad * 1.8, `${col}22`);
    makeDataBubble(city.lat, city.lon, rad, col);
  });
  fill("#283040");
  rect(-(width / 2), -(height / 2), width, 40);
  rect(-(width / 2), height / 2 - 30, width, 30);
  fill("#36c3fb");
  ellipse(160, -180, 10, 10);
  fill("#ee58fb");
  ellipse(0, -180, 10, 10);
  fill("#fcb41d");
  ellipse(90, -180, 10, 10);
  fill("#67758d");
  textSize(12);
  text("Operations", 10, -175);
  text("Pending", 100, -175);
  text("Upgraded", 170, -175);
}

//p5 canvas functions
let mapImg;
let cLon = -94.8492;
let cLat = 37.6767;
let w = 500;
let h = 400;
let zoom = 2.06;

const cities = [
  {
    city: "Austin",
    state: "TX"
  },
  {
    city: "San Francisco",
    state: "CA"
  },
  {
    city: "Montgomery",
    state: "AL"
  },
  {
    city: "San Diego",
    state: "CA"
  },
  {
    city: "Helena",
    state: "MT"
  },
  {
    city: "Raleigh",
    state: "NC"
  },
  {
    city: "Omaha",
    state: "NE"
  },
  {
    city: "New York",
    state: "NY"
  }
];

async function preload() {
  mapImg = await loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/-95.6632,36.5979,2.55,2,5/500x400?access_token=pk.eyJ1IjoibWljaGFlbGFkYW1iZXJyeTMiLCJhIjoiY2p4c2Vuc3kxMGkyNDNmbWpkYTMwbWR3dSJ9.3AsBmc5Rpw4xcj4_EPF5bA"
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
  //translate(width / 2, height / 2);
  //imageMode(CENTER);
  image(mapImg, 0, 0);

  var cx = mercX(cLon);
  var cy = mercY(cLat);
}

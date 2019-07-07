function randomDate(type) {
  //type should be "start" or "end"
  let month, day, year;
  year = type === "start" ? "19" : "20";
  month = Math.floor(Math.random() * 12);
  day = Math.floor(Math.random() * 30);
  return `${month}/${day}/${year}`;
}

const fakeProjectNames = [
  "AR Game Using Unity",
  "React Component Library",
  "Drag and Drop Email Editor",
  "Sketch Plugin for Importing CSV Files",
  "News Quiz Generator",
  "JavaScript Maps Library",
  "D3 Helper Library",
  "Grateful Data Project"
];

const fakeUserData = [
  {
    name: "Stevie Nicks",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    name: "Neil Degrasse Tyson",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    name: "Mickey Hart",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    name: "Nancy Pelosi",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    name: "Duane 'The Rock' Johnson",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    name: "John Dickerson",
    url: "https://cdn.citatis.com/img/a/1b/17307.v1.jpg"
  },
  {
    name: "Uma Thurman",
    url:
      "data:image/jpeg;base64,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"
  }
];

const randomAvatars = [];

console.log(randomDate("start"));
console.log(randomDate("end"));

function getInitialData() {
  let commitList = [
    { m: "Lorem ipsum dolor sit amet", time: "2 days ago" },
    { m: "consectetur adipiscing elit.", time: "2 days ago" },
    { m: "Nullam efficitur tellus quis", time: "2days ago" },
    {
      m: "Nullam est ex, ullamcorper non aliquam elementum",
      time: "2 days ago"
    },
    { m: "Sed imperdiet fringilla consequat", time: "3 days ago" },
    { m: "Sed fermentum convallis mauris eget", time: "3 days ago" },
    { m: "Pellentesque tempus nisi turpis", time: "3 days ago" }
  ];
  const data = {};
  data.budget = (Math.random() * 200000).toFixed(2);
  data.operations = (Math.random() * 50000).toFixed(2);
  data.userName = "Michael Berry";
  let budgetMovement = Math.random() >= 0.5;
  data.budgetChange = budgetMovement
    ? Math.floor(Math.random() * 100)
    : 0 - Math.floor(Math.random() * 100);
  data.requests = (Math.random() * 30000).toFixed(2);
  let requestMovement = Math.random() >= 0.5;
  data.requestChange = requestMovement
    ? -Math.floor(Math.random() * 100)
    : Math.floor(Math.random() * 100);
  data.progress = Math.floor(Math.random() * 100);
  data.commitList = commitList;
  return data;
}

const data = getInitialData();
console.log(data);

function setRandomData() {
  const setProjectData = () => {
    const table = d3.select("#latest-projects table");
    for (let i = 0; i < 7; i++) {
      let random = Math.random();
      let status, color;

      if (random < 0.2) {
        status = "Cancelled";
        color = "#ef3e26";
      } else if (random < 0.4) {
        status = "Pending";
        color = "#e260fa";
      } else if (random < 0.6) {
        status = "Completed";
        color = "#56c1ff";
      } else {
        status = "Started";
        color = "var(--gray-lighter)";
      }
      let row = table.append("tr");
      let nameTD = row.append("td");
      nameTD
        .append("img")
        .attr("width", "40px")
        .attr("height", "40px")
        .attr("src", fakeUserData[i].url)
        .style("border-radius", "50%")
        .style("margin-left", "1rem")
        .style("margin-right", "1rem");
      nameTD
        .append("text")
        .text(fakeUserData[i].name)
        .style("padding-bottom", "2rem")
        .style("color", "var(--light-200)");
      row.append("td").text(fakeProjectNames[i]);
      row.append("td").text(randomDate("start"));
      row.append("td").text(randomDate("end"));
      row
        .append("td")
        .text(status)
        .style("color", color);
    }
  };

  const setOperationData = () => {
    let seed = Math.random();
    d3.select(".read-data").text(`${(seed * 500).toFixed(1)}ms`);
    d3.select(".write-data").text(`${(seed * 1000).toFixed(1)}ms`);
    d3.select(".upload-data").text(`.${(seed * 10).toFixed(1)}gbs`);
    d3.select(".download-data").text(`.${(seed * 7).toFixed(1)}gbs`);
  };

  const setCommitList = () => {
    const list = d3.select("#latest-commits-list ol");
    const { commitList } = data;
    commitList.forEach(obj => {
      let li = list.append("li");
      li.append("p")
        .attr("class", "message")
        .text(obj.m);
      li.append("p").text(obj.time);
      li.append("span")
        .append("i")
        .attr("class", "fas fa-chevron-right");
    });
  };

  setOperationData();
  setCommitList();
  setProjectData();

  d3.select("#user-info span.user-name")
    .append("p")
    .text(data.userName);
  d3.select(".budget-value p").text(`$${data.budget}`);
  const bbtn = d3.select(".budget-value button");
  bbtn.attr("class", data.budgetChange > 0 ? "green" : "red");
  bbtn.text(`${data.budgetChange}%`);
  const rbtn = d3.select(".request-value button");
  rbtn.attr("class", data.requestChange > 0 ? "green" : "red");
  rbtn.text(`${data.requestChange}%`);
  d3.select(".operations-value p").text(`$${data.operations}`);
  d3.select(".request-value p").text(`$${data.requests}`);
  const progressBar = d3.select("#progress-bar");
  progressBar.style("min-width", `calc(9vw * .${data.progress})`);
  d3.select(".progress p").text(data.progress + "%");
}

setRandomData();

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const months = [
  "Jan 18",
  "Feb 18",
  "Mar 18",
  "Apr 18",
  "May 18",
  "Jun 18",
  "Jul 18",
  "Aug 18",
  "Sep 18",
  "Oct 18",
  "Nov 18",
  "Dec 18",
  "Jan 19",
  "Feb 19",
  "Mar 19",
  "Apr 19",
  "May 19",
  "Jun 19",
  "Jul 19"
];

function generateRandomLineGraphData() {
  const data = [];
  months.forEach((month, ind) => {
    let obj = {};
    let rev = Math.random() * 60 + 50;
    let cost = rev - Math.random() * 20;
    obj.rev = rev;
    obj.cost = cost;
    data.push(obj);
  });

  console.log("data is", data);
  return data;
}

async function makeLineGraph() {
  //get measurements for width height and margins
  const data = await generateRandomLineGraphData();
  const lineGraphWidth = windowWidth * 0.75;
  const lineGraphHeight = 350;
  let lineGraph = d3.select("#main-line-graph");
  lineGraph.style("min-height", lineGraphHeight + "px");

  const graphMargins = {
    top: 60,
    right: lineGraphWidth * 0.068 + lineGraphWidth,
    bottom: lineGraphHeight + 60,
    left: lineGraphWidth * 0.068
  };

  console.log("graph margins are ", graphMargins);

  //data should have {price: d, month: }
  const costMax = d3.max(data, d => d.cost);
  const revMax = d3.max(data, d => d.rev);

  const yScaleCost = d3
    .scaleLinear()
    .domain([0, 120])
    .range([graphMargins.top, graphMargins.bottom - graphMargins.top]);

  const xScale = d3
    .scaleLinear()
    .domain([0, 19])
    .range([graphMargins.left, graphMargins.right]);

  const yScaleRev = d3
    .scaleLinear()
    .domain([0, 120])
    .range([graphMargins.top, graphMargins.bottom - graphMargins.top]);

  const revStroke = "#3794fc";
  const costStroke = "#9d60fb";

  const costPoints = data.map((d, i) => {
    let x = xScale(i);
    let y = yScaleCost(d.cost);
    return [x, y];
  });

  const revPoints = data.map((d, i) => {
    let x = xScale(i);
    let y = yScaleRev(d.rev);
    return [x, y];
  });

  const costLine = d3
    .line()
    .x((d, i) => xScale(i))
    .y(d => yScaleCost(d.cost));

  const revLine = d3
    .line()
    .x((d, i) => xScale(i))
    .y(d => yScaleRev(d.rev));

  const revArea = d3
    .area()
    .x((d, i) => xScale(i))
    .y0(lineGraphHeight)
    .y1(d => yScaleCost(d.cost));

  const costArea = d3
    .area()
    .x((d, i) => xScale(i))
    .y0(lineGraphHeight)
    .y1(d => yScaleRev(d.rev));

  const svg = d3
    .select("#main-line-graph")
    .append("svg")
    .attr("width", lineGraphWidth + graphMargins.left)
    .attr("height", lineGraphHeight);

  const defs = svg.append("defs");

  const blueGradient = defs
    .append("linearGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .attr("id", `blueGradient`);
  blueGradient
    .append("stop")
    .attr("offset", "1%")
    .attr("stop-color", "#3a96fd28");
  blueGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "rgba(46, 91, 255, 0.0)");

  const purpleGradient = defs
    .append("linearGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "50%")
    .attr("id", `purpleGradient`);

  purpleGradient
    .append("stop")
    .attr("offset", "1%")
    .attr("stop-color", "#9d60fb28");

  purpleGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "rgba(46,91,255,0)");

  const chartcontainer = svg;

  const drawGrid = () => {
    let leftX = graphMargins.left;
    let rightX = xScale(18);
    let yTop = graphMargins.top;
    let yBottom = graphMargins.bottom - graphMargins.top;
    let y = 0;

    for (let i = 0; i <= 120; i = i + 20) {
      chartcontainer
        .append("line")
        .attr("x1", leftX)
        .attr("y1", yScaleCost(i))
        .attr("x2", rightX)
        .attr("y2", yScaleCost(i))
        .style("stroke", "var(--gray-dark)");

      console.log("y is now", i);
    }

    for (let j = 0; j < 19; j++)
      chartcontainer
        .append("line")
        .attr("x1", xScale(j))
        .attr("x2", xScale(j))
        .attr("y1", yTop)
        .attr("y2", yBottom)
        .style("stroke", "var(--gray-dark)");
  };
  drawGrid();

  chartcontainer
    .append("path")
    .datum(data)
    .attr("d", costLine)
    .attr("stroke", costStroke)
    .attr("fill", "none");

  chartcontainer
    .append("path")
    .datum(data)
    .attr("d", costArea)
    .attr("class", "area")
    .attr("fill", "url(#blueGradient)");

  chartcontainer
    .append("path")
    .datum(data)
    .attr("d", revLine)
    .attr("stroke", revStroke)
    .attr("stroke-weight", 2)
    .attr("fill", "none");

  chartcontainer
    .append("path")
    .datum(data)
    .attr("d", revArea)
    .attr("class", "area")
    .attr("fill", "url(#purpleGradient)");

  costPoints.forEach((d, i) => {
    chartcontainer
      .append("circle")
      .attr("cx", d[0])
      .attr("cy", d[1])
      .attr("r", 3)
      .style("fill", "white")
      .style("stroke", costStroke);
  });

  revPoints.forEach((d, i) => {
    chartcontainer
      .append("circle")
      .attr("cx", d[0])
      .attr("cy", d[1])
      .attr("r", 3)
      .style("fill", "white")
      .style("stroke", revStroke);
  });
}
makeLineGraph();

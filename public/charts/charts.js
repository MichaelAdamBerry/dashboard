import { generateRandomLineGraphData } from "../data/random.js";

const windowWidth = window.innerWidth;
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

export async function makeLineGraph() {
  //get measurements for width height and margins
  const data = await generateRandomLineGraphData(months);
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

export function makeBarChart() {
  let count = 14;

  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.random() * 100);
  }

  console.log("data array is ", data);
  var margin = { top: 10, right: 20, bottom: 30, left: 50 };
  const width = 360 - margin.left - margin.right;
  const height = 260 - margin.top - margin.bottom;
  var formatPercent = d3.format("1");

  const xScale = d3
    .scaleBand()
    .domain(d3.range(0, data.length))
    .rangeRound([0, width])
    .padding(0.5);

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  var xAxis = d3.axisBottom(xScale);
  //var yAxis = d3.axisLeft(yRange);
  var yAxis = d3.axisLeft(yScale).tickFormat(formatPercent);

  var svg = d3
    .select("#bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .style("stroke", "var(-gray)")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end");

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) {
      return xScale(i);
    })
    .attr("width", xScale.bandwidth())
    .attr("y", function(d) {
      return yScale(d);
    })
    .attr("height", function(d) {
      return height - yScale(d);
    })
    .style("fill", "#28abdf");
  // .on('mouseover', tip.show)
  // .on('mouseout', tip.hide)
}

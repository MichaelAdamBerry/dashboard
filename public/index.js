import { randomDate, getInitialData } from "./data/random.js";
import { makeLineGraph, makeBarChart } from "./charts/charts.js";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const data = getInitialData();
console.log(data);

//updates dom with random data values
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
        .attr("src", data.fakeUserData[i].url)
        .style("border-radius", "50%")
        .style("margin-left", "1rem")
        .style("margin-right", "1rem");
      nameTD
        .append("text")
        .text(data.fakeUserData[i].name)
        .style("padding-bottom", "2rem")
        .style("color", "var(--light-200)");
      row.append("td").text(data.fakeProjectNames[i]);
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
  const setUserInfo = () => {
    d3.select("#user-info span.user-name")
      .append("p")
      .text(data.userName);
  };
  const setBudgetCardInfo = () => {
    d3.select(".budget-value p").text(`$${data.budget}`);
    const bbtn = d3.select(".budget-value button");
    bbtn.attr("class", data.budgetChange > 0 ? "green" : "red");
    bbtn.text(`${data.budgetChange}%`);
  };
  const setRequestCardInfo = () => {
    const rbtn = d3.select(".request-value button");
    rbtn.attr("class", data.requestChange > 0 ? "green" : "red");
    rbtn.text(`${data.requestChange}%`);
    d3.select(".request-value p").text(`$${data.requests}`);
  };
  const setOperationsCostCardInfo = () => {
    d3.select(".operations-value p").text(`$${data.operations}`);
  };
  const setProgressCardInfo = () => {
    const progressBar = d3.select("#progress-bar");
    progressBar.style("min-width", `calc(9vw * .${data.progress})`);
    d3.select(".progress p").text(data.progress + "%");
  };
  setOperationsCostCardInfo();
  setRequestCardInfo();
  setBudgetCardInfo();
  setUserInfo();
  setOperationData();
  setCommitList();
  setProjectData();
  setProgressCardInfo();
}

setRandomData();
makeLineGraph();
makeBarChart();

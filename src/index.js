import * as d3 from "d3";

var data = [80, 120, 60, 150, 200];
var barHeight = 20;
const cx = 20;
const cy = 20;
/*
const svg = d3.select("svg");
svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .transition()
  .duration(2000)
  .attr("width", function (data) {
    return data;
  })
  .attr("height", (data, i) => data)
  .attr("x", function (d, i) {
    return cx + i * Math.random() * 80;
  })
  .attr("y", function (d, i) {
    return cy + i * Math.random() * 80;
  })
  .transition()
  .duration(2000)
  .attr("height", barHeight - 1)
  .attr("fill", "yellow")
  .transition()
  .duration(2000)
  .attr("transform", function (data, i) {
    return `translate(${0}, ${data / i})`;
    //  console.log(data);
  })
  .attr("fill", "blue");
*/
//const svg2 = d3.select("p").append("svg");
/*svg2
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .transition()
  .duration(6000)
  .attr("cx", function (d, i) {
    return cx + i * Math.random() * 80;
  })
  .attr("cy", function (d, i) {
    return cy + i * Math.random() * 80;
  })
  .attr("fill", "red")
  .attr("r", function (d, i) {
    return Math.sqrt(d * 2);
  });
  */
/*
d3.select("svg")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .transition()
  .duration(7000)
  .attr("cx", function(d, i) {
    return cx + i * Math.random() * 80;
  })
  .attr("cy", function(d, i) {
    return cy + i * Math.random() * 80;
  })
  .attr("fill", "red")
  .attr("r", function(d, i) {
    return Math.sqrt(d * 2);
  });
*/
/*
svg
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 50)
  .attr("height", 50)
  .attr("fill", "#333")
  .attr("stroke", "red");
svg
  .append("circle")
  .attr("width", 20)
  .attr("height", 20)
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 20)
  .attr("fill", "#000");
*/
// document.getElementById('app').append("svg")

d3.select("body p")
  .selectAll("p")
  .data([16, 23, 42])
  .enter()
  .append("div")
  .text(function (b, a) {
    console.log(b);
    console.log(a);
    return b;
  });

 d3.select("h3")
  .style("color", "red")
  .append("h2")
   .text("hhhh");

var fruits = ["apple", "mango", "banana", "orange"];

 d3.select("h3")
  .selectAll("li")
  .data(fruits)
  .enter()
  .append("li")
 .text(function(d) {
    return d;
   });

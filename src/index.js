import * as d3 from "d3";

var data = [80, 120, 60, 150, 200];
var barHeight = 20;

 d3.select("svg")
   .selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("width", function(data) {
     return data;
   })
   .attr("height", (data) => {
     console.log(data)
     return (data)}
   )
//   .attr("height", barHeight - 1)
//   .attr("transform", function(data) {
//     return `translate(0, ${data})`;

//     console.log(data);
//   })
//   .attr("fill", "lightpink")
//   .transition()
//   .duration(7000);

// const svg2 = d3.select("p").append("svg");
const cx = 20;
const cy = 20;
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
// svg
//   .append("rect")
//   .attr("x", 50)
//   .attr("y", 50)
//   .attr("width", 50)
//   .attr("height", 50)
//   .attr("fill", "#333")
//   .attr("stroke", "red")
//   .append("circle")
//   .attr("width", 20)
//   .attr("height", 20)
//   .attr("cx", 50)
//   .attr("cy", 50)
//   .attr("r", 50)
//   .attr("fill", "#000");

// document.getElementById('app').append("svg")

// d3.select("body")
//   .selectAll("p")
//   .data([16, 23, 42])
//   .enter()
//   .append("p")
//   .text(function(b, a) {
//     console.log(b);
//     console.log(a);
//     return b;
//   });

// d3.select("h3")
//   .style("color", "red")
//   .append("h3")
//   .text("hhhh");

// var fruits = ["apple", "mango", "banana", "orange"];

// d3.select("ul")
//   .selectAll("li")
//   .data(fruits)
//   .enter()
//   .append("li")
//   .text(function(d) {
//     return d;
//   });

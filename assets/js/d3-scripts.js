// For creating D3 images. 

//This example generates a blue circle wherever you add the HTML id "my-d3-target".
document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("my-d3-target");
    if (!el) return;
  
    const svg = d3.select(el)
      .append("svg")
      .attr("width", 300)
      .attr("height", 200);
  
    svg.append("circle")
      .attr("cx", 150)
      .attr("cy", 100)
      .attr("r", 50)
      .style("fill", "steelblue");
  });
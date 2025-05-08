document.addEventListener("DOMContentLoaded", function () {
    const size = 20;
    const rows = 9, cols = 9;
  
    // Draw 9 x 9 grid with optional data
    function drawGrid(svg, numberData = []) {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          svg.append("rect")
            .attr("x", x * size)
            .attr("y", y * size)
            .attr("width", size)
            .attr("height", size)
            .attr("fill", "white")
            .attr("stroke", "black");
  
          const cell = numberData.find(d => d.x === x && d.y === y);
          if (cell) {
            svg.append("text")
              .attr("x", x * size + size / 2)
              .attr("y", y * size + size / 2 + 4)
              .attr("text-anchor", "middle")
              .attr("font-size", "10px")
              .text(cell.text);
          }
        }
      }
    }
  
    // Get all grid elements
    const elements = document.getElementsByClassName("9x9grid");
    if (!elements.length) return;
  
    Array.from(elements).forEach(el => {
      const id = el.id;
      const svg = d3.select(el)
        .append("svg")
        .attr("width", cols * size)
        .attr("height", rows * size);
  
      // Use different data depending on the grid
      if (id === "numbered-grid") {
        drawGrid(svg, [
          { x: 0, y: 0, text: "15" },
          { x: 0, y: 1, text: "1" },
          { x: 2, y: 2, text: "3" }
        ]);
      } else {
        drawGrid(svg); // plain grid
      }
    });
  });
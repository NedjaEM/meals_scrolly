import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

function StackedBar({ data }) {

  useEffect(() => {

    if (data.length !== 0) {

      let width = 500;
      let height = 100;

      d3.select("#d3-stack").selectAll("svg").selectAll("*").remove()
      
      const svg = d3.select("#d3-stack")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      let margin = ({ top: 0, right: 0, bottom: 0, left: 0 })

      height = 33

      let total = d3.sum(data, d => d.value)
      console.log(total)
      let value = 0
      let stacked = data.map(d => ({
        name: d.name,
        value: d.value / total,
        startValue: value / total,
        endValue: (value += d.value) / total
      }))
      console.log(stacked)


      let x = d3.scaleLinear([0, 1], [margin.left, width - margin.right])

      let formatPercent = x.tickFormat(null, "%")

      let color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(["#E06D06", "#FFC53A"])

      svg.append("g")
        .attr("stroke", "white")
        .selectAll("rect")
        .data(stacked)
        .join("rect")
        .attr("fill", d => color(d.name))
        .attr("x", d => x(d.startValue))
        .attr("width", d => x(d.endValue) - x(d.startValue))
        .attr("height", height)
        .append("title")
        .text(d => `${d.name} ${formatPercent(d.value)}`);

      svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .selectAll("text")
        .data(stacked)
        .join("text")
        .attr("fill", "#161032")
        .style("font-family", "Signika Negative, sans-serif")
        .attr("transform", d => `translate(${x(d.startValue) + 6}, 6)`)
        .call(text => text.append("tspan")
          .attr("y", "0.7em")
          .attr("font-weight", "bold")
          .text(d => d.name))
        .call(text => text.append("tspan")
          .attr("x", 0)
          .attr("y", "1.7em")
          .attr("fill-opacity", 0.7)
          .text(d => formatPercent(d.value)));

    }

  }, [data]);

  return (
    <React.Fragment>
      <div id='d3-stack'></div>
    </React.Fragment>
  );
}

export default StackedBar;
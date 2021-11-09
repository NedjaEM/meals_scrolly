import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import useResizeObserver from "./useResizeObserver";

/**
 * Component that renders a StackedBar
 */

function Scatter({ data }) {


    const svgRef = useRef();
    const wrapperRef = useRef();
    useEffect(() => {
        if (data.length != 0) {
            const margin = { top: 20, bottom: 50, left: 100, right: 100 },
                radius = 5;

            const width = 1200;
            const height = 450;

            const svg = d3.select("#d3-container")
                .append("svg")
                .attr("width", window.innerWidth)
                .attr("height", window.innerHeight);

            const div =
                svg
                    .append("g")
                    .attr("class", "gbar")


            div.append('rect')
                .attr("class", "tooltip")
                .attr("width", width / 7)
                .attr("height", 0.8 * height)
                .attr("x", 0.85 * width)
                .attr("y", 0.001 * height)
                .style("opacity", 0)


            const xScale = d3
                .scaleBand()
                .domain((data.map((d) => d.Date)))
                .range([margin.left, width - 2 * margin.right]);

            const yScale = d3
                .scaleLinear()
                .domain(d3.extent(data, (d) => d["rating of food"]))
                .range([height - 2 * margin.bottom, 3 * margin.top]);

            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            var mycolor = d3.scaleLinear()
                .domain([1, 10])
                .range(["yellow", "orange"]);


            svg
                .selectAll("circle")
                .data(data, d => d.Dish)
                .join(
                    enter =>
                        enter
                            .append("circle")
                            .attr("class", "dot")
                            // .attr("opacity", d => d["rating of how i feel about myself"] / 10)
                            .attr("r", radius / 2)
                            .attr("fill", d => mycolor(d["rating of how i feel about myself"]))
                            .attr("cx", d => xScale(d.Date))
                            .attr("cy", d => yScale(d["rating of food"])) // initial value - to be transitioned
                            .call(enter =>
                                enter
                                    .transition()
                                    .delay(200)
                                    .duration(200)
                                    .attr("r", 2 * radius))
                            .on("mouseover", function (e, d) {
                                d3.select(this).transition()
                                    .duration('100')
                                    .style("stroke", "#161032")
                                    .style("stroke-width", "5px")
                                    .style("stroke-opacity", "0.4")
                                div.select("rect").transition()
                                    .duration(200)
                                    .attr("class", "tooltip_rect")
                                    .style("stroke-width", "1px")
                                    .style("stroke", "#FFC53A")
                                    .style("opacity", .9)
                                div.append("foreignObject")
                                    .attr("height", "30px")
                                    .attr("width", "px")
                                    .style("fill", "#161032")
                                    .attr("width", width / 7)
                                    .attr("height", 0.8 * height)
                                    .attr("x", 0.85 * width)
                                    .attr("y", 0.01 * height)
                                    .append("xhtml:div")
                                    .style("padding-left", "5%")
                                    .style("font-family", "Signika Negative, sans-serif")
                                    .html(
                                        "<h3>" + d.Meal + " " + d.Date + "</h3> <div class='description'> <h4>" + d.Dish + "</h4></div><div class='social'><ul><li>" + d.cuisine + "</li><li>meat: " + d.meat + "</li><li>" + d.restaurant + "</li> </ul> <p>healthy: " + d.healthy + "</p>"
                                    )


                            })


                            .on("mouseout", function (d) {
                                d3.select(this).transition()
                                    .duration('100')
                                    .style("stroke-width", "0px")
                                div
                                    .selectAll("foreignObject").remove();

                            })
                    ,
                    update =>
                        update.call(update =>
                            update
                                .transition()
                                .duration(500)
                        )
                    ,
                    exit =>
                        exit.call(exit =>
                            exit
                                .transition()
                                .duration(700)
                                .attr("r", radius / 2)
                        )
                );

            svg
                .append("g")
                .attr("class", "axis x-axis")
                .attr("transform", `translate(0,${height - 2 * margin.bottom})`)
                .call(xAxis)
                .selectAll("text")
                .attr("class", "xaxis-label")
                .style("font-family", "Signika Negative, sans-serif")
                .style("color", "#161032")
                .style("font-size", "15px")
                // .attr("dy", "4em")
                .attr("x", "4%")
                .attr("transform", "rotate(45)")


            svg
                .append("g")
                .attr("class", "axis y-axis")
                .attr("transform", `translate(${margin.left},0)`)
                .call(yAxis)
                .selectAll("text")
                .attr("class", "axis-label")
                // .attr("y", "50%")
                // .attr("dx", "-3em")
                .attr("font-family", "Signika Negative, sans-serif")
                .style("color", "#161032")
                .style("font-size", "15px")


            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 1.5*margin.right)
                .attr("y", height - 2*margin.bottom)
                .text("Date");

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("x", 1.5*margin.left)
                .attr("y", margin.bottom)
                .text("Rating of Food");


            //Append a defs (for definition) element to your SVG
            let defs = svg.append("defs");

            //Append a linearGradient element to the defs and give it a unique id
            let linearGradient = defs.append("linearGradient")
                .attr("id", "linear-gradient");

            //Set the color for the start (0%)
            linearGradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "yellow"); //light blue

            //Set the color for the end (100%)
            linearGradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "orange"); //dark blue

            svg.append("rect")
                .attr("width", 300)
                .attr("height", 30)
                .attr("x", 0.1 * width)
                .attr("y", -10)
                .style("fill", "url(#linear-gradient)");

            svg.append("text")
                .attr("class", "legend-label")
                .text("0")
                .attr("font-family", "Signika Negative, sans-serif")
                .style("color", "#161032")
                .attr("x", 0.1 * width)
                .attr("y", 20)

            svg.append("text")
                .attr("class", "legend-label")
                .text("10")
                .attr("font-family", "Signika Negative, sans-serif")
                .style("color", "#161032")
                .attr("x", 0.1 * width + 280)
                .attr("y", 20)

            svg.append("text")
                .attr("class", "legend-label")
                .text("How did the food make me feel?")
                .attr("font-family", "Signika Negative, sans-serif")
                .style("color", "#161032")
                .attr("x", 0.15 * width)
                .attr("y", 35)

        }
    }, [data]);

    return (
        <React.Fragment>
            <div id="d3-container"> </div>
        </React.Fragment>
    );
}

export default Scatter;
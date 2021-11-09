(this["webpackJsonpmigration-viz"]=this["webpackJsonpmigration-viz"]||[]).push([[0],{108:function(t,e,a){},109:function(t,e,a){},113:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(26),i=a.n(o),l=(a(108),a.p,a(109),a(1));var s=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,114)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),o(t),i(t)}))},c=a(3),d=a(18),f=a.p+"static/media/meals.2b9dda03.csv",u=a(2);var h=function(t){var e=t.data;return Object(n.useEffect)((function(){if(0!==e.length){var t=100;u.h("#d3-stack").selectAll("svg").selectAll("*").remove();var a=u.h("#d3-stack").append("svg").attr("width",500).attr("height",t),n={top:0,right:0,bottom:0,left:0};t=33;var r=u.i(e,(function(t){return t.value}));console.log(r);var o=0,i=e.map((function(t){return{name:t.name,value:t.value/r,startValue:o/r,endValue:(o+=t.value)/r}}));console.log(i);var l=u.f([0,1],[n.left,500-n.right]),s=l.tickFormat(null,"%"),c=u.g().domain(e.map((function(t){return t.name}))).range(["#E06D06","#FFC53A"]);a.append("g").attr("stroke","white").selectAll("rect").data(i).join("rect").attr("fill",(function(t){return c(t.name)})).attr("x",(function(t){return l(t.startValue)})).attr("width",(function(t){return l(t.endValue)-l(t.startValue)})).attr("height",t).append("title").text((function(t){return"".concat(t.name," ").concat(s(t.value))})),a.append("g").attr("font-family","sans-serif").attr("font-size",12).selectAll("text").data(i).join("text").attr("fill","#161032").style("font-family","Signika Negative, sans-serif").attr("transform",(function(t){return"translate(".concat(l(t.startValue)+6,", 6)")})).call((function(t){return t.append("tspan").attr("y","0.7em").attr("font-weight","bold").text((function(t){return t.name}))})).call((function(t){return t.append("tspan").attr("x",0).attr("y","1.7em").attr("fill-opacity",.7).text((function(t){return s(t.value)}))}))}}),[e]),Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("div",{id:"d3-stack"})})};a(27);var p=function(t){var e=t.data;return Object(n.useRef)(),Object(n.useRef)(),Object(n.useEffect)((function(){if(0!=e.length){var t={top:20,bottom:50,left:100,right:100},a=1200,n=450,r=u.h("#d3-container").append("svg").attr("width",window.innerWidth).attr("height",window.innerHeight),o=r.append("g").attr("class","gbar");o.append("rect").attr("class","tooltip").attr("width",a/7).attr("height",360).attr("x",1020).attr("y",.45).style("opacity",0);var i=u.e().domain(e.map((function(t){return t.Date}))).range([t.left,a-2*t.right]),l=u.f().domain(u.d(e,(function(t){return t["rating of food"]}))).range([n-2*t.bottom,3*t.top]),s=u.a(i),c=u.b(l),d=u.f().domain([1,10]).range(["yellow","orange"]);r.selectAll("circle").data(e,(function(t){return t.Dish})).join((function(t){return t.append("circle").attr("class","dot").attr("r",2.5).attr("fill",(function(t){return d(t["rating of how i feel about myself"])})).attr("cx",(function(t){return i(t.Date)})).attr("cy",(function(t){return l(t["rating of food"])})).call((function(t){return t.transition().delay(200).duration(200).attr("r",10)})).on("mouseover",(function(t,e){u.h(this).transition().duration("100").style("stroke","#161032").style("stroke-width","5px").style("stroke-opacity","0.4"),o.select("rect").transition().duration(200).attr("class","tooltip_rect").style("stroke-width","1px").style("stroke","#FFC53A").style("opacity",.9),o.append("foreignObject").attr("height","30px").attr("width","px").style("fill","#161032").attr("width",a/7).attr("height",360).attr("x",1020).attr("y",4.5).append("xhtml:div").style("padding-left","5%").style("font-family","Signika Negative, sans-serif").html("<h3>"+e.Meal+" "+e.Date+"</h3> <div class='description'> <h4>"+e.Dish+"</h4></div><div class='social'><ul><li>"+e.cuisine+"</li><li>meat: "+e.meat+"</li><li>"+e.restaurant+"</li> </ul> <p>healthy: "+e.healthy+"</p>")})).on("mouseout",(function(t){u.h(this).transition().duration("100").style("stroke-width","0px"),o.selectAll("foreignObject").remove()}))}),(function(t){return t.call((function(t){return t.transition().duration(500)}))}),(function(t){return t.call((function(t){return t.transition().duration(700).attr("r",2.5)}))})),r.append("g").attr("class","axis x-axis").attr("transform","translate(0,".concat(n-2*t.bottom,")")).call(s).selectAll("text").attr("class","xaxis-label").style("font-family","Signika Negative, sans-serif").style("color","#161032").style("font-size","15px").attr("x","4%").attr("transform","rotate(45)"),r.append("g").attr("class","axis y-axis").attr("transform","translate(".concat(t.left,",0)")).call(c).selectAll("text").attr("class","axis-label").attr("font-family","Signika Negative, sans-serif").style("color","#161032").style("font-size","15px"),r.append("text").attr("class","x label").attr("text-anchor","end").attr("x",a-1.5*t.right).attr("y",n-2*t.bottom).text("Date"),r.append("text").attr("class","y label").attr("text-anchor","end").attr("x",1.5*t.left).attr("y",t.bottom).text("Rating of Food");var f=r.append("defs").append("linearGradient").attr("id","linear-gradient");f.append("stop").attr("offset","0%").attr("stop-color","yellow"),f.append("stop").attr("offset","100%").attr("stop-color","orange"),r.append("rect").attr("width",300).attr("height",30).attr("x",120).attr("y",-10).style("fill","url(#linear-gradient)"),r.append("text").attr("class","legend-label").text("0").attr("font-family","Signika Negative, sans-serif").style("color","#161032").attr("x",120).attr("y",20),r.append("text").attr("class","legend-label").text("10").attr("font-family","Signika Negative, sans-serif").style("color","#161032").attr("x",400).attr("y",20),r.append("text").attr("class","legend-label").text("How did the food make me feel?").attr("font-family","Signika Negative, sans-serif").style("color","#161032").attr("x",180).attr("y",35)}}),[e]),Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("div",{id:"d3-container",children:" "})})},g=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),a=e[0],r=e[1],o=Object(n.useState)([]),i=Object(c.a)(o,2),s=i[0],g=i[1];Object(n.useEffect)((function(){Object(u.c)(f).then((function(t){console.log(t);for(var e=0;e<t.length;e++){t[e];for(var a in t[e])"rating of food"!=a&&"rating of how i feel about myself"!=a||(t[e][a]=+t[e][a])}g(t)}))}),[]);for(var m=[{name:"home-cooked",value:s.reduce((function(t,e){return t+("no"===e.bought)}),0)},{name:"bought",value:s.reduce((function(t,e){return t+("no"!==e.bought)}),0)}],y=[{name:"meat",value:s.reduce((function(t,e){return t+("no"===e.meat)}),0)},{name:"nomeat",value:s.reduce((function(t,e){return t+("no"!=e.meat)}),0)}],x=[],b=0,v=s.length;b<v;b++)x[s[b].meat]=(x[s[b].meat]||0)+1;console.log(x.length);for(var j=[],k=0;k<x.length;k++)console.log(k),console.log(Object.keys(x[v])),j=[{name:Object.keys(x[v]),value:x[v]}];console.log("meat is ",j),console.log("meat is ",y);var w=s.reduce((function(t,e){return t+("yes"===e.healthy)}),0),O=s.reduce((function(t,e){return t+("yes"!==e.nothealthy)}),0),I={},S="",F="up";1===a?(I=y,S="I only cook vegetarian meals or meals with fish and seafood at home. I never buy or cook meat in general and would order it if I went to eat out. That is why most of my meat intake is fish-based"):2===a?(I=[{name:"healthy",value:w},{name:"nothealthy",value:O}],S="After each meal, I tried to collect data surrounding how healthy I instinctly thought it was. I think this is a good indication on how unconsciously affected I am by what society classifies as healthy and not. I do think I was a bit harsh on my choices as I did classify each time I ate pasta or any types of carbs as unhealthy when carbs are actually beneficial and necessary for a healthy diet."):0===a?(I=m,S="I try to eat at home as much as possible. I make sure to cook during the day or at night and keep leftover most of the time. I always prefer to eat home-cooked meals because it makes me feel better knowing the ingredients"):(I=[],S="");return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{position:"fixed",top:"2%",left:"37%",color:"#B26700"},children:"A month of Nadia's Meals"}),Object(l.jsx)("h3",{style:{position:"fixed",top:"10%",left:"44%",color:"#B26700"},children:"Scroll to know more"}),Object(l.jsx)("div",{id:"thestick",style:{position:"fixed",top:"25%",left:"50%",width:"50%",height:"100%"},children:Object(l.jsx)(h,{data:I})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.a,{onStepEnter:function(t){var e=t.data;r(e),2===e&&"down"==F&&(document.getElementById("thestick").style.position="sticky")},onStepExit:function(t){2===t.data&&(document.getElementById("thestick").style.position="absolute",F="down")},children:[1,2,3].map((function(t,e){return Object(l.jsx)(d.b,{data:e,offset:"0.7",children:Object(l.jsxs)("div",{style:{margin:"50vh 0",color:"#161032",opacity:a===e?1:.1,fontFamily:"Signika Negative, sans-serif",fontSize:"30px",paddingLeft:"10%",paddingRight:"60%"},children:["* ",S]})},e)}))})}),Object(l.jsx)(p,{data:s})]})};i.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),s()}},[[113,1,2]]]);
//# sourceMappingURL=main.ed1b9b3d.chunk.js.map
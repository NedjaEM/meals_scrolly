import React from 'react';
import { Scrollama, Step } from 'react-scrollama';
import datameals from '../meals.csv';
import { csv } from 'd3';
import { useEffect, useState } from 'react';
import StackedBar from './StackedBar';
import Scatter from "./Scatter";


const ScrollamaMain = () => {

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [meals, setData] = useState([]);

  useEffect(() => {
    csv(datameals).then(meals => {
      console.log(meals)
      for (var i = 0; i < meals.length; i++) {
        var obj = meals[i];
        for (var prop in meals[i]) {
          if (prop == "rating of food" || prop == "rating of how i feel about myself") {
            meals[i][prop] = +meals[i][prop];
          }
        }
      }
      setData(meals);
    });

  }, []);

  //home_cooked
  let count_cooked = meals.reduce((n, i) => n + (i.bought === "no"), 0);
  let count_bought = meals.reduce((n, i) => n + (i.bought !== "no"), 0);
  const homecooked = [
    {
      "name": "home-cooked",
      "value": count_cooked
    },
    {
      "name": "bought",
      "value": count_bought
    }
  ]
  //meat
  let count_nomeat = meals.reduce((n, i) => n + (i.meat === "no"), 0);
  let count_meat = meals.reduce((n, i) => n + (i.meat != "no"), 0);

  const meat = [
    {
      "name": "meat",
      "value": count_nomeat
    },
    {
      "name": "nomeat",
      "value": count_meat
    }
  ]

  let meat_all = []
  
  for (var i = 0, j = meals.length; i < j; i++) {
    meat_all[meals[i].meat] = (meat_all[meals[i].meat] || 0) + 1;
 }


 console.log(meat_all.length)

 let meat_final = [];

  for (var k = 0; k < meat_all.length; k++)
    {
      console.log(k)
      console.log(Object.keys(meat_all[j]))
      meat_final = [
        {
          "name" : Object.keys(meat_all[j]),
          "value": meat_all [j]
        }
      ]

    }

 console.log("meat is ",meat_final)
 console.log("meat is ",meat)

  //healthy
  let count_healthy = meals.reduce((n, i) => n + (i.healthy === "yes"), 0);
  let count_nothealthy = meals.reduce((n1, i) => n1 + (i.nothealthy !== "yes"), 0);

  const healthy = [
    {
      "name": "healthy",
      "value": count_healthy
    },
    {
      "name": "nothealthy",
      "value": count_nothealthy
    }
  ]

  //cuisine



  let bar_new = {};
  let text = ""
  let direction = "up"

  if (currentStepIndex === 1) { bar_new = meat; text = "I only cook vegetarian meals or meals with fish and seafood at home. I never buy or cook meat in general and would order it if I went to eat out. That is why most of my meat intake is fish-based" }
  else if (currentStepIndex === 2) { bar_new = healthy; text = "After each meal, I tried to collect data surrounding how healthy I instinctly thought it was. I think this is a good indication on how unconsciously affected I am by what society classifies as healthy and not. I do think I was a bit harsh on my choices as I did classify each time I ate pasta or any types of carbs as unhealthy when carbs are actually beneficial and necessary for a healthy diet." }
  else if (currentStepIndex === 0) { bar_new = homecooked; text = "I try to eat at home as much as possible. I make sure to cook during the day or at night and keep leftover most of the time. I always prefer to eat home-cooked meals because it makes me feel better knowing the ingredients" }
  else { bar_new = []; text = "" }

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data === 2 && direction == "down") {
      document.getElementById('thestick').style.position = 'sticky';
    }
  };

  const onStepExit = ({ data }) => {
    if (data === 2) {
      document.getElementById('thestick').style.position = 'absolute';
      direction = "down"
      
    }

  };

  return (
    <div>
      <h1 style={{ position: 'fixed', top: '2%', left: '37%', color: "#B26700" }}>A month of Nadia's Meals</h1>
      <h3 style={{ position: 'fixed', top: '10%', left: '44%', color: "#B26700" }}>Scroll to know more</h3>

      {/* 
      <Demo /> */}

      <div id="thestick" style={{ position: 'fixed', top: '25%', left: '50%', width: '50%', height: '100%' }}>

        <StackedBar data={bar_new}>
        </StackedBar>

      </div>
      <div>
        <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit}>
          {[1, 2, 3].map((_, stepIndex) => (
            <Step data={stepIndex} key={stepIndex} offset="0.7">
              <div
                style={{
                  margin: '50vh 0',
                  color: '#161032',
                  opacity: currentStepIndex === stepIndex ? 1 : 0.1,
                  fontFamily: 'Signika Negative, sans-serif',
                  fontSize: '30px',
                  paddingLeft: "10%",
                  paddingRight: "60%"
                }}
              >
                * {text}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      <Scatter
        data={meals}
      />
    </div>
  );
};

export default ScrollamaMain;
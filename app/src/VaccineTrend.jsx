import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const graph = require('./data/json/COVID-19_Vaccinations_in_the_US.json');

function filter_and_unpack(rows, key, date) {
    return rows.filter(row => row['Month'] === date).map(row => row[key])
}
  
    var frames = []
    var slider_steps = []
  
    let n = 9;
    let num = 1;
    for (var i = 0; i <= n; i++) {
      let z = filter_and_unpack(graph, 'Admin_Per_100K', num)
      let locations = filter_and_unpack(graph, 'Location', num)
      frames.push ({data: [{z: z, locations: locations, text: locations}], name: num})
      slider_steps.push ({
          label: num.toString(),
          method: "animate",
          args: [[num], {
              mode: "immediate",
              transition: {duration: 300},
              frame: {duration: 300}
            }
          ]
        })
      num = num + 1
    }
  
  let data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: frames[0].data[0].locations,
        z: frames[0].data[0].z,
        text: frames[0].data[0].locations,
        zauto: false,
        zmin: 90000,
        zmax: 6000000
  
  }];
  let layout = {
      title: 'Vaccine Trends in the United States<br>2021',
      geo:{
         scope: 'usa',
         countrycolor: 'rgb(255, 255, 255)',
         showland: true,
         landcolor: 'rgb(217, 217, 217)',
         showlakes: true,
         lakecolor: 'rgb(255, 255, 255)',
         subunitcolor: 'rgb(255, 255, 255)',
         lonaxis: {},
         lataxis: {}
      },
      updatemenus: [{
        x: 0.1,
        y: 0,
        yanchor: "top",
        xanchor: "right",
        showactive: false,
        direction: "left",
        type: "buttons",
        pad: {"t": 87, "r": 10},
        buttons: [{
          method: "animate",
          args: [null, {
            fromcurrent: true,
            transition: {
              duration: 200,
            },
            frame: {
              duration: 500
            }
          }],
          label: "Play"
        }, {
          method: "animate",
          args: [
            [null],
            {
              mode: "immediate",
              transition: {
                duration: 0
              },
              frame: {
                duration: 0
              }
            }
          ],
          label: "Pause"
        }]
      }],
      sliders: [{
        active: 0,
        steps: slider_steps,
        x: 0.1,
        len: 0.9,
        xanchor: "left",
        y: 0,
        yanchor: "top",
        pad: {t: 50, b: 10},
        currentvalue: {
          visible: true,
          prefix: "Month In 2021:",
          xanchor: "right",
          font: {
            size: 20,
            color: "#666"
          }
        },
        transition: {
          duration: 300,
          easing: "cubic-in-out"
        }
      }]
  };
  

  function VaccineTrend() {
    return (
        <Plot
            data={data}
            layout={layout}
            frames={frames}
        />
    );
}

export default VaccineTrend;
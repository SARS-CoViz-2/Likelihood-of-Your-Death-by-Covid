import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const graph = require('./data/json/COVID-19_Vaccinations_in_the_US.json');

function unpack(rows, key) {
    return rows.map((row) => { return row[key]; });
}

let data = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: unpack(graph, 'Location'),
    z: unpack(graph, 'Admin_Per_100K'),
    text: unpack(graph, 'Location'),
    zmin: 80000,
    zmax: 170000,
    colorscale: [
        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
    ],
    colorbar: {
        title: 'Number of vaccines<br>Administers per 100k',
        thickness: 0.2
    },
    marker: {
        line:{
            color: 'rgb(255,255,255)',
            width: 2
        }
    }
}];

let layout = {
    title: '2021 US COVID-19 Vaccines Administered per 100k in a single day',
    geo:{
        scope: 'usa',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)'
    },
    height: 450,
    width: 1000,
};

function VaccinUS() {
    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default VaccinUS;
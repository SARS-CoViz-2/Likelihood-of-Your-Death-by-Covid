import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const caseGraph = require('./data/json/age_groups/cases_by_age_group.json');
const deathGraph = require('./data/json/age_groups/deaths_by_age_group.json');

const ages = caseGraph.map((item) => item['Age Group']);
const cases = caseGraph.map((item) => item['Percent of cases']);
const deaths = deathGraph.map((item) => item['Percentage of deaths']);
const population = caseGraph.map((item) => item['Percent of US population']);

let trace1 = {
    type: 'bar',
    name: 'Percentage of Cases',
    x: ages,
    y: cases,
    text: cases.map(String),
    marker: {
        color: 'rgba(222,45,38,0.8)'
    },
    hovertemplate:
        "<b>Age Group: %{x}</b><br><br>" +
        "Percentage of Cases: <b>%{text}%</b>" +
        "<extra></extra>"
}

let trace2 = {
    type: 'bar',
    name: 'Percentage of Deaths',
    x: ages,
    y: deaths,
    text: deaths.map(String),
    marker: {
        color: 'rgba(0,0,0,0.8)'
    },
    hovertemplate:
        "<b>Age Group: %{x}</b><br><br>" +
        "Percentage of Deaths: <b>%{text}%</b>" +
        "<extra></extra>"
}

let trace3 = {
    type: 'bar',
    name: 'Percentage of the U.S. Population',
    x: ages,
    y: population,
    text: population.map(String),
    marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.7
    },
    hovertemplate:
        "<b>Age Group: %{x}</b><br><br>" +
        "Percentage of the<br>U.S. Population: <b>%{text}%</b>" +
        "<extra></extra>",
};

let data = [trace1, trace2, trace3]

let layout = {
    barmode: 'group',
    bargap: 3,
    bargroupgap: 0.1,
    title: "Percentage of Cases and Deaths by Age Group",
    xaxis: {
        tickangle: 20
    },
    yaxis: {
        title: "(%)",
    },
    legend: {
        x: 0,
        y: 1
    },
    showlegend: true,
    height: 450,
    width: 1200,
};

function AgeGroups() {
    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default AgeGroups;
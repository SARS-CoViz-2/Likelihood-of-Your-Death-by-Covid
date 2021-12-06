import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const caseGraph = require('./data/json/sex/cases_by_sex__all_age_groups.json');
const deathGraph = require('./data/json/sex/deaths_by_sex__all_age_groups.json');

const headerNames = ["Female", "Male"];

function unpack(rows, key) {
    return rows.map((row) => { return row[key]; });
}

let trace1 = {
    type: 'pie',
    name: 'Percentage of Cases',
    labels: headerNames,
    values: unpack(caseGraph, "Percent of cases"),
    text: headerNames,
    domain: { column: 0 },
    hole: .4,
    marker: {
        colors: ['rgb(168, 197, 69)', 'rgb(255, 97, 56)']
    },
    hovertemplate:
        "<b>%{text}s from all age groups</b><br><br>" +
        "Percentage of Cases: <b>%{value}%</b>" +
        "<extra></extra>"
};

let trace2 = {
    type: 'pie',
    name: 'Percentage of Deaths',
    labels: headerNames,
    values: unpack(deathGraph, "Percentage of deaths"),
    text: headerNames,
    domain: { column: 1 },
    hole: .4,
    marker: {
        color: 'rgba(0,0,0,0.8)'
    },
    hovertemplate:
        "<b>%{text}s from all age groups</b><br><br>" +
        "Percentage of Deaths: <b>%{value}%</b>" +
        "<extra></extra>"
}

let data = [trace1, trace2];

let layout = {
    title: "Percentage of Cases and Deaths by Sex: <br>All Age Groups",
    annotations: [
        {
            font: {
                size: 20
            },
            showarrow: false,
            text: 'Cases',
            x: 0.20,
            y: 0.5
        },
        {
            font: {
                size: 20
            },
            showarrow: false,
            text: 'Deaths',
            x: 0.805,
            y: 0.5
        }
    ],
    legend: {
        x: 0.45,
        y: 0.5
    },
    showlegend: true,
    height: 450,
    width: 1100,
    grid: { rows: 1, columns: 2 }
};

function SexPieCharts() {
    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default SexPieCharts;
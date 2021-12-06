import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const graph = require('./data/json/sex/cases_by_sex__all_age_groups.json');
const graph0 = require('./data/json/sex/cases_by_sex__0_-_4_years.json');
const graph5 = require('./data/json/sex/cases_by_sex__5_-_11_years.json');
const graph12 = require('./data/json/sex/cases_by_sex__12_-_15_years.json');
const graph16 = require('./data/json/sex/cases_by_sex__16_-_17_years.json');
const graph18 = require('./data/json/sex/cases_by_sex__18_-_29_years.json');
const graph30 = require('./data/json/sex/cases_by_sex__30_-_39_years.json');
const graph40 = require('./data/json/sex/cases_by_sex__40_-_49_years.json');
const graph50 = require('./data/json/sex/cases_by_sex__50_-_64_years.json');
const graph65 = require('./data/json/sex/cases_by_sex__65_-_74_years.json');
const graph75 = require('./data/json/sex/cases_by_sex__75_-_84_years.json');
const graph85 = require('./data/json/sex/cases_by_sex__85+_years.json');

const deathGraph = require('./data/json/sex/deaths_by_sex__all_age_groups.json');
const deathGraph0 = require('./data/json/sex/deaths_by_sex__0_-_4_years.json');
const deathGraph5 = require('./data/json/sex/deaths_by_sex__5_-_11_years.json');
const deathGraph12 = require('./data/json/sex/deaths_by_sex__12_-_15_years.json');
const deathGraph16 = require('./data/json/sex/deaths_by_sex__16_-_17_years.json');
const deathGraph18 = require('./data/json/sex/deaths_by_sex__18_-_29_years.json');
const deathGraph30 = require('./data/json/sex/deaths_by_sex__30_-_39_years.json');
const deathGraph40 = require('./data/json/sex/deaths_by_sex__40_-_49_years.json');
const deathGraph50 = require('./data/json/sex/deaths_by_sex__50_-_64_years.json');
const deathGraph65 = require('./data/json/sex/deaths_by_sex__65_-_74_years.json');
const deathGraph75 = require('./data/json/sex/deaths_by_sex__75_-_84_years.json');
const deathGraph85 = require('./data/json/sex/deaths_by_sex__85+_years.json');

const allCases = [graph0, graph5, graph12, graph16, graph18, graph30, graph40, graph50, graph65, graph75, graph85];

const allDeaths = [deathGraph0, deathGraph5, deathGraph12, deathGraph16, deathGraph18, deathGraph30, deathGraph40, deathGraph50, deathGraph65, deathGraph75, deathGraph85];

const headerNames = ["Female", "Male"];

function unpack(rows, key) {
    return rows.map((row) => { return row[key]; });
}

let trace1 = {
    type: 'bar',
    name: 'Percentage of Cases',
    x: headerNames,
    y: unpack(graph, "Percent of cases"),
    text: unpack(graph, "Percent of cases").map(String),
    marker: {
        color: 'rgba(222,45,38,0.8)'
    },
    hovertemplate:
        "<b>%{x}</b><br><br>" +
        "Percentage of Cases: <b>%{text}%</b>" +
        "<extra></extra>"
};

let data = [trace1];

for (let graph of allCases) {
    let temp = {
        type: 'bar',
        name: 'Percentage of Cases',
        x: headerNames,
        y: unpack(graph, "Percent of cases"),
        text: unpack(graph, "Percent of cases").map(String),
        marker: {
            color: 'rgba(222,45,38,0.8)'
        },
        hovertemplate:
            "<b>%{x}</b><br><br>" +
            "Percentage of Cases: <b>%{text}%</b>" +
            "<extra></extra>",
        visible: false
    }
    data.push(temp);
}

let trace2 = {
    type: 'bar',
    name: 'Percentage of Deaths',
    x: headerNames,
    y: unpack(deathGraph, "Percentage of deaths"),
    text: unpack(deathGraph, "Percentage of deaths").map(String),
    marker: {
        color: 'rgba(0,0,0,0.8)'
    },
    hovertemplate:
        "<b>%{x}</b><br><br>" +
        "Percentage of Deaths: <b>%{text}%</b>" +
        "<extra></extra>"
}

data.push(trace2);

for (let graph of allDeaths) {
    let temp = {
        type: 'bar',
        name: 'Percentage of Deaths',
        x: headerNames,
        y: unpack(graph, "Percentage of deaths"),
        text: unpack(graph, "Percentage of deaths").map(String),
        marker: {
            color: 'rgba(0,0,0,0.8)'
        },
        hovertemplate:
            "<b>%{x}</b><br><br>" +
            "Percentage of Deaths: <b>%{text}%</b>" +
            "<extra></extra>",
        visible: false
    }
    data.push(temp);
}

let trace3 = {
    type: 'bar',
    name: 'Percentage of the U.S. Population',
    x: headerNames,
    y: unpack(graph, "Percent of US population"),
    text: unpack(graph, "Percent of US population").map(String),
    marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.7
    },
    hovertemplate:
        "<b>%{x}</b><br><br>" +
        "Percentage of the<br>U.S. Population: <b>%{text}%</b>" +
        "<extra></extra>"
};

data.push(trace3);

for (let graph of allCases) {
    let temp = {
        type: 'bar',
        name: 'Percentage of the U.S. Population',
        x: headerNames,
        y: unpack(graph, "Percent of US population"),
        text: unpack(graph, "Percent of US population").map(String),
        marker: {
            color: 'rgb(204,204,204)',
            opacity: 0.7
        },
        hovertemplate:
            "<b>%{x}</b><br><br>" +
            "Percentage of the<br>U.S. Population: <b>%{text}%</b>" +
            "<extra></extra>",
        visible: false
    }
    data.push(temp);
}

let updatemenus = [
    {
        active: 0,
        type: 'dropdown',
        buttons: [
            {
                args: [{ 'visible': [true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>All Age Groups" }],
                label: "All Age Groups",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>0 - 4 Years Old" }],
                label: "0 - 4 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>5 - 11 Years Old" }],
                label: "5 - 11 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>12 - 15 Years Old" }],
                label: "12 - 15 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>16 - 17 Years Old" }],
                label: "16 - 17 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>18 - 29 Years Old" }],
                label: "18 - 29 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>30 - 39 Years Old" }],
                label: "30 - 39 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>40 - 49 Years Old" }],
                label: "40 - 49 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>50 - 64 Years Old" }],
                label: "50 - 64 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>65 - 74 Years Old" }],
                label: "65 - 74 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>75 - 84 Years Old" }],
                label: "75 - 84 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true] },
                { 'title': "Percentage of Cases and Deaths by Sex: <br>85+ Years Old" }],
                label: "85+ Years Old",
                method: 'update'
            },
        ],
        direction: 'down',
        pad: { 'r': 10, 't': 10 },
        showactive: true,
        x: 0,
        xanchor: 'auto',
        y: 1.17,
        yanchor: 'auto',
    }
];

let layout = {
    barmode: 'group',
    bargap: 2,
    bargroupgap: 0.1,
    title: "Percentage of Cases and Deaths by Sex: <br>All Age Groups",
    xaxis: {
        tickangle: 0
    },
    yaxis: {
        title: "(%)",
        range: [0, 100]
    },
    legend: {
        x: 0,
        y: 1
    },
    showlegend: true,
    height: 450,
    width: 800,
    updatemenus: updatemenus
};

function Sex() {
    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default Sex;
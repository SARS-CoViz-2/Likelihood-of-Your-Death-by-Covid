import React from 'react';
import Plot from 'react-plotly.js';
import { } from 'semantic-ui-react';

const graph = require('./data/json/cases_by_race_ethnicity__all_age_groups.json');
const graph0 = require('./data/json/cases_by_race_ethnicity__0_-_4_years.json');
const graph5 = require('./data/json/cases_by_race_ethnicity__5_-_11_years.json');
const graph12 = require('./data/json/cases_by_race_ethnicity__12_-_15_years.json');
const graph16 = require('./data/json/cases_by_race_ethnicity__16_-_17_years.json');
const graph18 = require('./data/json/cases_by_race_ethnicity__18_-_29_years.json');
const graph30 = require('./data/json/cases_by_race_ethnicity__30_-_39_years.json');
const graph40 = require('./data/json/cases_by_race_ethnicity__40_-_49_years.json');
const graph50 = require('./data/json/cases_by_race_ethnicity__50_-_64_years.json');
const graph65 = require('./data/json/cases_by_race_ethnicity__65_-_74_years.json');
const graph75 = require('./data/json/cases_by_race_ethnicity__75_-_84_years.json');
const graph85 = require('./data/json/cases_by_race_ethnicity__85+_years.json');

const all = [graph0, graph5, graph12, graph16, graph18, graph30, graph40, graph50, graph65, graph75, graph85];

function unpack(rows, key) {
    return rows.map((row) => { return row[key]; });
}

let traceAll = {
    type: 'bar',
    x: unpack(graph, "Race/Ethnicity"),
    y: unpack(graph, "Percent of cases"),
};

let data = [traceAll];

for (let graph of all) {
    let temp = {
        type: 'bar',
        x: unpack(graph, "Race/Ethnicity"),
        y: unpack(graph, "Percent of cases"),
        visible: "legendonly"
    }
    data.push(temp);
}

let updatemenus = [
    {
        active: 0,
        type: 'dropdown',
        buttons: [
            {
                args: [{ 'visible': [true, false, false, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: All Age Groups" }],
                label: "All Age Groups",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, true, false, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 5 - 11 Years Old" }],
                label: "0 - 4 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, true, false, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 5 - 11 Years Old" }],
                label: "5 - 11 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, true, false, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 12 - 15 Years Old" }],
                label: "12 - 15 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, true, false, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 16 - 17 Years Old" }],
                label: "16 - 17 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, true, false, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 18 - 29 Years Old" }],
                label: "18 - 29 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, true, false, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 30 - 39 Years Old" }],
                label: "30 - 39 Years Old",
                method: 'update'
            },                 
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, true, false, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 40 - 49 Years Old" }],
                label: "40 - 49 Years Old",
                method: 'update'
            },      
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, true, false, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 50 - 64 Years Old" }],
                label: "50 - 64 Years Old",
                method: 'update'
            },                  
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, true, false, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 65 - 74 Years Old" }],
                label: "65 - 74 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, false, true, false] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 75 - 84 Years Old" }],
                label: "75 - 84 Years Old",
                method: 'update'
            },
            {
                args: [{ 'visible': [false, false, false, false, false, false, false, false, false, false, false, true] },
                { 'title': "Percentage of Cases by Race/Ethnicity: 85+ Years Old" }],
                label: "85+ Years Old",
                method: 'update'
            },            
        ],
        direction: 'down',
        pad: { 'r': 10, 't': 10 },
        showactive: true,
        x: 1.17,
        xanchor: 'center',
        y: 1.17,
        yanchor: 'top',
    }
];

let layout = {
    barmode: 'group',
    title: "Percentage of Cases by Race/Ethnicity: All Age Groups",
    yaxis: {
        title: "Cases (%)",
    },
    showlegend: false,
    updatemenus: updatemenus
};

function RaceAndEthnicity() {
    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default RaceAndEthnicity;
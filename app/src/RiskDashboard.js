import React from 'react';
import Plot from 'react-plotly.js';
import _ from 'underscore';
import { Grid, Segment, Divider, Dropdown, Header, Form } from 'semantic-ui-react';
import { options } from './fields';
import { age_data } from './data/age_data';
import { ethnicity_data } from './data/ethnicity_data';
import { sex_data } from './data/sex_data';
import { vax_data } from './data/vax_data';
import './style/style.css';

const graph = require('./data/json/2019OddsOfDying.json');

function unpack(rows, key) {
  return rows.map((row) => { return row[key]; });
}

let layout1 = {
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(102, 102, 102)',
    title: "Percentage Odds of Dying",
    titlefont: {
      font: {
        color: 'rgb(204, 204, 204)'
      }
    },
    tickfont: {
      font: {
        color: 'rgb(102, 102, 102)'
      }
    },
    autotick: false,
    dtick: 10,
    ticks: 'outside',
    tickcolor: 'rgb(102, 102, 102)'
  },
  margin: {
    l: 220,
    r: 40,
    b: 50,
    t: 0,
  },
  legend: {
    font: {
      size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
  },
  width: 1100,
  height: 600,
  hovermode: 'closest'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.population = 331449281;
    this.demographics = ['sex', 'age', 'ethnicity', 'state', 'county', 'vaccination'];
    this.state = {
      data: [{
        type: "indicator",
        title: { text: "Infection Risk" },
        value: 1,
        domain: { row: 0, column: 0 }
      },
      {
        type: "indicator",
        title: { text: "Death Risk" },
        value: 1,
        domain: { row: 1, column: 0 }
      }],
      layout: {
        grid: { rows: 2, columns: 1, pattern: "independent" }, frames: [], config: {},
        template: {
          data: {
            indicator: [
              {
                type: "indicator",
                mode: "delta+gauge",
                colorscale: "RdYlGn",
                delta: {
                  reference: 1, relative: true, valueformat: ".2f",
                  decreasing: { color: "green" },
                  increasing: { color: "red" }
                },
                value: 1,
                gauge: { axis: { range: [0, 2] } }
              }
            ]
          }
        },
        width: 500,
        height: 500,
      },
      sex: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },
      age: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },
      ethnicity: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },
      state: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },
      county: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },
      vaccination: { value: "", pop: 0, cases: 0, deaths: 0, dc_ratio: 0 },

    }

  }

  calc_prob = () => {

    this.setState({
      data: [{
        type: "indicator",
        title: { text: "Infection Risk" },
        value: _.reduce([this.state.sex, this.state.age, this.state.ethnicity, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.cases > 0 ? memo * o.cases : memo), 1),
        domain: { row: 0, column: 0 }
      },
      {
        type: "indicator",
        title: { text: "Death Risk" },
        value: _.reduce([this.state.sex, this.state.age, this.state.ethnicity, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.deaths > 0 ? memo * o.deaths : memo), 1),
        domain: { row: 1, column: 0 }
      }]
    });
  }

  _handleSex = (e, { value }) => {
    this.setState({ sex: _.find(sex_data, (ls) => ls.value == value) }, function () {
      this.calc_prob();
    });
  }

  handleAge = (e, { value }) => {
    this.setState({ age: _.find(age_data, (ls) => ls.value == value) }, function () {
      this.calc_prob();
    });
  }
  handleEthnicity = (e, { value }) => {
    this.setState({ ethnicity: _.find(ethnicity_data, (ls) => ls.value == value) }, function () {
      this.calc_prob();
    });
  }

  handleVax = (e, { value }) => {
    this.setState({ vaccination: _.find(vax_data, (ls) => ls.value == value) }, function () {
      this.calc_prob();
    });
  }

  render() {
    const { value } = {};

    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">Risk Calculator</Header>
        <Segment>
          <Grid columns={2} stackable textAlign='left'>
            <Grid.Column>
              <Plot centered id="myRisk"
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
                style={{ marginRight: '17em' }}
              />
              {((this.state.data[1].value - 1) * 100) > 0 ?
                <p style={{ textAlign: "center" }}>You are {(Math.abs((this.state.data[1].value - 1) * 100)).toFixed(2)}% more likely to die of Covid-19</p> :
                <p style={{ textAlign: "center" }}>You are {(Math.abs((this.state.data[1].value - 1) * 100)).toFixed(2)}% less likely to die of Covid-19</p>}
            </Grid.Column>
            <Divider vertical />
            <Grid.Column>
              <Grid.Row verticalAlign='middle'>
                <Form>
                  <Form.Group widths='equal'>
                    <Dropdown label="sex" fluid selection options={options.sex} placeholder='Sex' value={value} onChange={this._handleSex} />
                    <Dropdown label="age" fluid selection options={options.age} placeholder='Age Range' value={value} onChange={this.handleAge} />
                    <Dropdown label="ethnicity" fluid selection options={options.ethnicity} placeholder='Ethnicity' value={value} onChange={this.handleEthnicity} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Dropdown label="vaccination" fluid selection options={options.vaccination} placeholder='Vaccination Status' value={value} onChange={this.handleVax} />
                  </Form.Group>
                </Form>
                <Divider />
                <p textAlign='left'>Field info:</p>
                <p textAlign='left'>Sex: Your biological sex as determined by your sex chromosomes, separate from your gender identity. We included an option people with non-standard sex chromosome configurations, but case data (and general care) for these individuals are not as reliable as the others.</p>
                <p textAlign='left'>Age: The number of years that you have existed after exiting your mother. Age range for each group was determined by the CDC.</p>
                <p textAlign='left'>Ethnicity: Self reported ethnic background as (very) reductively defined in the US Census as "race". These classifications were never able capture accurate ethnic or cultural backgrounds due to them being based on arbitrary categories imagined by their creators. For example, the definition of "White" stretches to include people from the Middle East (meaning Jesus), despite not referring to them in any other context.</p>
                <p textAlign='left'>Vaccination Status: Whether or not you are completely vaccinated, not including boosters. Data for partial vaccinations and boosters are not available.</p>
              </Grid.Row>

            </Grid.Column>
          </Grid>
          <Header as="h1" textAlign="center">Comparisons to Other Odds of Dying in 2019</Header>
          <Plot
            data={[{
              type: 'scatter',
              x: (unpack(graph, "Percent Risk")).concat(1.6 * (this.state.data[1].value)),
              y: (unpack(graph, "Cause of Death")).concat("Your Odds of Dying to Covid-19"),
              mode: 'markers',
              name: 'Your Odds of Dying from Covid-19',
              marker: {
                color: ['rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(204, 204, 204, 0.95)', 'rgba(0, 0, 0, 0.95)'],
                line: {
                  color: 'rgba(217, 217, 217, 1.0)',
                  width: 1,
                },
                symbol: 'circle',
                size: 16
              },
              symbol: 'circle',
              size: 16
            }]}
            layout={layout1}
          />
        </Segment>
        <br />

      </div>
    );
  }
}

export default App;

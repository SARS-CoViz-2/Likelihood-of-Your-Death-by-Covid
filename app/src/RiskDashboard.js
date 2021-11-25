import React from 'react';
import Plot from 'react-plotly.js';
import _ from 'underscore';
import { Divider, Dropdown, Header, Form } from 'semantic-ui-react';
import { options } from './fields';
import { age_data } from './data/age_data';
import { race_data } from './data/ethnicity_data';
import { sex_data } from './data/sex_data';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.population = 331449281;
    this.demographics = ['sex', 'age', 'race', 'state', 'county', 'vaccination'];
    this.state = {
      data: [{
        type: "indicator",
        title: { text: "Infection Risk" },
        value: 0,
        domain: { row: 0, column: 0 }
      },
      {
        type: "indicator",
        title: { text: "Death Risk" },
        value: 0,
        domain: { row: 0, column: 1 }
      }],
      layout: { grid: { rows: 1, columns: 2, pattern: "independent" }, frames: [], config: {},
        template:{
          data: {
            indicator: [  
              {type: "indicator",
              mode: "number+gauge",
              value: 0,
              gauge: { axis: { range: [0, 2] } }
              }
            ]
          }
        }
      },
      sex: {value:"", pop: 0, cases: 0, deaths: 0, dc_ratio: 0},
      age: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      race: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      state: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      county: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      vaccination: {value:"", pop:0, cases:0, deaths: 0, dc_ratio: 0},
      
    }
      
  }
  /*
  prob() {
    
    demo = [this.state.sex, this.state.age, this.state.race, this.state.state, this.state.county, this.vaccination]

    const fields = ['pop', 'cases', 'deaths', 'dc_ratio']
    let values = []

    // for each iterate through demos
    for (const f of fields) {
      values.append()
    }
    const case_p = _.reduce(demo, (memo, o) => (o.cases > 0 ? memo * o.cases: memo), 1)/_.reduce(demo, (memo, o) => (o.pop > 0 ? memo * o.pop: memo), 1)
    const death_p = _.reduce(demo, (memo, o) => (o.deaths > 0 ? memo * o.deaths: memo), 1)/_.reduce(demo, (memo, o) => (o.pop > 0 ? memo * o.pop: memo), 1)
    

    //this.setState({data:})

    const data = [{
      type: "indicator",
      title: { text: "Infection Risk" },
      value: _.reduce(demo, (memo, o) => (o.cases > 0 ? memo * o.cases: memo), 1)/_.reduce(demo, (memo, o) => (o.pop > 0 ? memo * o.pop: memo), 1),
      domain: { row: 0, column: 0 }
    },
    {
      type: "indicator",
      title: { text: "Death Risk" },
      value: _.reduce(demo, (memo, o) => (o.deaths > 0 ? memo * o.deaths: memo), 1)/_.reduce(demo, (memo, o) => (o.pop > 0 ? memo * o.pop: memo), 1),
      domain: { row: 0, column: 1 }
    }]

    this.setState({data: data});

  }
  */
  calc_prob = () => {
    this.setState({data: [{
      type: "indicator",
      title: { text: "Infection Risk" },
      value: _.reduce([this.state.sex, this.state.age, this.state.race, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.cases > 0 ? memo * (o.cases/o.pop): memo), 1),
      domain: { row: 0, column: 0 }
    },
    {
      type: "indicator",
      title: { text: "Death Risk" },
      value: _.reduce([this.state.sex, this.state.age, this.state.race, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.deaths > 0 ? memo * (o.deaths/o.pop): memo), 1),
      domain: { row: 0, column: 1 }
    }]});
  }

  handleSex = (e, { value }) => {
    this.setState({sex: _.find(sex_data, (ls) => ls.value == value) });
    this.calc_prob();
  }
  handleAge = (e, { value }) => {
    this.setState({age: _.find(age_data, (ls) => ls.value == value) });
    this.calc_prob();
  }
  handleRace = (e, { value }) => {
    this.setState({race: _.find(race_data, (ls) => ls.value == value) });
    this.calc_prob();
  }

  render() {
    const { value } = {};

    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">Risk Calculator</Header>

        <Plot
          data={this.state.data}
          layout={this.state.layout}
          frames={this.state.frames}
          config={this.state.config}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
        <Divider/>
        <Form>
          <Form.Group widths='equal'>
            <Dropdown label="sex" options={options.sex} placeholder='Sex' value={value} onChange={this.handleSex}/>
            <Dropdown label="age" options={options.age} placeholder='Age Range' value={value} onChange={this.handleAge}/>
            <Dropdown label="race" options={options.race} placeholder='Ethnicity' value={value} onChange={this.handleRace}/>
          </Form.Group>
        </Form>
        <div id="footer">
          <p>App created by Nadine Alcantara, Aaron Kam, and Irene Ma</p>
          <p>Visualized using <u><a href="https://plotly.com/javascript/react/">Plotly.js</a></u></p>
        </div>
        <br />
      </div>
    );
  }
}

export default App;

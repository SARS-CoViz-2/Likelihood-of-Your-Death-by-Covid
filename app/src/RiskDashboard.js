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
      layout: { grid: { rows: 2, columns: 1, pattern: "independent" }, frames: [], config: {},
        template:{
          data: {
            indicator: [  
              {type: "indicator",
              mode: "delta+gauge",
              colorscale: "RdYlGn",
              delta: { reference: 1, relative: true, valueformat: ".0f" },
              value: 1,
              gauge: { axis: { range: [0, 2] } }
              }
            ]
          }
        }
      },
      sex: {value:"", pop: 0, cases: 0, deaths: 0, dc_ratio: 0},
      age: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      ethnicity: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      state: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      county: {value:"", pop: 0, cases:0, deaths: 0, dc_ratio: 0},
      vaccination: {value:"", pop:0, cases:0, deaths: 0, dc_ratio: 0},
      
    }
      
  }
  
  calc_prob = () => {
    
    this.setState({data: [{
      type: "indicator",
      title: { text: "Infection Risk" },
      value: _.reduce([this.state.sex, this.state.age, this.state.ethnicity, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.cases > 0 ? memo * o.cases: memo), 1),
      domain: { row: 0, column: 0 }
    },
    {
      type: "indicator",
      title: { text: "Death Risk" },
      value: _.reduce([this.state.sex, this.state.age, this.state.ethnicity, this.state.state, this.state.county, this.state.vaccination], (memo, o) => (o.deaths > 0 ? memo * o.deaths: memo), 1),
      domain: { row: 1, column: 0 }
    }]});
  }
  
  _handleSex = (e, { value }) => {
    this.setState({sex: _.find(sex_data, (ls) => ls.value == value) }, function(){
      this.calc_prob();
    });
  }

  handleAge = (e, { value }) => {
    this.setState({age: _.find(age_data, (ls) => ls.value == value) }, function(){
      this.calc_prob();
    });
  }
  handleEthnicity = (e, { value }) => {
    this.setState({ethnicity: _.find(ethnicity_data, (ls) => ls.value == value) }, function(){
      this.calc_prob();
    });
  }

  handleVax = (e, { value }) => {
    this.setState({vaccination: _.find(vax_data, (ls) => ls.value == value) }, function(){
      this.calc_prob();
    });
  }

  render() {
    const { value } = {};

    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">Risk Calculator</Header>
        <Segment>
          <Grid columns={2} stackable textAlign='center'>
          <Grid.Column>
            <Plot centered id="myRisk"
              data={this.state.data}
              layout={this.state.layout}
              frames={this.state.frames}
              config={this.state.config}
              onInitialized={(figure) => this.setState(figure)}
              onUpdate={(figure) => this.setState(figure)}
            />
            </Grid.Column>
            <Divider vertical />
            <Grid.Column>
            <Grid.Row verticalAlign='middle'>
              <Form>
                <Form.Group widths='equal'>
                  <Dropdown label="sex" fluid selection options={options.sex} placeholder='Sex' value={value} onChange={this._handleSex}/>
                  <Dropdown label="age" fluid selection options={options.age} placeholder='Age Range' value={value} onChange={this.handleAge}/>
                  <Dropdown label="ethnicity" fluid selection options={options.ethnicity} placeholder='Ethnicity' value={value} onChange={this.handleEthnicity}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Dropdown label="vaccination" fluid selection options={options.vaccination} placeholder='Vaccination Status' value={value} onChange={this.handleVax}/>
                </Form.Group>
              </Form>
              <p>Field info:</p>
            </Grid.Row>
            
            </Grid.Column>
          </Grid>
        </Segment>
        <br />

      </div>
    );
  }
}

export default App;

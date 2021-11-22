import React from 'react';
import Plot from 'react-plotly.js';
import { Divider, Header, Form } from 'semantic-ui-react';
import {sexes} from './fields'
import './style/style.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [{
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
      }
    ],
    layout: {  grid: { rows: 1, columns: 2, pattern: "independent" }, frames: [], config: {},
      template:{
        data: {
          indicator: [  
            {type: "indicator",
            mode: "number+gauge",
            value: 0,
            gauge: { axis: { range: [0, 100] } }
            }
          ]
        }
      }
    },
    demo: {
      sex: {value:"", condProb: 0},
      age: {value:"", condProb: 0},
      race: {value:"", condProb: 0},
      us_state: {value:"", condProb: 0},
      us_county:{value:"", condProb: 0},
      vaccination: {value:"", condProb:0}
    }}
    
  }
  
  calc_prob(label, value) {
    
  }

  render() {
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
          <Form.Select label="Sex" options={sexes} placeholder='Sex' onChange={this.handleChange}/>
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

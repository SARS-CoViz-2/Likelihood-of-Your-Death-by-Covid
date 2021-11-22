import React from 'react';
import Plot from 'react-plotly.js';
import { Divider, Header } from 'semantic-ui-react';
import './style/style.css'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">Covid Visualization</Header>
        {/* sameple plot */}
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
            { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
        />
        <Divider/>
        <div>
          <Header as="h1" textAlign="center" id="headerTitle">Your Risk for Covid-19</Header>
        </div>
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

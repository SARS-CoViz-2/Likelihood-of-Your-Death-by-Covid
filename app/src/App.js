import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import './style/style.css';
import RaceAndEthnicity from './RaceAndEthnicity';
import VaccinUS from './VaccinUS';
import Sex from './Sex';
import SexPieCharts from './SexPieCharts';
import AgeGroups from './AgeGroups';
import VaccineTrend from './VaccineTrend';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">Covid Visualization</Header>

        <RaceAndEthnicity />        
        <Sex />
        <SexPieCharts />
        <AgeGroups />
        <VaccinUS />
        <VaccineTrend />
        <Divider />
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

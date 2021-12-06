import React from 'react';
import { Card, Divider, Header } from 'semantic-ui-react';
import './style/style.css';
import RaceAndEthnicity from './RaceAndEthnicity';
import VaccinUS from './VaccinUS';
import Sex from './Sex';
import SexPieCharts from './SexPieCharts';
import AgeGroups from './AgeGroups';
import RiskDashboard from './RiskDashboard';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" id="headerTitle">
          Likelihood of Your Death by Covid
        </Header>
        <Card.Group>
          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <RaceAndEthnicity />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <Sex />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <SexPieCharts />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <AgeGroups />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <VaccinUS />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <RiskDashboard />
            </Card.Content>
          </Card>

          <Card fluid id="landing">
            <Card.Content id="chart-display">
              <About />
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <div id="footer">
          <p>University of Hawaii at Manoa ICS484 / ACM484 Final Project<br />
            Data visualized with <u><a href="https://plotly.com/javascript/react/">Plotly.js</a></u><br />
            App created with <u><a href="https://reactjs.org/">React</a></u>
          </p>
        </div>
        <br />
      </div>
    );
  }
}

export default App;

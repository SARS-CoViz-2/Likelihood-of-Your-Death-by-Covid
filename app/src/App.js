import React from 'react';
import { Card, Container, Divider, Header } from 'semantic-ui-react';
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
        <Container style={{ width: 1300 }}>
          <Header as="h1" textAlign="center" style={{ marginTop: '2rem'}}>
            Likelihood of Your Death by Covid
          </Header>
          <Card.Group>
            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <AgeGroups />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>As of 2021, age group data was available for 38,748,064 cases and 650,704 deaths in the United States. Cases of the virus start to spike in the age groups of 18-29 year olds with an 18.8% increase, while deaths spike within the 50-64 age group with a 13.2% increase.</p>
              </Card.Content>
            </Card>
            
            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <RaceAndEthnicity />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>Ethnic group data was available for 26,014,456 cases and 554,440 deaths in the United States. Amongst all age groups, the largest spikes of cases and deaths are within the White/Non-Hispanic ethnic group. This is proportunate, as this ethnic group makes up for the majority of the U.S. population.</p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <Sex />
              </Card.Content>
              <Card.Content id="chart-display">
                <SexPieCharts />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>Sex data was available for 38,716,859 cases and 648,989 deaths in the United States. It was consistant throughout every age group there are more cases from females and more deaths from males.</p>
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
        </Container>
      </div>
    );
  }
}

export default App;

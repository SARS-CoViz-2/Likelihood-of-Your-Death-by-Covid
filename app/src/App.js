import React from 'react';
import { Card, Container, Divider, Header } from 'semantic-ui-react';
import './style/style.css';
import RaceAndEthnicity from './RaceAndEthnicity';
import VaccinUS from './VaccinUS';
import Sex from './Sex';
import SexPieCharts from './SexPieCharts';
import AgeGroups from './AgeGroups';
import VaccineTrend from './VaccineTrend';
import RiskDashboard from './RiskDashboard';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ width: 1300 }}>
          <Header as="h1" textAlign="center" style={{ marginTop: '2rem' }}>
            Likelihood of Your Death by Covid
          </Header>
          <Card.Group>

            <Card fluid id="landing">
              <Card.Content style={{ margin: '0 5em' }}>
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Introduction
                </Card.Header>
                <p>The COVID-19 pandemic has been a global public health challenge.
                  Since the initial emergence of a novel coronavirus in late 2019, the spread of SARS-CoV-2 has been unrelenting, impacting nearly every aspect of society worldwide.
                  The Centers for Disease Control and Prevention (CDC) is at the forefront of the public health response to the COVID-19 pandemic and is a respected source of data and information used by public health, medical, and policy decision makers on a wide range of issues. All of the data in the visualizations below has
                  been pulled from the CDC source. In addition to presenting the data we found in a pleasing way, we have also developed an interactive risk calculator that users can use to calculate their risk of infection and likelihood of death if caught with COVID-19. The risk calculator uses the Bayes rule to access each health factor.</p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Age Groups
                </Card.Header>
                <AgeGroups />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>As of 2021, age group data was available for 38,748,064 cases and 650,704 deaths in the United States. Cases of the virus start to spike in the age groups of 18-29 year olds with an 18.8% increase, while deaths spike within the 50-64 age group with a 13.2% increase.</p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Ethnic Groups
                </Card.Header>
                <RaceAndEthnicity />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>Ethnic group data was available for 26,014,456 cases and 554,440 deaths in the United States. Amongst all age groups, the largest spikes of cases and deaths are within the White/Non-Hispanic ethnic group. This is proportunate, as this ethnic group makes up for the majority of the U.S. population.</p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Sex Groups
                </Card.Header>
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
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Vaccination Trend
                </Card.Header>
                <Card.Content id="chart-display">
                  <VaccineTrend />
                </Card.Content>
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>
                  This map displays the total amount of COVID-19 doses administered per 100,000 census population based on the jurisdiction where recipient lives from the months of Janurary to October of 2021.
                  Data represents all vaccine partners including jurisdictional partner clinics, retail pharmacies, long-term care facilities, dialysis centers, Federal Emergency Management Agency and Health Resources and Services Administration partner sites, and federal entity facilities. </p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content id="chart-display">
                <RiskDashboard />
              </Card.Content>
              <Card.Content style={{ margin: '0 5em' }}>
                <p>
                  The lifetime odds of dying from various factors in the U.S. was found by <a href="https://injuryfacts.nsc.org/all-injuries/preventable-death-overview/odds-of-dying/">NSC Injury Facts</a>. The general odds of dying from Covid-19 was determined by finding the quotient of our total deaths / total cases from our data, which results in a 1.6% fatality rate. Your unique odds of dying from Covid-19 is calculated by multiplying your calculated risk of death by the general risk of death.</p>
              </Card.Content>
            </Card>

            <Card fluid id="landing">
              <Card.Content style={{ margin: '0 5em' }}>
                <Card.Header as="h1" textAlign="center" style={{ fontSize: '2rem' }}>
                  Conclusion
                </Card.Header>
                <p>Although you cannot change your human demographic data, the best way to greatly reduce your risks of becoming infected, spreading the disease to others, and dying, is to get fully vaccinated.</p>
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

import React from 'react';
import { Header, Card, Grid, Image, Icon } from 'semantic-ui-react';

function About() {
    return (
        <Grid container>
            <Grid.Row centered>
                <Header as="h1" style={{ marginTop: '2rem' }}>
                    About Team SARS-CoViz-2
                </Header>
            </Grid.Row>
            <Grid.Row style={{ margin: '0 10em' }}>
                <p>SARS-CoViz-2 is a team from the University of Hawaiʻi aiming to visualize the demographic trends of Covid-19.</p>
                <p>Our dataset was downloaded from the <a href="https://covid.cdc.gov/covid-data-tracker/#demographics">CDC COVID Data Tracker</a>. This dataset contains data on 39,145,832 cases and 650,783 deaths in the United States (updated up to November 22, 2021). We used data that primarily focused on case and death proportions for age, sex, and ethnic groups; and vaccines administered in the U.S. overtime.</p>
            </Grid.Row>
            <Grid.Row centered>
                <Header as="h1" id="headerTitle">
                    The Members
                </Header>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Card.Group centered itemsPerRow={5}>
                        <Card>
                            <Image src='./Nadine.jpg' />
                            <Card.Content>
                                <Card.Header>Nadine Alcantara</Card.Header>
                                <Card.Meta>ICS</Card.Meta>
                                <Card.Description>
                                    Nadine is a Computer Science undergraduate at the University of Hawaiʻi. She is expected to graduate in Fall 2021 with a BS in Computer Science.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                <a href="nalcan24@hawaii.edu">
                                    nalcan24@hawaii.edu
                                </a>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='./Aaron.jpg' />
                            <Card.Content>
                                <Card.Header>Aaron Kam</Card.Header>
                                <Card.Meta>ICS, MBBE</Card.Meta>
                                <Card.Description>
                                    Aaron is a undergraduate studying Data Science and Molecular Biology at the University of Hawaiʻi. He is expected to graduate in Spring 2022 with a BS in Computer Science and a BS in Molecular Biosciences and Biotechnology.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                <a href="akam476@hawaii.edu">
                                    akam476@hawaii.edu
                                </a>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                            <Card.Content>
                                <Card.Header>Irene Ma</Card.Header>
                                <Card.Meta>ICS</Card.Meta>
                                <Card.Description>
                                    Description
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default About;
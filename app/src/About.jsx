import React from 'react';
import { Header, Card, Grid, Image, Icon } from 'semantic-ui-react';

function About() {
    return (
        <Grid container>
            <Grid.Row centered>
                <Header as="h1" id="headerTitle">
                    About Team SARS-CoViz-2
                </Header>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Card.Group centered itemsPerRow={5}>
                        <Card>
                            <Image src='./Nadine.jpg'/>
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
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
                            <Card.Content>
                                <Card.Header>Aaron Kam</Card.Header>
                                <Card.Meta>ICS, __</Card.Meta>
                                <Card.Description>
                                    Description
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
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
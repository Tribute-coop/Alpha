import React, { Component } from 'react';

import { Header, Image, Divider, Grid, Button } from 'semantic-ui-react';

class HeaderHome extends Component {
    state = { };

    render() {
        return (
            <Header as='h2'>
                <Grid stackable columns={3}>
                    <Grid.Column textAlign="left" width={1}>
                        <Image circular src='/images/poi_logo2@3x.png' size='tiny'/>
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle" width={2}>
                        Poi
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle" width={1}>
                        <p style={{fontSize:25,fontWeight:'normal'}}>Contributions</p>
                    </Grid.Column>
                    <Grid.Column textAlign="right" verticalAlign="middle" width={12}>
                        <Button style={{backgroundColor:"#00e4e3",color:"#ffffff"}}>
                            New Contribution
                        </Button>
                    </Grid.Column>
                </Grid>
                <Divider style={{marginLeft:-15,marginRight:-15}}/>
            </Header>
        );
    };
};

export default HeaderHome;
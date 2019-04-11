import React, { Component } from 'react';

import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Wizard extends Component {
    state = {  };

    render() {
        return (
        <Grid columns='equal' style={{marginTop:20}}>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={10} textAlign="left">
                <Grid.Row>
                <Image src='/images/Tribute.png'/>
                <p style={{marginTop:100,fontSize:50}}>
                    A Tribute to you, <strong>Pepo.</strong>
                    <br/>
                    Welcome!
                    <p style={{marginTop:5,fontSize:30,color:'grey'}}>
                    Boost the growth of your business in a fair and<br/>
                    sustainable way, thanks to a new form of equity.
                    </p>
                </p>
                </Grid.Row>
                <Grid.Row>
                <p style={{marginTop:200,fontSize:22,color:'black'}}>
                    Get your project started on Tribute in a few steps.<br/>
                    <Button size="massive" style={{marginTop:30,backgroundColor:"#00e4e3",color:"#ffffff"}}>
                        Begin Quick Setup
                    </Button>
                    <Link style={{marginLeft:10,fontSize:15,color:'grey'}} to="/home">Skip this. Let me look around first.</Link>
                </p>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column  width={3} textAlign="left">
                <p style={{fontSize:15,color:'grey'}}>
                    <b>Already have an account?</b>
                    <Link style={{marginLeft:10}} to="/login">Log in.</Link> 
                </p>
            </Grid.Column>
        </Grid>
        );
    };
}
 
export default Wizard;
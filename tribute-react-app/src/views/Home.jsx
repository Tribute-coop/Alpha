import React, { Component } from 'react';

import { Header, Image, Menu, Segment, Sidebar, Divider, Label, Grid, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import ItemVerticalMenu from '../components/ItemVerticalMenu';
import HeaderHome from '../components/HeaderHome';
import MainMenu from '../components/MainMenu';

class Home extends Component {
    state = { };

    render() {
        return (
            <Sidebar.Pushable as={Segment} style={{marginLeft:-1,marginTop:-2,minHeight:'100vh'}}>
                <Sidebar as={Menu} animation='overlay' icon='labeled' vertical visible width='very thin'>
                    <ItemVerticalMenu active="/images/Contrib_Active@3x.png" normal="/images/Contrib_Normal@3x.png" avatar={false}/>
                    <ItemVerticalMenu active="/images/Members_Active@3x.png" normal="/images/Members_Normal@3x.png" avatar={false}/>
                    <ItemVerticalMenu active="/images/Tokens_Active@3x.png" normal="/images/Tokens_Normal@3x.png" avatar={false}/>
                    <ItemVerticalMenu active="/images/Settings_Active@3x.png" normal="/images/Settings_Normal@3x.png" avatar={false}/>
                    <div style={{ minHeight: '48vh' }}/>
                    <Divider/>
                    <ItemVerticalMenu active="/images/flash@3x.png" normal="/images/flash@3x.png" avatar={false}/>
                    <ItemVerticalMenu active="/images/Wallet_Active@3x.png" normal="/images/Wallet_Normal@3x.png" avatar={false}/>
                    <ItemVerticalMenu active="/images/Notifications_Active@3x.png" normal="/images/Notifications_Normal@3x.png" avatar={false} counter={6}/>
                    <ItemVerticalMenu active="/images/yt.png" normal="/images/yt.png" avatar={true}/>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic style={{marginLeft:60}}>
                        <HeaderHome/>
                        <MainMenu/>
                        <div style={{marginLeft:-15,marginTop:-14,marginRight:-15,marginBottom:-15,backgroundColor:'#f8fcfd',minHeight:'100vh'}}>

                        </div>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    };
}

export default Home;
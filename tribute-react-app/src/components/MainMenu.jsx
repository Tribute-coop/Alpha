import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';

class MainMenu extends Component {
    state = { };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Menu pointing secondary color="teal" style={{marginLeft:-15,marginRight:-15}}>
                <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='Calls'
                    active={activeItem === 'Calls'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    };
};

export default MainMenu;
import React, { Component } from 'react';

import { Image, Label } from 'semantic-ui-react';

class ItemVerticalMenu extends Component {
    state = {
        src: null,
        active : false
    };

    mouseIn() {
        if (this.state.active === false)
            this.setState({active:true,src:this.props.active});
    };

    mouseOut() {
        if (this.state.active === true)
            this.setState({active:false,src:this.props.normal});
    };

    render() {
        return (
            <div style={{margin:0,padding:0,marginTop:20,cursor:'pointer'}} onMouseEnter={()=> this.mouseIn()} onMouseLeave={()=> this.mouseOut()}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.active === true && <div style={{marginLeft:-4,backgroundColor:'#00e4e3',height:30,width:5}}/>}
                                {this.state.active === false && <div style={{marginLeft:-4,height:30,width:5}}/>}
                            </td>
                            <td>
                                {this.props.avatar === false && <Image style={{marginLeft:11,height:22,width:'auto'}} spaced src={this.state.src || this.props.normal} size="mini" bordered={false}/>}
                                {this.props.avatar === true && <Image circular={this.props.avatar} style={{height:35,width:'auto'}} spaced src={this.state.src || this.props.normal} size="mini" bordered={false}/>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default ItemVerticalMenu;

import React from 'react';
import CssStyleChild from './CssStyleChild'
class Cssstyle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "purple",
            backgroundcolor : "skyblue",
            fontsize : "20px"
        };
    }

    render(){
        return(
            <div><CssStyleChild color = {this.state.color} fontsize = {this.state.fontsize} /></div>
        )
    }
}
export default Cssstyle;
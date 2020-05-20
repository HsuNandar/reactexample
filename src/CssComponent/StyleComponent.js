import React from 'react';

class StyleComponent extends React.Component{

    render(){
        return(
        <div style = {{backgroundColor : this.props.backgroundcolor}}><h1 style = {{color : this.props.color}}>Hello</h1></div>
        )
    }
}
export default StyleComponent;
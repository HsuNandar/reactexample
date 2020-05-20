import React from 'react';

class ChildComponent extends React.Component{

    render(){
        return(
        <div><h3>{this.props.name}</h3></div>
        )
    }
}
export default ChildComponent;
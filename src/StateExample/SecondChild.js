import React from 'react';

class SecondChild extends React.Component{

    render(){
        return(
        <div>{this.props.name}</div>
        )
    }
}
export default SecondChild;
import React from 'react';

class Father extends React.Component{

    render(){
        return(
        <div>{this.props.name} .Email address is {this.props.email}. Age is {this.props.age}</div>
        )
    }
}
export default Father;
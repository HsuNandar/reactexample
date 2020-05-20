import React from 'react';
class ChildComponent extends React.Component{

    render(){
        return(
        <div><h1>{this.props.name}{this.props.age}</h1></div>
        )
    }
}
export default ChildComponent;
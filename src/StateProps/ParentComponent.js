import React, { Children } from 'react';
import ChildrenComponent from './ChildrenComponent';
class ParentComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : "Su Nandar",
            age : 21,
            job : "Developer"
        };
    }

    render(){
        return(
            <div><ChildrenComponent name = {this.state.name} age = {this.state.age} job = {this.state.job}/></div>
        )
    }
}
export default ParentComponent;
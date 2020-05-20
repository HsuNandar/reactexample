import React from 'react';

class ChildrenComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            age : this.props.age,
            job : this.props.job
        };
    }
    render(){
        return(

        <div><SecondChildComponent newname = {this.state.name} newage ={this.state.age} newjob = {this.state.job} /></div>
        )
    }
}

class SecondChildComponent extends React.Component{

    render(){
        return(
        <div>I am {this.props.newname} / {this.props.newage} / {this.props.newjob}.</div>
        )
    }
}
export default ChildrenComponent;
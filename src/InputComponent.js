import React from 'react';
import InputChildComponent  from './InputChildComponent';
class InputComponent extends React.Component{

    constructor(props){
        super(props);

        this.state =
        {
            text : "text",
            number : "number",
            email : "text",
            pass : "password",
            btn : "submit",
            
        }
    }
    render(){

        return(
            <div><InputChildComponent text = {this.state.text} number = {this.state.number} email = {this.state.email} pass = {this.state.pass} btn ={this.state.btn} color = {this.state.color} bgcolor = {this.state.bgcolor}/></div>
        )
    }
}
export default InputComponent;
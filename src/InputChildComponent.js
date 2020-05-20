import React from 'react';
import { Button } from 'bootstrap';

class InputChildComponent extends React.Component{

    render(){

        return(

            <div>
                <form  className = "myForm">
                <label>Enter your name</label>
                <input type = {this.props.text}></input><br></br><br></br>
                <label>Enter your age</label>
                 <input type = {this.props.number}></input><br></br><br></br>
                 <label>Enter your email</label>
                 <input type = {this.props.email}></input><br></br><br></br>
                 <label>Enter your password</label>
                 <input type = {this.props.pass}></input><br></br><br></br>
                 <button type= {this.props.btn} className="btn btn-primary">Submit</button>
 
                </form>
            </div>
        )
    }
}
export default InputChildComponent
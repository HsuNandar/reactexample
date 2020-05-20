import React from 'react';

class FormComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value :''
        };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState ({value : event.target.value});
    }
    handleSubmit(event){
        alert('A new name ' + this.state.value);
        event.preventDefault();
    }
    
    render(){

        return(

            <div>
                <form onSubmit = {this.handleSubmit}>
                <label>Enter your name </label>
                <input type = "text" onChange = {this.handleChange} />
                <input type = "submit" value = "Submit"></input>
                </form>
                
            </div>
        )
    }
}
export default FormComponent;
import React from 'react';

class FormTextarea extends React.Component{

    constructor(props){
            super(props);

            this.state = {
                value : 'Enter text here'
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }

    handleSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    }

    render(){

        return(

            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Enter Text:
                        <textarea value = {this.state.value} onChange = {this.handleChange} />
                    </label>
                    <input type = "submit" value = "Submit"></input>
                </form>
            </div>
        )
    }
}
export default FormTextarea;
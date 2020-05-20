import React from 'react';
 
class ChangeColor extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            color : "#e3867f"
        };
    }

    colorChange =()=> {
        this.setState = ({color : "#751375"})
        alert(this.props.name)
    } 
    render(){

        return(
        <div><h1 onClick = {this.colorChange}>{this.props.name} </h1>
        </div>
        )
    }
}
export default ChangeColor;
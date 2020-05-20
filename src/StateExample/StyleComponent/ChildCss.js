import React from 'react';
export class ChildCss extends React.Component{

    render(){

        const style ={
            fontsize : "5px",
            color : "#2f57c4",
            
        };
        const btnstyle ={
            color : "red",
            backgroundcolor : "purple",
            hover : "red"
        }

        return(

        <div style = {style}>{this.props.title} 
        <button>{this.props.btn}</button>
        </div>
        )
    }
}
//export default ChildCss;
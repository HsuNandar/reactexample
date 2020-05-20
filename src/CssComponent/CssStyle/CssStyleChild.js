import React from 'react';

class CssStyleChild extends React.Component{

    render(){
        return(
            <div><h1 style ={{color : this.props.color , fontSize :this.props.fontsize}}>Thank you</h1></div>
        )
    }
}
export default CssStyleChild;
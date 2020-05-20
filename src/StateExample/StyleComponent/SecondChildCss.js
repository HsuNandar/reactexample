import React from 'react';

const SecondChildCss = (props) =>{

    const style = {
        color : "#282e40"
    }
    return(

    <div style = {style}>{props.message}</div>
    )
}
export default SecondChildCss;
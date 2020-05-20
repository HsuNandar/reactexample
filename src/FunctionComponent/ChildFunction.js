import React, { Children } from 'react';

const ChildFunction = (props) =>{
    return(
    <div><h3>{props.name} is {props.age} years old.</h3></div>
    )
}
export default ChildFunction;
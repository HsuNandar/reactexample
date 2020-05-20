import React from 'react';

export const Contact = () =>{
    return(
        <div className= "Contact"></div>
    )
}

export const Chat = () =>{
    return(
        <div className = "Chat"></div>
    )
}
const Coloring = (props) =>{

    return(

        <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
    )
}

const ParentColoring = (props) =>{

    return(

        <div><Coloring left ={<Contact /> }></Coloring>
             <Coloring right = {<Chat />}></Coloring>           
        </div>
    )
}
export default ParentColoring;
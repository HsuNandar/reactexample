import React from 'react';
import ChildComponent from './ChildComponent';
import SecondChild from './SecondChild';

class ParentComponent extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {
                name : "Su Nandar",
                age : 21
            };
        }
    render(){
        return(
        <div><ChildComponent name = {this.state.name} />
             <ChildComponent age = {this.state.age} />
             <SecondChild name = {this.state.name} />
        </div>
        )
    }
}
export default ParentComponent;
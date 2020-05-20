import React from 'react';
import Users from './Users';
class User extends React.Component{

    state = {

        user : [{name : "Mg Mg", age : 20},
                {name : "Su Su" , age : 30}        
                ],
                title : "Users list"
    };

    ChangeAge = ()=>{

        this.setState = ({
            user : [{name : "Mg Mg", age : 10},
            {name : "Su Su" , age : 20}        
            ]
        })
        console.log("click")
    }
    render(){

        return(

            <div>
                <h2>{this.state.title}</h2>
                <Users name = {this.state.user[0].name} age = {this.state.user[0].age}/>
                <Users name = {this.state.user[1].name} age = {this.state.user[1].age}/>
                <button onClick = {this.ChangeAge} >Make change users age</button>
            </div>
        )
    }
}
export default User;
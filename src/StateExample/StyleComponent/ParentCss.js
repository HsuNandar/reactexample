import React from 'react';
import {ChildCss} from './ChildCss';
import SecondChildCss from './SecondChildCss';
class ParentCss extends React.Component{

    render(){

        return(
            <div><ChildCss title = "This is Childern Css Component" />
                  <ChildCss btn = "Click" />  
                  <SecondChildCss message = "This is Css Style Component" />
            </div>
        )
    }
}

export default ParentCss;
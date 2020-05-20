import React from 'react';
import logo from './logo.svg';
//import Person from './Example/Person';
//import ParentComponent from './StateExample/ParentComponent';
import CssComponent from './CssComponent/CSSComponent';
import InputComponent from './InputComponent';
import CssStyle from './CssComponent/CssStyle/Cssstyle';
import ChildComponent from './ChildComponent';
import {Example} from './FunctionComponent/Example';
import ChangeColor from './StateExample/ChangeColor';
import ParentComponent from './StateProps/ParentComponent';
import {ParentFunction} from './FunctionComponent/ParentFunction';
import User from './StateExample/User';
import ParentCss from './StateExample/StyleComponent/ParentCss';
import StyleComponent from './StateExample/StyleComponent/Stylecomponent';
import FunctionStateHook from './FunctionState/FunctionStateHook';
import Fruit from './FunctionState/StateHook';
import FormComponent from './Form/FormComponent';
import FormTextarea from './Form/FormTextarea';
import ParentColoring from './FunctionComponent/Testing';
import './App.css';


function App() {
  return (
    <div className="App">
        {/* <Person />
        <ParentComponent /> */}
        <CssComponent />
        <InputComponent />
        <CssStyle /> 
        <ChildComponent name = "Su Su" />
        <Example />
        <ChangeColor name = "Hello"/>
        <ParentComponent />
        <ParentFunction />
        <User /> */}
        <ParentCss />
        <StyleComponent />
        <FunctionStateHook />
        <Fruit />
        <FormComponent />
        <FormTextarea />
        <ParentColoring />
    </div>
  );
}

export default App;

import React from 'react';
import Image from './bts12.jpg';
import Picture from './jungkook.jpg';
const StyleComponent = () =>{

    const style = {
        width : "500px",
        height : "300px"

    };
    return(
    <div>
        <img src = {Image} style = {style}></img><br></br>
        <h3>Hello</h3>
        <img src = {Picture} style = {style}></img>
    </div>
    )
}
export default StyleComponent;
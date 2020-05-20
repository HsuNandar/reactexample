import React from 'react';
import ChildFunction from './ChildFunction';
export const ParentFunction = (props) => {
    return(
        <div>
            <ChildFunction name = "Ma Ma" age = "21" />
        </div>
    )
}
//export default ParentFunction;
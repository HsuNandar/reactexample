import React , {useState} from 'react';

const Fruit = () =>{

    const [fruit,setFruit] = useState('Apple');

    return(

    <div><p>You choose {fruit}</p>
            <button onClick = {() => setFruit ('orange')}>Click</button>
    </div>
    )
}
export default Fruit;
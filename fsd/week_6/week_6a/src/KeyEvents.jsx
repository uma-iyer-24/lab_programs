import {useState} from 'react';

function KeyEvents(){
    const [message,setMessage] = useState("Key Events");

    const keyUP = (e) =>{
        setMessage(`${e.key} Key up`);
    };

    const keyDOWN = (e) =>{
        setMessage(`${e.key} Key down`);
    };

    return(
        <div>
            <input type="text" onKeyDown={keyDOWN} onKeyUp={keyUP}/>
            <p>{message}</p>
        </div>
    )
}
export default KeyEvents;
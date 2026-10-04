import {useState} from 'react';

function ClipboardEvents(){
    const [message, setMessage] = useState("Add text to perform clipboard Events");

    const copy=()=>{
        setMessage("User copied text");
    };

    const cut=()=>{
        setMessage("User cut text");
    };

    const paste=()=>{
        setMessage("User pasted text");
    };

    return(
        <div>
            <input type="textArea" 
                onCopy={copy}
                onCut={cut}
                onPaste={paste}/>
            <p>{message}</p>
        </div>
    )
}

export default ClipboardEvents;
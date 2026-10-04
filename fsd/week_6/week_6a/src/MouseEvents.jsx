import {useState} from 'react';
function MouseEvents(){
    const [message, setMessage] = useState("Mouse Events");

    const msEnter = () =>{
        setMessage("Mouse entered the element");
    };

    const msClick = () =>{
        setMessage("Mouse clicked the element");
    };

    const msDblClick = () =>{
        setMessage("Mouse double clicked the element");
    };

    const msLeave = () =>{
        setMessage("Mouse left the element");
    };

    const msRightClick = () =>{
        setMessage("Mouse right clicked the element");
    };

    return(
        <div>
            <button 
                onMouseEnter={msEnter}
                onClick={msClick}
                onDoubleClick={msDblClick}
                onMouseLeave={msLeave}
                onContextMenu={msRightClick}
            > Click me! </button>
            <p>{message}</p>
        </div>
    )
}
export default MouseEvents;
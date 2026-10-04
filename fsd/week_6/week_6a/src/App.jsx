import { useState } from 'react'
import './App.css'
import MouseEvents from './MouseEvents.jsx'
import KeyEvents from './KeyEvents.jsx'
import ClipboardEvents from './ClipboardEvents.jsx'

function App(){
   const [message,setMessage] = useState(" ");
   const msEvent = (msg)=>{ setMessage(msg) ;};
   const kEvent = (msg)=>{ setMessage(msg) ;};
   const cbEvent = (msg)=>{ setMessage(msg) ;};
  return(
    <div>
      <h1>React Events</h1><br/>
      <MouseEvents onEvent={msEvent}/>
      <KeyEvents onEvent={kEvent}/>
      <ClipboardEvents onEvent={cbEvent}/>
    </div>
  )
}
export default App
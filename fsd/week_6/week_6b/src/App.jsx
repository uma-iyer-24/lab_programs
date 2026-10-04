import {useState} from 'react';
import Voting from './Voting.jsx';

function App(){
  const [message,setMessage] = useState(" ");
  const vote = (msg)=>{ setMessage(msg) ;};
  return(
    <div>
      <h1>Voting System</h1>
      <Voting onEvent={vote}/>
    </div>
  )
}
export default App;
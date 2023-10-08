import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.webApp;
function App() {
  useEffect(()=>{
    tg.ready()
  },[])
  const onClose =()=>{
    tg.close()
  }
  return (
    <div className="App">
       <button onClick={onClose}>Close</button>
    </div>

   
  );
}

export default App;

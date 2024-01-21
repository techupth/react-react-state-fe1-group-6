import "./App.css";
import { useState } from "react";

function App() {
  const [message , setMessage] = useState('Greeting Message')

  const userHandle = (word) => {
    setMessage(word)
  }

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={(event)=>{
          userHandle(event.target.value)
        }} value={'สวัสดี!'}>สวัสดี!</button>
        <button onClick={(event)=>{
          userHandle(event.target.value)
        }} value={'Hi!'}>Hi!</button>
        <button onClick={(event)=>{
          userHandle(event.target.value)
        }} value={'你好!'}>你好!</button>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [num1,setNum1]=useState(0)
  const [num2,setNum2]=useState(0)
  const [num3,setNum3]=useState(0)

  let sum=num1+num2+num3

  return (
    <div className="App">
      {/* PREMIERE BOITE */}
      <div className='boite'>
        <span>{num1}</span>
        <div className='buttons'> 
          {/* BOUTON + */}
          {num1<10 && sum<18 ?
            <button onClick={()=>{
              setNum1(num1+1)
            }} 
            >+</button> : null
          }
          {/* BOUTON - */}
          <button onClick={()=>{
            setNum1(num1-1)
          }} 
          >-</button>
        </div>
      </div>

      {/* DEUXIEME BOITE */}
      <div className='boite'>
        <span>{num2}</span>
        <div className='buttons'> 
          {num2<10 && sum<18 ?
            <button onClick={()=>{
              setNum2(num2+1)
            }} 
            >+</button> : null
          }
          <button onClick={()=>{
            setNum2(num2-1)
          }} 
          >-</button>
        </div>
      </div>

      {/* TROISIEME BOITE */}
      <div className='boite'>
        <span>{num3}</span>
        <div className='buttons'> 
          {num3<10 && sum<18 ?
            <button onClick={()=>{
              setNum3(num3+1)
            }} 
            >+</button> : null
          }
          <button onClick={()=>{
            setNum3(num3-1)
          }} 
          >-</button>
        </div>
      </div>

      {/* BOITE SOMME  */}
        <div className='boite'>{sum}</div>
    </div>
  );
}

export default App;

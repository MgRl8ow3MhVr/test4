import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [email,setEmail]=useState('')
    const [pwd,setPwd]=useState('')
    

  return (
    <div className='App'>
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(email,pwd)
        
        }}>
            <input
                placeholder='votre email'
                type='text'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <input
                type='password'
                value={pwd}
                onChange={(e)=>{
                    setPwd(e.target.value)
                }}
            />
            <input
                type='submit'
                value='SOUMETTRE'
            />

        </form>
    </div>
  )
  }

  export default App;
import logo from './logo.svg';
import './App.css';
import OneCompteur from './components/OneCompteur.js'
import { useState } from 'react';


function App() {

  const [num1,setNum1]=useState(0)
  // setNum1 est la fonction qui permet de modifier num1
  // C'est l'unique moyen de modifier num1
  const [num2,setNum2]=useState(0)
  const [num3,setNum3]=useState(0)

  let sum=num1+num2+num3

  // Nous avons du déclarer les states num1,2 et 3 dans app afin qu'ils soient tous réunis
  // dans un composant mère pour en maitriser la somme.
  
  // Or pour que chaque version du OneCompteur puisse incrémenter son num, il a besoin de 
  // la fonction setNum. C'est pourquoi on passe en props num ET setNum

  return (
    <div className="App">
      <OneCompteur displayNum={num1} setNumFunction={setNum1} theSum={sum}/> 
      <OneCompteur displayNum={num2} setNumFunction={setNum2} theSum={sum}/> 
      <OneCompteur displayNum={num3} setNumFunction={setNum3} theSum={sum}/>
      <div className='boite'>{num1+num2+num3}</div>
    </div>
  );
}

export default App;

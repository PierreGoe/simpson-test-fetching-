import './App.css';
import React, { useState } from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';


const SimpsonSample =[
  {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  }
]


function App() {
  const [simpsons, setSimpson] = useState(...SimpsonSample)

 

  const getSimpson = () => {
    axios
  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
  
      // Extract the DATA from the received response
  
      .then((response) => response.data)
      // Use this data to update the state
  
      .then((data) => {
        console.log(data[0]);
        setSimpson(data[0]);
      });

      
  }



  return (
  
    <div>
      <QuoteCard simpsons={simpsons}/>
      <button type='button' onClick={getSimpson}>Get simpsons</button>

      {/* <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button> */}

    </div>
  );
}

export default App;

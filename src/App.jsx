import { useState } from 'react'
import './App.css'
import CardPhrase from './components/CardPhrase'
import quote from './json/quote.json'


function App() {


  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  const generadLetters = arr =>{
    var letters = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var num = (Math.random()*15).toFixed(0);
    return letters[num];
  }
    
  const colorHEX = () =>{
    let color = "";
    for(let i=0;i<6;i++){
      color = color + generadLetters() ;
    }
    return "#" + color;
  }

  let quoteRandom = getRandomElement(quote);
  let colorRandom = colorHEX();

  const [randomQuote,setRandomQuote] = useState(quoteRandom);
  const [randomColors,setRandomColors]=useState(colorRandom);


  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    quoteRandom = getRandomElement(quote)
    colorRandom = colorHEX();

    setRandomQuote(quoteRandom)
    setRandomColors(colorRandom)
  }


  return (
    <div id='app' className="App" style={objStyle} >
      <CardPhrase
      randomQuote={randomQuote} 
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App

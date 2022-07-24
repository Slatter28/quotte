import React from 'react'
import ButtonPhrase from './buttonPhrase'

const CardPhrase = ({ randomQuote, randomColors, getRandomAll }) => {

  const objectStyle = {
    color: randomColors
  }



  return (

    <div className='quote'>
      <div className='quote__text' style={objectStyle}>
        <i class="fa-solid fa-quote-left"></i>
        <h1 >
          {randomQuote.quote}
        </h1>
      </div>
      <p style={objectStyle}>
        {randomQuote.author}
      </p>

      <ButtonPhrase
        getRandomAll={getRandomAll}
        randomColors={randomColors}
      />
    </div>

  )
}

export default CardPhrase
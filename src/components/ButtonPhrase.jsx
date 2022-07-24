import React from 'react'

const ButtonPhrase = ({getRandomAll,randomColors}) => {

    const objectBgStyle = {
        backgroundColor: randomColors
      }


  return (
    <div className='btn'>
        <button className='btn__button' style={objectBgStyle} onClick={getRandomAll}>&#62;</button>
    </div>
  )
}

export default ButtonPhrase
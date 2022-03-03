import React from 'react'

const SecretWord = (props) => {
  return (
    <div className='secret-word'>
      {props.randomizedWord ? (
        <h1>{props.randomizedWord}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default SecretWord

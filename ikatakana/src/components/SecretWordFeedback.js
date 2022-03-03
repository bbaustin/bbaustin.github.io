import React from 'react'

const SecretWordFeedback = (props) => {
  return (
    <div className='secret-word'>
      {props.randomizedWord ? (
        <div className='feedback'>
          <h1>{props.randomizedWord.word[0].japanese}</h1>
          <h2 className='romaji'>{props.randomizedWord.word[0].romaji}</h2>
          <h2>{props.randomizedWord.word[0].english_meaning}</h2>
          <p className='definition'>{props.randomizedWord.info}</p>
          <div className='button' onClick={props.randomizeWord}>
            オーケー！
          </div>
          <input
            autoFocus
            className='secret'
            onBlur={({ target }) => target.focus()}
            onKeyDown={props.handleEnter}
            tabIndex={-1}
          ></input>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default SecretWordFeedback

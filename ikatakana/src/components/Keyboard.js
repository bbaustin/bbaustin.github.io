import React from 'react'
import { KATAKANA_ALPHABET } from '../assets/constants'

const Keyboard = (props) => {
  let katakanaAlphabet = { KATAKANA_ALPHABET }
  return (
    <div className='keyboard'>
      {katakanaAlphabet.KATAKANA_ALPHABET.map((letter) => (
        <div key={letter}>{letter}</div>
      ))}
    </div>
  )
}

export default Keyboard

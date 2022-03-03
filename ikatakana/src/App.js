import React, { useState, useEffect } from 'react'
import SecretWord from './components/SecretWord'
import SecretWordFeedback from './components/SecretWordFeedback'
import TextBar from './components/TextBar'
import InfoWidget from './components/InfoWidget'
import Footer from './components/Footer'
import word_list from './assets/word_list.json'
import { DISPLAY_OPTIONS } from './assets/constants.js'

function App() {
  const [value, setValue] = useState()
  const [randomizedWord, setRandomizedWord] = useState()
  const [points, setPoints] = useState(0)
  const [visibleInfoWidget, setVisibleInfoWidget] = useState(false)
  const [displayed, setDisplayed] = useState(DISPLAY_OPTIONS[0])

  const randomizeWord = () => {
    setDisplayed(DISPLAY_OPTIONS[0])
    let randomNumber = Math.floor(Math.random() * word_list.length)
    setRandomizedWord(word_list[randomNumber])
  }

  const increasePoints = () => {
    setPoints(points + 1)
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter' && displayed === DISPLAY_OPTIONS[1]) {
      randomizeWord()
    }
  }

  const skip = () => {
    setPoints(0)
    setDisplayed(DISPLAY_OPTIONS[1])
    setValue('')
  }

  useEffect(() => {
    randomizeWord()
  }, [])

  const compareText = (inputText, randomWord) => {
    if (inputText === randomWord && displayed === DISPLAY_OPTIONS[0]) {
      increasePoints()
      setValue('')
      setDisplayed(DISPLAY_OPTIONS[1])
    }
  }

  useEffect(() => {
    if (randomizedWord && displayed === DISPLAY_OPTIONS[0]) {
      compareText(value, randomizedWord.word[0].romaji)
    }
  })

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase())
  }

  const toggleTrueFalse = () => {
    if (visibleInfoWidget) {
      return setVisibleInfoWidget(false)
    }
    setVisibleInfoWidget(true)
  }

  return (
    <div className='App'>
      {randomizedWord && displayed === 'RANDOM_WORD' ? (
        <>
          <SecretWord randomizedWord={randomizedWord.word[0].japanese} />
          <TextBar
            className='textBar'
            value={value}
            handleChange={handleChange}
          />
          <div className='button notice' onClick={skip}>
            Skip
          </div>
        </>
      ) : (
        <></>
      )}
      {randomizedWord && displayed === 'FEEDBACK' ? (
        <SecretWordFeedback
          randomizedWord={randomizedWord}
          randomizeWord={randomizeWord}
          handleEnter={handleEnter}
        />
      ) : (
        <></>
      )}
      <div
        className='button info mini'
        onClick={() => setVisibleInfoWidget(true)}
      >
        ?
      </div>
      <h3>Combo: {points}</h3>
      <Footer />

      {visibleInfoWidget ? (
        <InfoWidget toggleTrueFalse={toggleTrueFalse} />
      ) : null}
    </div>
  )
}

export default App

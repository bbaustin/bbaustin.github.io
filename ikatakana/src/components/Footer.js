import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>
        <span className='info'>i</span>Kata<span className='info'>kan</span>a
      </p>
      <p>
        Most vocab taken from{' '}
        <a
          href='https://en.wikipedia.org/wiki/List_of_gairaigo_and_wasei-eigo_terms'
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </a>{' '}
        (Wikpedia)
      </p>
      <p>
        favicon from{' '}
        <a href='https://icons8.com/' target='_blank' rel='noopener noreferrer'>
          here
        </a>{' '}
        (icons8)
      </p>
    </footer>
  )
}

export default Footer

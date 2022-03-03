import React from 'react'

const InfoWidget = (props) => {
  return (
    <div className='widget info-widget'>
      <div
        className='button top-right mini notice'
        onClick={props.toggleTrueFalse}
      >
        x
      </div>

      <p>
        For general katakana, please input the matching Roman letter(s).
        Examples:
      </p>
      <ul>
        <li>ア = a </li>
        <li>マ = ma</li>
        <li>ラ = ra</li>
      </ul>

      <p>
        Some katakana words use ー, which creates a long sound. In that case,
        please write the vowel sound twice. Examples:
      </p>
      <ul>
        <li>シー = shii</li>
        <li>ハー = haa</li>
        <li>デー = dee</li>
      </ul>

      <p>
        Other words will contain a small ャ, ュ, or ョ. In that case, use "y"
        followed by a vowel. Examples:
      </p>
      <ul>
        <li>シャ = shya</li>
        <li>ミュ = myu</li>
        <li>ビョ = byo</li>
      </ul>

      <p>
        Similar to the point above, some words contain a small ァ, ィ, ゥ, ェ,
        ォ. In that case, replace the preceding vowel sound with this character.
        Examples:
      </p>
      <ul>
        <li>ツァ = tsa</li>
        <li>チェ = che</li>
        <li>ティ = ti</li>
      </ul>

      <p>
        {' '}
        <span className='info'>EXCEPTION!</span> If the preceding character is a
        "vowel" character, please include both characters' sounds. This often
        happens with "ウ" sounds. Examples:
      </p>
      <ul>
        <li>ハロウィン = harouin (Halloween)</li>
        <li>ウィル = uiru (Will)</li>
        <li>ウォシュレット = uoshyuretto (Washlet)</li>
      </ul>

      <p>
        What if the word contains a small ッ? Write two of the following
        consonant. Examples:
      </p>
      <ul>
        <li>ッパ = ppa</li>
        <li>ッキ = kki</li>
        <li>ッショ = sshyo</li>
      </ul>

      <p>Other considerations:</p>
      <ul>
        <li>ヴ = v</li>
        <li>
          If you see ・, please disregard it. For example,{' '}
          <span className='info'>イン・キー = inkii</span>
        </li>
      </ul>

      <div className='spacer'></div>
    </div>
  )
}

export default InfoWidget

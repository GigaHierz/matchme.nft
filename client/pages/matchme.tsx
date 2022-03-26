import { useState } from 'react'
import styles from '../styles/MatchMe.module.scss'

function MatchMePage () {
  const [matchState, setMatchState] = useState<string>()

  const matchme = () => {
    setMatchState(`matching`)
  }

  return (
    <div className={styles.content}>
      {' '}
      <button className={styles.button} onClick={matchme}>
        MatchMe
      </button>
      <span> {matchState}</span>
    </div>
  )
}

export default MatchMePage

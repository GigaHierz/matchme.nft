import { useState } from 'react'
import styles from '../styles/MatchMe.module.scss'
import Layout from '../components/Layout'

function MatchMePage () {
  const [matchState, setMatchState] = useState<string>()

  const matchme = () => {
    setMatchState(`matching`)
  }

  return (
    <Layout>
      <div className={styles.content}>
        {' '}
        <button className={styles.button} onClick={matchme}>
          MatchMe
        </button>
        <span> {matchState}</span>
      </div>
    </Layout>
  )
}

export default MatchMePage

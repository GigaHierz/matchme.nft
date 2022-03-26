import { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

import Link from 'next/link'

const Home: NextPage = () => {
  const [userState, setUserState] = useState<boolean>()
  const signup = () => {
    console.log('promting the wallet')

    if (true) {
      setUserState(true)
    } else {
      setUserState(false)
    }
    // contract.mint({ value: 0.1 })
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h3 className={styles.title}>MatchMe.Nft</h3>
        <span className={styles.intro}>WELCOME TEXT</span>
        <div>
          {' '}
          <button onClick={signup}>Sign Up</button>
          {userState === false
            ? 'you got your MatchMeNT '
            : 'something went wrong'}
          {userState && (
            <Link href='/profile'>
              <a>Set up your profile</a>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Home

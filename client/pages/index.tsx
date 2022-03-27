import { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

import Link from 'next/link'
import { Button } from '@chakra-ui/react'

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
        <span className={styles.intro}>
          a Data Driven Matching App that truly matches like-minded individuals
          based on their interests. Web 3 is all about building thriving global
          communities who come together around common values, interests and
          goals. <br /> <br />
          Our app will be a bridge for web 2 users to do the same, without
          having to understand all things DAO or Crypto.
        </span>
        <div className={styles.intro}>
          {' '}
          <Button onClick={signup}>Mint</Button>
          <br />
          <span>
            {userState === false
              ? 'Ups. Something went wrong'
              : userState === true
              ? 'Yeah. You got your MatchMeNFT '
              : ''}
          </span>
          <br />
          <span className={styles.button}>
            {userState && (
              <Link href='/profile'>
                <a>Set up your profile</a>
              </Link>
            )}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Home

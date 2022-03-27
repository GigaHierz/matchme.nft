import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/MatchMe.module.scss'
import Layout from '../components/Layout'
import matches from '../assets/data.json'
import user from '../assets/user.json'

function MatchMePage () {
  const [matchState, setMatchState] = useState<string>()
  const matchesList = matches
  let matchList = []
  let userNfts = []
  let matchPercentageList = []

  useEffect(() => {
    userNfts = user.nfts.map(nft => nft.smartcontractAddress)

    console.log(userNfts)

    matchList = matchesList.map(match =>
      match.nfts.filter(nft => userNfts.includes(nft.smartcontractAddress))
    )

    matchPercentageList = matchList.map(match => match.length / 5)

    console.log(matchPercentageList)
  })

  // const matchme = () => {
  //   setMatchState(`matching`)
  // }

  return (
    <Layout>
      <div className={styles.content}>
        {' '}
        {/* <Button className={styles.button} onClick={matchme}>
          Show Matches
        </Button> */}
        <span> {matchState}</span>
        <ul className={styles.matchList}>
          <div key='1' className={styles.matchContainer}>
            <span>100%</span>
            <Link href='/chat'>
              <a>Match Me</a>
            </Link>{' '}
          </div>
          <div key='2' className={styles.matchContainer}>
            <span>80%</span>
            <Link href='/chat'>
              <a>Match Me</a>
            </Link>{' '}
          </div>
          <div key='3' className={styles.matchContainer}>
            <span>60%</span>
            <Link href='/chat'>
              <a>Match Me</a>
            </Link>{' '}
          </div>
        </ul>
      </div>
    </Layout>
  )
}

export default MatchMePage

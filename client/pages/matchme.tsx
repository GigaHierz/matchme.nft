import { useEffect, useState } from 'react'
import styles from '../styles/MatchMe.module.scss'
import Layout from '../components/Layout'
import matches from '../assets/data.json'
import user from '../assets/user.json'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

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

  const matchme = () => {
    setMatchState(`matching`)
  }

  return (
    <Layout>
      <div className={styles.content}>
        {' '}
        <Button className={styles.button} onClick={matchme}>
          Show Matches
        </Button>
        <span> {matchState}</span>
        <ul>
          {matchPercentageList.length > 0 &&
            matchPercentageList.map((match, index) => {
              console.log(index)
              return match > 0.5 ? (
                <div className='matchContainer'>
                  <li key={index}>hallo</li>
                  <Link href='/chat'>
                    <a>Match Me</a>
                  </Link>{' '}
                </div>
              ) : (
                ''
              )
            })}
        </ul>
        <div className={styles.matchContainer}></div>
      </div>
    </Layout>
  )
}

export default MatchMePage

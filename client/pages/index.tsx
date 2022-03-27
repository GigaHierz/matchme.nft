import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { ethers } from 'ethers'
import { Button } from '@chakra-ui/react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

// import MatchMeNftFT from '../../artifacts/contracts/MatchMeNft.sol/MatchMeNft.json'

// let rpcEndpoint = null

// if (process.env.MORALIS_KEY) {
//   rpcEndpoint = process.env.MORALIS_KEY
// }
const Home: NextPage = () => {
  const [userState, setUserState] = useState<boolean>()
  // const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint)
  // const tokenContract = new ethers.Contract(
  //   '0x9F1Fca06405619692fa941b351d42342df496a26',
  //   MatchMeNftFT.abi,
  //   provider
  // )
  // const signer = provider.getSigner()
  // const price = ethers.utils.parseUnits('1', 'ethers')
  const mint = () => {
    console.log('promting the wallet')

    // tokenContract.safeMint(signer, { value: price })
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
        <h2>Find your Soulmate through Proof of Interest</h2>
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
          <Button onClick={mint}>Mint</Button>
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

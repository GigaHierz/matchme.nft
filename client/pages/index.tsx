import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { useWeb3React } from '@web3-react/core'

const Home: NextPage = () => {
  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,

    appName: 'Web3-react Demo',

    supportedChainIds: [1, 3, 4, 5, 42, 43114, 43113, 43112]
  })
  const {
    active,
    activate,
    deactivate,
    library,
    chainId,
    account
  } = useWeb3React()
  const activateWallet = (): void => {
    activate(CoinbaseWallet)
  }
  function getLayout (page: any) {
    return <Layout>{page}</Layout>
  }

  getLayout('')
  return (
    <div className={styles.container}>
      <button onClick={activateWallet}>Connect Wallet</button>
      <div>Connection Status: ${active}</div>
      <div>Account: ${account}</div>
      <div>Network ID: ${chainId}</div>
      <h3 className={styles.title}>MatchMe.Nft</h3>
      <span className={styles.intro}>loremipsum</span>
    </div>
  )
}

export default Home

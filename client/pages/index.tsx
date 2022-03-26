import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  function getLayout (page: any) {
    return <Layout>{page}</Layout>
  }

  getLayout('')
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>MatchMe.Nft</h3>
      <span className={styles.intro}>loremipsum</span>
    </div>
  )
}

export default Home

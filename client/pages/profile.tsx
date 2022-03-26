import styles from '../styles/Signup.module.scss'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'

function ListPage () {
  const [showNftState, setShowNftState] = useState<Boolean>()
  const [userNftlist, setUserNftList] = useState<number[]>()

  const loadNfts = () => {
    setShowNftState(true)
  }
  const addItem = (item: number): any => {
    userNftlist
      ? setUserNftList([...userNftlist, item])
      : setUserNftList([item])
  }

  return (
    <Layout>
      <div className={styles.content}>
        <button onClick={loadNfts}>Load my NFTs</button>
        {showNftState && (
          <div className={styles.nftList}>
            <span>Choose at least 5 Nfts</span>
            <div>
              <button className={styles.checkbox} onClick={addItem(1)}></button>
              <a href=''>
                <img src='' alt='' />
              </a>
            </div>
          </div>
        )}
        {/* Button to navigate - next.js and react functions for naivating */}
        {/* <Link href='/matchme' disabled={userNftlist.length > 6}>
          <a>Continue</a>
        </Link>{' '} */}
      </div>
    </Layout>
  )
}

export default ListPage

import styles from '../styles/Signup.module.scss'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

function ListPage () {
  const [showNftState, setShowNftState] = useState<Boolean>()
  const [userNftlist, setUserNftList] = useState<number[]>()

  const loadNfts = () => {
    // setShowNftState(true)
  }
  const addItem = (item: number): any => {
    userNftlist
      ? setUserNftList([...userNftlist, item])
      : setUserNftList([item])
  }

  return (
    <Layout>
      <div className={styles.content}>
        <Button onClick={loadNfts}>Load my NFTs</Button>
        {showNftState && (
          <div className={styles.nftList}>
            <span>Choose at least 5 Nfts</span>
            <div>
              <Button className={styles.checkbox} onClick={addItem(1)}></Button>
              <a href=''>
                <img src='' alt='' />
              </a>
            </div>
          </div>
        )}
        {/* Button to navigate - next.js and react functions for naivating "disabled=userNftlist.length > 6"*/}
        {/* <Link
          href='/matchme'
          className={ ? styles.disabled : null}
        >
          <a>Continue</a>
        </Link>{' '} */}
      </div>
    </Layout>
  )
}

export default ListPage

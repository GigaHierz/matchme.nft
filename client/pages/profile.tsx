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
            <div className={styles.grid}>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(1)}
                ></Button>
                <a href=''>
                  <img src='/images/1.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(2)}
                ></Button>
                <a href=''>
                  <img src='/images/2.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(3)}
                ></Button>
                <a href=''>
                  <img src='/images/3.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(4)}
                ></Button>
                <a href=''>
                  <img src='/images/4.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(5)}
                ></Button>
                <a href=''>
                  <img src='/images/5.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(6)}
                ></Button>
                <a href=''>
                  <img src='/images/6.png' alt='' />
                </a>
              </div>
              <div>
                <Button
                  className={styles.checkbox}
                  onClick={addItem(7)}
                ></Button>
                <a href=''>
                  <img src='/images/7.png' alt='' />
                </a>
              </div>
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

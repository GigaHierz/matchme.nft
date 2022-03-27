import styles from '../styles/Profile.module.scss'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

function ProfilePage () {
  const [showNftState, setShowNftState] = useState<Boolean>()
  const [userNftlist, setUserNftList] = useState<number[]>([])

  const addItem = (item: number): any => {
    console.log('hallo')
    console.log(item)

    setUserNftList([...userNftlist, item])
    // userNftlist?.length > 0
    //   ?
    //   : setUserNftList([item])
  }

  return (
    <Layout>
      <div className={styles.content}>
        <span>Choose at least 5 Nfts</span>
        <div className={styles.grid}>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(1) ? null : addItem(1)}
              disabled={userNftlist?.includes(1)}
            >
              add
            </Button>
            <br />
            <a href=''>
              <img src='/images/1.png' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(2) ? null : addItem(2)}
              disabled={userNftlist?.includes(2)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/2.png' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(3) ? null : addItem(3)}
              disabled={userNftlist?.includes(3)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/3.svg' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(4) ? null : addItem(4)}
              disabled={userNftlist?.includes(4)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/4.jpeg' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(5) ? null : addItem(5)}
              disabled={userNftlist?.includes(5)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/5.jpeg' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(6) ? null : addItem(6)}
              disabled={userNftlist?.includes(6)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/6.jpeg' alt='' />
            </a>
          </div>
          <div className={styles.image}>
            <Button
              className={styles.checkbox}
              onClick={userNftlist?.includes(7) ? null : addItem(7)}
              disabled={userNftlist?.includes(7)}
            >
              add
            </Button>
            <a href=''>
              <img src='/images/7.jpeg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <br />
      {/* Button to navigate - next.js and react functions for naivating "disabled=userNftlist.length > 6"*/}
      <span className={styles.button}>
        <Link href='/no-matches'>
          <a>Continue</a>
        </Link>{' '}
      </span>
    </Layout>
  )
}

export default ProfilePage

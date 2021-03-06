import styles from '../styles/NoMatches.module.scss'
import Layout from '../components/Layout'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

function ChatPage () {
  return (
    <Layout>
      <div className={styles.content}>
        <span>Oh no. No matches for you... Try again tomorrow. </span>
        <span className={styles.button}>
          <Link href='/matchme'>
            <a>Try again!</a>
          </Link>{' '}
        </span>{' '}
      </div>
    </Layout>
  )
}

export default ChatPage

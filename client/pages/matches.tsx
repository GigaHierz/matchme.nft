import styles from '../styles/Matches.module.scss'
import Layout from '../components/Layout'
import { Button } from '@chakra-ui/react'

function ChatPage () {
  return (
    <Layout>
      <div className={styles.content}>
        <span>You and the other person have 4 projects in common</span>
        <Button>Playyyyyy</Button>
        <Button>Reveal</Button>
        <Button>Unmatch</Button>
      </div>
    </Layout>
  )
}

export default ChatPage

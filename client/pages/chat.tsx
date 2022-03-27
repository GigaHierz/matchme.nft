import styles from '../styles/Chat.module.scss'
import Layout from '../components/Layout'
import { Button } from '@chakra-ui/react'

function ChatPage () {
  return (
    <Layout>
      <div className={styles.content}>
        <span>YOu and the other person hab 4 projects in common</span>
        <Button>Playyyyyy</Button>
        <Button>Reveal</Button>
        <Button>Unmatch</Button>
      </div>
    </Layout>
  )
}

export default ChatPage

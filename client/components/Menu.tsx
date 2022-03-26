import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Menu.module.scss'

export default function Menu () {
  const [showState, setShowState] = useState(false)

  const toggleButton = () => {
    setShowState(!showState)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/matchme'>
          <a>MatchMe</a>
        </Link>
        <Link href='/chat'>
          <a>Chats</a>
        </Link>
      </nav>
    </div>
  )
}

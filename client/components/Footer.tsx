import { StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Footer.module.scss'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <a href=''>Instgram</a>
      <a href=''>Twitter</a>
      <a href=''>Linkedin</a>
    </div>
  )
}

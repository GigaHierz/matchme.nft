import { StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Footer.module.scss'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <a href=''>Instagram</a>
      <a href=''>Twitter</a>
      <a href=''>Linkedin</a>
    </div>
  )
}

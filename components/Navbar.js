import { signOut } from 'next-auth/react'
import styles from '@/styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <button className={styles.signOut} onClick={signOut}>sign out</button>
    </nav>
  )
}
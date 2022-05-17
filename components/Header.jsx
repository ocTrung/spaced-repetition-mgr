import { signIn } from "next-auth/react"
import Link from 'next/link'
import styles from '@/styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.homeLink}>
          SRM
        </a>
      </Link>
      <button
        className={styles.loginBtn}
        onClick={() => signIn('google', {
          callbackUrl: '/'
        })}
      >
        Sign in with Google
      </button>
    </header>
  )
}
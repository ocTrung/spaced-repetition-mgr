import { signIn } from "next-auth/react"
import Link from 'next/link'
import styles from '@/styles/Header.module.scss'

export default function Header({ providers }) {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.homeLink}>
          SRM
        </a>
      </Link>
      {
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={styles.loginBtn}
              onClick={() => signIn(provider.id, {
                callbackUrl: '/'
              })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))
      }
    </header>
  )
}
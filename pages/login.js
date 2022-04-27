import { getProviders, signIn } from "next-auth/react"
import styles from '@/styles/Login.module.scss'
import { useRef, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'
import gradeSessionScreenShot from '../public/gradeSessionScreenShot.png'
import newIntervalScreenShot from '../public/newIntervalScreenShot.png'
import queueScreenShot from '../public/queueScreenShot.png'

export default function Login({ providers }) {
  const anchorRef = useRef()
  const learnMoreRef = useRef()

  useEffect(() => {
    anchorRef.current.addEventListener('click', (e) => {
      e.preventDefault()
      learnMoreRef.current.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>SPR</h1>
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
      <main className={styles.main}>
        <section className={styles.sectionIntro}>
          <h2 className={styles.introHeading}>A Spaced Repetition Manager</h2>
          <h3 className={styles.introSubheading}>
            Determines when you should <em className={styles.em}>review topics</em> then organizes
            your topics into a <em className={styles.em}>queue</em>
          </h3>
          <div className={styles.cta}>
            <a
              href='#learnMore'
              ref={anchorRef}
              className={styles.learnMoreBtn}
            >
              Learn more
            </a>
            <Link href='/demo'>
              <a className={styles.tryItBtn}>Try it out</a>
            </Link>
          </div>
        </section>

        <section id='learnMore' className={styles.sectionLearnMore} ref={learnMoreRef}>
          <h2>The Problem</h2>
          <p>✔️ Using spaced repetition when learning a single topic is fairly simple.</p>
          <p>❌ Using spaced repetition when learning multiple topics is hard.</p>
          <p className={styles.info}>Spaced repetition is a strategy for remembering what you learn by reviewing the topic at spaced intervals that gradually increase. </p>
          <a className={styles.wikiLink} href='https://en.wikipedia.org/wiki/Spaced_repetition'>Learn more about spaced repetition</a>
        </section>

        <section className={styles.sectionSolution}>
          <h2>The Solution and how it works</h2>
          <ol>
            <li className={styles.li}>
              <p className={styles.listText}>
                User reports how they performed in their last review session.
              </p>
              <br></br>
              <Image
                src={gradeSessionScreenShot}
                alt="Screen shot of user reporting review session grade"
                width="500px"
                height='500px'
              />
            </li>
            <li>
              <p className={styles.listText}>
                The app uses the reported input to determine how long the next interval should be (interval: time between reviewing a topic)
              </p>
              <br></br>
              <Image
                src={newIntervalScreenShot}
                alt="Screen shot of user reporting review session grade"
                width="500px"
                height='280px'
              />
            </li>
            <li>
              <p className={styles.listText}>
                The app reorganizes the queue, placing the most urgent topic to review at the top
              </p>
              <br></br>
              <Image
                src={queueScreenShot}
                alt="Screen shot of user reporting review session grade"
                width="500"
                height='500px'
              />
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
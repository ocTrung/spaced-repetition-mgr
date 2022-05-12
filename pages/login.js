import { getProviders } from 'next-auth/react'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Login.module.scss'
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
      <Header providers={providers} />

      <main className={styles.main}>
        <section className={styles.sectionIntro}>
          <h2 className={styles.introHeading}>A Spaced Repetition Manager</h2>
          <h3 className={styles.introSubheading}>
            A simple way to manage what you're learning and when it should be reviewed.
            The manager automatically determines when you should <em className={styles.em}>review topics</em> and organizes
            them into a <em className={styles.em}>queue</em>
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
              <a className={styles.tryItBtn}>Demo</a>
            </Link>
          </div>
        </section>

        <section id='learnMore' className={styles.sectionLearnMore} ref={learnMoreRef}>
          <div>
            <h2 className={styles.sectionHeading}>The Problem</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>We tend to forget the things we learn or read after a period of time.</li>
              <li className={styles.li}>We need to review the things we learn in order to commit them to memory.</li>
              <li className={styles.li}>Using spaced repetition when learning multiple topics becomes messy and difficult to manage.</li>
            </ul>
            <figure className={styles.figure}>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Ebbinghaus_Forgetting_Curve.jpg'
                alt='Screen shot of user reporting review session grade'
                width='641.6'
                height='351.2'
              />
              <figcaption className={styles.figcaption}>
                <strong>Forgetting Curve</strong>
                <br></br>
                <a href='https://commons.wikimedia.org/wiki/File:Ebbinghaus_Forgetting_Curve.jpg'>Nheise at English Wikibooks</a>, <a href='http://creativecommons.org/licenses/by-sa/3.0/'>CC BY-SA 3.0</a>, via Wikimedia Commons
              </figcaption>
            </figure>
          </div>
          <footer>
            <p className={styles.info}>Spaced repetition is a strategy for remembering what you learn by reviewing the topic at spaced intervals that gradually increase. </p>
            <a className={styles.wikiLink} href='https://en.wikipedia.org/wiki/Spaced_repetition'>Learn more about spaced repetition</a>
          </footer>
        </section>

        <section className={styles.sectionSolution}>
          <h2 className={styles.sectionHeading}>The Solution and how it works</h2>
          <ol>
            <li className={styles.li}>
              <p className={styles.listText}>
                User reports how they performed in their last review session.
              </p>
              <br></br>
              <Image
                src={gradeSessionScreenShot}
                alt='Screen shot of user reporting review session grade'
                width='500px'
                height='491.46px'
              />
            </li>
            <li className={styles.li}>
              <p className={styles.listText}>
                The app uses the reported input to determine how long the next interval should be (interval: time between reviewing a topic)
              </p>
              <br></br>
              <Image
                src={newIntervalScreenShot}
                alt='Screen shot of user reporting review session grade'
                width='500px'
                height='238.98px'
              />
            </li>
            <li className={styles.li}>
              <p className={styles.listText}>
                The app reorganizes the queue, placing the most urgent topic to review at the top
              </p>
              <br></br>
              <Image
                src={queueScreenShot}
                alt='Screen shot of user reporting review session grade'
                width='500'
                height='484.69'
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
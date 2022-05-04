import { useState, useRef, useEffect } from 'react'
import useReviewItems from 'hooks/useReviewItems'
import Modal from '@/components/Modal'
import ReviewItemCard from '@/components/ReviewItemCard'
import AddReviewItem from '@/components/AddReviewItem'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/Schedule.module.scss'

export function CardTray() {
  const { isLoading, isError, data, error } = useReviewItems()
  const reviewItems = data
  const schedule = reviewItems?.sort((a, b) => getNextReviewDate(a) - getNextReviewDate(b))

  if (isLoading)
    return 'Loading...'

  if (isError)
    return <span>Error: {error.message}</span>

  return (
    <div className={styles.cardTray}>
      {
        schedule.map((reviewItem, i) => (
          <ReviewItemCard key={reviewItem.id} reviewItem={reviewItem} index={i} />
        ))
      }
    </div>
  )
}

export default function Schedule() {
  const [showModal, setShowModal] = useState(false)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [showModal])

  const handleOverlayClick = () => {
    setShowModal(false)
  }

  const handleModalClick = () => {
    setShowModal(!showModal)
    console.log(inputRef.current)
  }

  return (
    <>
      <div className={styles.scheduleCard}>
        <header className={styles.header}>
          <h2 className={styles.scheduleTitle}>Review Scheduler</h2>
          <button className={styles.addItemBtn} onClick={handleModalClick}>
            <img src='/plus.svg' height='10' width='10'></img>
          </button>
        </header>
        <CardTray />
      </div>
      <Modal handleOverlayClick={handleOverlayClick} showModal={showModal}>
        <AddReviewItem ref={inputRef} setShowModal={setShowModal} />
      </Modal>
    </>


  )
} 
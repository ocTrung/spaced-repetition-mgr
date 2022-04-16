import styles from '@/styles/AddReviewItem.module.scss'
import { useScheduleContext } from '@/components/scheduleContext'
import { ReviewItem } from '@/utils/reviewItemUtils'
import { useState } from 'react'
import superjson from 'superjson'

export default function AddReviewItem() {
  const [schedule, setSchedule] = useScheduleContext()
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newReviewItem = new ReviewItem(title, new Date())
    setSchedule([...schedule, newReviewItem])
    setTitle('')

    addReviewItem(newReviewItem).then(res => console.log(res))
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add New Review Item</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.titleLabel} htmlFor="titleInput">
          add item
        </label>
        <input
          className={styles.input}
          id="titleInput"
          type='text'
          onChange={handleChange}
          value={title}
        />
        <button className={styles.submitBtn} type='submit'>add item</button>
      </form >
    </div>
  )
}

async function addReviewItem(newItem) {
  try {
    const res = await fetch('/api/reviewitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
  } catch (error) {
    console.log(error)
  }
}
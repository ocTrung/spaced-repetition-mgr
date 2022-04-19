import styles from '@/styles/AddReviewItem.module.scss'
import { ReviewItem } from '@/utils/reviewItemUtils'
import { useState } from 'react'
import useAddReviewItems from 'hooks/useAddReviewItems'


export default function AddReviewItem() {
  const [title, setTitle] = useState('')
  const mutation = useAddReviewItems()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewItem = new ReviewItem(title, new Date())
    mutation.mutate(newReviewItem)

    setTitle('')
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


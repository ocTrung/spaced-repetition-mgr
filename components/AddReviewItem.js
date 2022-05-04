import styles from '@/styles/AddReviewItem.module.scss'
import { ReviewItem } from '@/utils/reviewItemUtils'
import { useState, forwardRef } from 'react'
import useAddReviewItems from 'hooks/useAddReviewItems'


const AddReviewItem = ({ setShowModal }, ref) => {
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
      <button onClick={() => setShowModal(false)} className={styles.exitBtn}>
        <img className={styles.exit} src='/cross.svg' height='15' width='15'></img>
      </button>
      <h1 className={styles.heading}>Add New Review Item</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.titleLabel} htmlFor="titleInput">
          Title
        </label>
        <input
          className={styles.input}
          id="titleInput"
          type='text'
          onChange={handleChange}
          value={title}
          ref={ref}
        />
        <button className={styles.submitBtn} type='submit'>add item</button>
      </form >
    </div>
  )
}

export default forwardRef(AddReviewItem)


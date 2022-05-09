import styles from '@/styles/ItemPlaceholder.module.scss'

export default function ItemPlaceholder({ data }) {
  return (
    <>
      {
        data?.length === 0 &&
        <div className={styles.tipContainer}>
          <p className={styles.tip}>Click the green plus button to start tracking a new item.</p>
          <p><i>&quot;The more that you read, the more things you will know. The more that you learn, the more places you&#39;ll go.&quot;</i> &#45;Dr. Seuss</p>
        </div>
      }
    </>
  )
}
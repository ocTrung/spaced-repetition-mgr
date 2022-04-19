import styles from '@/styles/Modal.module.scss'

export default function Modal({ handleOverlayClick, showModal, children }) {
  return (
    <>
      <div
        className={showModal ? styles.showOverlay : styles.hideOverlay}
        onClick={handleOverlayClick}
      >
      </div>
      <div className={showModal ? styles.showModal : styles.hideModal}>
        {children}
      </div>
    </>
  )
}

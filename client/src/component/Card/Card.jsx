import PhoneSVG from '../../assets/phone.svg'
import EmailSVG from '../../assets/email.svg'
import styles from "./Card.module.css"
function Card({data, setData, setIsOpen}) {
  return (
    <div className={styles.card_container} onClick={() => {setIsOpen(true); setData(data)}}>
      <h2>{data.name}</h2>
      <div className={styles.card_text_container}>
        <img src={PhoneSVG} />
        <p className={styles.cart_text}>{data.phone}</p>
      </div>
      <div className={styles.card_text_container}>
        <img src={EmailSVG} />
        <p className={styles.cart_text}>{data.email}</p>
      </div>
    </div>
  )
}

export default Card

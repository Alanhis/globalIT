import React from "react";
import closeSVG from '../../assets/close.svg'
import styles from "./Modal.module.css";

function Modal({ data,setIsOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <h5 className={styles.heading}>{data.name}</h5>
            <img src={closeSVG} onClick={() => setIsOpen(false)} />
            
          </div>
          

          <div className={styles.modal_data_container}>
          <div className={styles.modal_data_info}>
            <p className={styles.title}> Телефон:</p>
            <p className={styles.title}> Почта:</p>
            <p className={styles.title}> Дата приема:</p>
            <p className={styles.title}> Должность:</p>
            <p className={styles.title}> Подразделение:</p>
            </div>
          <div className={styles.modal_data_info}>
            <p className={styles.info}>{data.phone}</p>
          <p className={styles.info}>{data.email}</p>
          <p className={styles.info}>{data.hire_date}</p>
          <p className={styles.info}>{data.position_name}</p>
          <p className={styles.info}>{data.department}</p></div>
          </div>
          <div>
            <h3>Дополнительная информация</h3>
            <p>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
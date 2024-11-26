import React from 'react';
import styles from './CardDetails.module.css';

const CardDetails: React.FC = () => {
    return (
        <div className={styles.cardDetails}>
            <h3 className={styles.title}>Реквізити для переказу</h3>
            <div className={styles.cardInfo}>
                <p><strong>Номер картки:</strong> <span className={styles.cardNumber}>4441 1110 5500 4315</span></p>

            </div>
            <div className={styles.cardInfo}>
                <hr/>
                <h3>Після оплати <a href="https://t.me/Oksana_Nevolina" target="_blank">напиши в Telegram</a>
            </h3>
            <h4>Ім'я та призвіще</h4>
            <h4>електрону адресу та/або номер телефону</h4>
                <h4>скрін оплати</h4>
                <hr/>
               <h3> Після чого тобі буде надатий доступ до курсу</h3>


            </div>
        </div>
    );
};

export {CardDetails};

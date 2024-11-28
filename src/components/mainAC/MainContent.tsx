import React from 'react';
import styles from './MainContent.module.css';
import {useNavigate} from "react-router-dom";

const MainContent: React.FC = () => {
    const navigate = useNavigate();


    const handleCardPayment = () => {
        navigate('/card');
    };

    return (
        <section className={styles.mainContent}>
            <div className={styles.leftSide}>
                <h3 className={styles.subheading}>Можливості <span>ActiveCampaign</span> :</h3>
                <hr/>
                <ul className={styles.results}>
                    <li>🔥 Створення та запус автоматичні розсилки</li>
                    <li>📈 Підвищення ефективності комунікації з клієнтами</li>
                    <li>🎯 Інтеграція ActiveCampaign з іншими платформами</li>
                    <li>💼 Оптимізація вашого бізнес та автоматизація рутинних процесів</li>
                    <li>🌐 Створення простих лендінгів та публікація їх в інтернеті</li>
                    <li>🚀 Покращення взаємодії з аудиторією для збільшення продажів</li>
                </ul>
            </div>

            <div className={styles.rightSide}>
                <h2 className={styles.heading}>Придбати курс за </h2>
                <p>799 грн</p>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => handleCardPayment()}>
                        Оплатити карткою
                    </button>
                </div>
                <p className={styles.purchaseText}>
                    Курс <strong>ActiveCampaign</strong> українською мовою містить теоретичний та практичний матеріал.
                    <br/>
                    <p>ДЛЯ САМОСТІЙНОГО ВИВЧЕННЯ</p>
                    <br/>
                    <strong>Навчайся коли зручно!</strong>
                </p>

            </div>
        </section>
    );
};

export { MainContent };



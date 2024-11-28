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
                <h3 className={styles.subheading}>Що ви зможете робити після курсу:</h3>
                <hr />
                <ul className={styles.results}>
                    <li>🔥 Створювати та запускати автоматичні розсилки</li>
                    <li>📈 Підвищити ефективність комунікації з клієнтами</li>
                    <li>🎯 Інтегрувати ActiveCampaign з іншими платформами</li>
                    <li>💼 Оптимізувати ваш бізнес та автоматизувати рутинні процеси</li>
                    <li>💰 Перетворити автоматизацію на фінансовий прибуток</li>
                    <li>🌐 Створювати прості лендінги та публікувати їх в інтернеті</li>
                    <li>🚀 Покращувати взаємодію з аудиторією для збільшення продажів</li>
                </ul>
            </div>

            <div className={styles.rightSide}>
                <h2 className={styles.heading}>Придбати курс за </h2>
                <p>799 грн</p>
                <p className={styles.purchaseText}>
                    Курс <strong>ActiveCampaign</strong> українською мовою містить теоретичний та практичний матеріал.
                    <br/>
                    <p>ДЛЯ САМОСТІЙНОГО ВИВЧЕННЯ</p>
                    <br/>
                    <strong>Навчайся коли зручно!</strong>
                </p>

                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => handleCardPayment()}>
                        Оплатити карткою
                    </button>
                </div>
            </div>
        </section>
    );
};

export { MainContent };



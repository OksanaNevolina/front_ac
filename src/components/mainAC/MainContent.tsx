import React from 'react';
import styles from './MainContent.module.css';
import {useNavigate} from "react-router-dom";


const MainContent: React.FC = () => {
    const navigate = useNavigate();


    const handleCardPayment = () => {
        navigate('/card');
    };


    const lookInterface = () => {
        navigate('/interfaceAC');
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
                <h5> Вивчай<strong>ActiveCampaign</strong> українською мовою</h5>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Огляд інтерфейсу ActiveCampaign
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                       Модуль  Contacts
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Automations
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Deals
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Website
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Reports
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Unlock Features
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Get Help
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Apps
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Модуль Settings
                    </button>
                </div>


            </div>
        </section>
    );
};

export {MainContent};



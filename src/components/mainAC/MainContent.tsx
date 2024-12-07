import React from 'react';
import styles from './MainContent.module.css';
import {useNavigate} from "react-router-dom";
import Automations from "../automations/Automations";
import Deals from "../deals/Deals";
import UnlockFeatures from "../unlockFeatures/UnlockFeatures";


const MainContent: React.FC = () => {
    const navigate = useNavigate();


    const handleCardPayment = () => {
        navigate('/card');
    };

    const lookInterface = () => {
        navigate('/interfaceAC');
    };
    const lookContacts = () => {
        navigate('/сontacts-menu');
    };
    const lookCampaigns = () => {
        navigate('/campaigns-menu');
    };
    const lookAutomations = () => {
        navigate('/automations-menu');
    };
    const lookDeals = () => {
        navigate('/deals-menu');
    };

    const lookWebsite = () => {
        navigate("/website-menu");
    };

    const lookReports = () => {
        navigate('/reports-menu');
    };

    const lookUnlockFeatures = () => {
        navigate('/unlockFeatures-menu');
    };


    const lookGetHelp = () => {
        navigate('/get-help-menu');
    };



    const lookApps = () => {
        navigate('/apps-menu');
    };




    const lookSettings = () => {
        navigate("/settings-menu");
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
                <h6> Вивчай <strong> ActiveCampaign</strong>
                    <hr/>
                    українською мовою</h6>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface ()}>
                        Огляд інтерфейсу ActiveCampaign
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookContacts ()}>
                        Contacts
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookCampaigns ()}>
                        Campaigns
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookAutomations ()}>
                        Automations
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookDeals ()}>
                        Deals
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookWebsite ()}>
                        Website
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookReports ()}>
                        Reports
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookUnlockFeatures()}>
                        Unlock Features
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookGetHelp ()}>
                        Get Help
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookApps ()}>
                        Apps
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookSettings ()}>
                        Settings
                    </button>
                </div>


            </div>
        </section>
    );
};

export {MainContent};



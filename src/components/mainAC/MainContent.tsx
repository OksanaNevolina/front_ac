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
                    <li>🔥 Створення та запуск автоматичних email-розсилок для ефективної комунікації.</li>
                    <li>📈 Відстеження поведінки клієнтів для персоналізації маркетингу.</li>
                    <li>🎯 Інтеграція ActiveCampaign із CRM, Google Sheets, Zapier та іншими платформами.</li>
                    <li>💼 Оптимізація бізнес-процесів завдяки автоматизації рутинних задач.</li>
                    <li>🌐 Створення простих лендінгів і веб-форм для залучення лідів.</li>
                    <li>🚀 Використання AI для прогнозування поведінки клієнтів і підвищення продажів.</li>
                    <li>🔍 Глибока аналітика кампаній, автоматизацій та угод для прийняття рішень.</li>
                    <li>💌 Використання SMS і чатів для розширення комунікаційних каналів.</li>
                    <li>🔗 Автоматична сегментація аудиторії на основі поведінкових даних і тегів.</li>
                    <li>📊 Звітність і прогнозування доходів, засноване на маркетингових активностях.</li>
                </ul>
            </div>

            <div className={styles.container}>
                <h1 className={styles.title}>ActiveCampaign: Всесвіт можливостей для бізнесу</h1>
                <p className={styles.description}>
                    ActiveCampaign — це не просто інструмент, це цілий всесвіт можливостей для автоматизації
                    комунікації, побудови персоналізованих ланцюгів листів, сегментації аудиторії та багато іншого.
                    Ця платформа вже завоювала популярність у всьому світі, і зараз стрімко набирає обертів в Україні.
                </p>
                <p className={styles.description}>
                    Чому? Тому що бізнесам потрібні ефективні рішення для оптимізації процесів та підвищення лояльності
                    клієнтів.
                </p>
                <p className={styles.highlight}>
                    Цей сайт створений для того, щоб зробити ActiveCampaign доступним і зрозумілим для українського
                    бізнесу.
                </p>
                <a
                    href="https://www.activecampaign.com/?_r=5VFCFKZZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.registerLink}
                >
                    Зареєструватися
                </a>
                <div className={styles.registrationSteps}>
                    <h2 className={styles.stepsTitle}>Як зареєструватися в ActiveCampaign</h2>
                    <ol className={styles.stepsList}>
                        <li>Натисніть кнопку зареєструватися</li>
                        <li>На сайті - натисніть на кнопку <strong>"Start free trial"</strong> (Почати безкоштовну пробну версію).
                        </li>
                        <li>Введіть свою електронну пошту та створіть пароль для облікового запису.</li>
                        <li>Заповніть потрібні дані.</li>
                        <li>
                            Після цього Вам буде надіслано підтвердження на електронну пошту для активації акаунту.
                        </li>
                    </ol>
                    <p className={styles.finalNote}>
                        Цей процес допоможе вам створити акаунт та почати використовувати можливості ActiveCampaign.
                    </p>
                </div>
            </div>

            <div className={styles.rightSide}>
                <h1 className={styles.title}>Вивчай українською ActiveCampaign</h1>

                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookInterface()}>
                        Огляд інтерфейсу ActiveCampaign
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookContacts()}>
                        Contacts
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookCampaigns()}>
                        Campaigns
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookAutomations()}>
                        Automations
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookDeals()}>
                        Deals
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookWebsite()}>
                        Website
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookReports()}>
                        Reports
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookUnlockFeatures()}>
                        Unlock Features
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookGetHelp()}>
                        Get Help
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookApps()}>
                        Apps
                    </button>
                </div>
                <div className={styles.paymentForm}>
                    <button className={styles.buyButton} onClick={() => lookSettings()}>
                        Settings
                    </button>
                </div>


            </div>
        </section>
    );
};

export {MainContent};



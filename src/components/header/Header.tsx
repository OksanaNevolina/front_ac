import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ActiveCampaign УКРАЇНСЬКОЮ МОВОЮ</div>
            <div className={styles.logo}>Платформа для автоматизації маркетингу</div>
            <p className={styles.infoText}>
                <span>ActiveCampaign</span> об'єднує інструменти автоматизації маркетингу, CRM, та конструктора сторінок
                в одну зручну платформу.
            </p>

            <nav>
                <ul className={styles.navMenu}>
                    <li>
                        <Link to="/activecampaign-page">Детально про <span>ActiveCampaign</span> </Link>
                    </li>
                    <li>
                        <a href="https://t.me/Oksana_Nevolina"target="_blank">Написати в Telegram</a>
                    </li>
                    <li>
                        <a href="https://www.activecampaign.com/?_r=5VFCFKZZ">Зареєтруватися в ActiveCampaign </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=3yLt42kjoDk&list=PL88T5vCK46X5yLV9PXiiGyAyEhZCwt3-d">Дивитися навчальні відео</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export {Header};

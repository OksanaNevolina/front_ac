import React from 'react';
import styles from './InterfaceACPage.module.css'
import dashboardImg from '../../assets/img/dashboard.png';
import {Link} from "react-router-dom";
import navigationData from '../../assets/data/navigationData.json';


const InterfaceACPage: React.FC = () => {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Детальний опис інтерфейсу ActiveCampaign на основі зображення:</h3>
            <img className={styles.moduleList} src={dashboardImg} alt="oгляд інтерфейсу"/>
            <div className={styles.moduleList}>
                <div className={styles.module}>
                    <h2 className={styles.moduleTitle}>Ліва панель навігації:</h2>
                    {
                        navigationData.leftPanel.map((item, index) => (
                            <p key={index} className={styles.moduleDescription}>
                                <strong>{item.title}</strong>
                                <hr/>
                                {item.description}
                            </p>
                        ))
                    }

                </div>
                <div className={styles.module}>
                    <h2 className={styles.moduleTitle}>Центральна панель:</h2>
                    {
                        navigationData.centerPanel.map((item, index) => (
                            <p key={index} className={styles.moduleDescription}>
                                <strong>{item.title}</strong>
                                <hr/>
                                {item.description}
                            </p>
                        ))
                    }

                </div>
                <div className={styles.module}>
                    <h2 className={styles.moduleTitle}>Правий верхній кут:</h2>
                    {
                        navigationData.topRightPanel.map((item, index) => (
                            <p key={index} className={styles.moduleDescription}>
                                <strong>{item.title}</strong>
                                <hr/>
                                {item.description}
                            </p>
                        ))
                    }

                </div>
                <div className={styles.module}>
                    <h2 className={styles.moduleTitle}>Чат підтримки (правий нижній кут):</h2>
                    <p className={styles.moduleDescription}>
                        {navigationData.bottomRightPanel.description}
                    </p>
                    ))

                </div>

            </div>
            <hr/>
            <h3 className={styles.title}>Більш детальна інформаці про кожен модуль:</h3>
            <nav>
                <ul className={styles.navMenu}>
                    <li>
                        <Link to="/сontacts-menu">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/campaigns-menu">Campaigns</Link>
                    </li>
                    <li>
                        <Link to="/automations-menu">Automations</Link>
                    </li>
                    <li>
                        <Link to="/deals-menu">Deals</Link>
                    </li>
                    <li>
                        <Link to="/website-menu">Website</Link>
                    </li>
                    <li>
                        <Link to="/reports-menu">Reports</Link>
                    </li>
                    <li>
                        <Link to="/unlock-features-menu">Unlock Features</Link>
                    </li>
                    <li>
                        <Link to="/get-help-menu">Get Help</Link>
                    </li>
                    <li>
                        <Link to="/apps-menu">Apps</Link>
                    </li>
                    <li>
                        <Link to="/settings-menu">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default InterfaceACPage;

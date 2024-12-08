import React from "react";
import styles from "./ContactsMenu.module.css";
import menuData from '../../assets/data/contactsMenu.json';
import {Link} from "react-router-dom";

const ContactsMenu: React.FC = () => {

    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.navMenu}>
                    <li>
                        <Link to="/сontacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-accounts">Accounts</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-lists">Lists</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-manage">Segments</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-tags">Tags</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-fields"> Fields </Link>
                    </li>
                    <li>
                        <Link to="/сontacts-manage-scoring ">Manage Scoring </Link>
                    </li>
                    <li>
                        <Link to="/сontacts-manage-exclusions">Manage Exclusions</Link>
                    </li>
                    <li>
                        <Link to="/сontacts-database-sync">Database Sync</Link>
                    </li>
                    <li>
                        <Link to="/settings-exports">Exports</Link>
                    </li>
                    <li>
                        <Link to="/settings-reports">Reports</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={styles.title}>Модуль Contacts в ActiveCampaign</h1>
            {menuData.map((item, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{item.title}</h2>
                    <h2 className={styles.sectionTitle}>{item.description}</h2>
                    <ul className={styles.description}>
                        {item.details.map((line, idx) => (
                            <li key={idx} className={styles.listItem}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <footer className={styles.footer}>
                Ці інструменти дозволяють ефективно управляти контактами, автоматизувати процеси та аналізувати
                результати взаємодії.
            </footer>
        </div>
    );
};

export default ContactsMenu;

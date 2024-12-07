import React from "react";
import styles from "./ContactsMenu.module.css";
import menuData from '../../assets/data/contactsMenu.json';

const ContactsMenu: React.FC = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Меню Contacts</h1>
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
                Ці інструменти дозволяють ефективно управляти контактами, автоматизувати процеси та аналізувати результати взаємодії.
            </footer>
        </div>
    );
};

export default ContactsMenu;

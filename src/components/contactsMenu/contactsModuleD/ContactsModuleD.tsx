import React from 'react';
import styles from './ContactsModuleD.module.css';
import data from '../../../assets/data/сontactsModuleD.json';

const ContactsModuleD: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.sections}>
                {data.sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <p className={styles.sectionDescription}>{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactsModuleD;

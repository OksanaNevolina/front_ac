import React from "react";
import websiteData from "../../assets/data/websiteData.json";
import styles from "./Website.module.css";

const Website: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Website в ActiveCampaign</h1>
            {websiteData.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    <ul className={styles.description}>
                        {section.description.map((line, idx) => (
                            <li key={idx} className={styles.listItem}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Website;

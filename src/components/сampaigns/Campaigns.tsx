import React from "react";
import campaignsData from '../../assets/data/campaignsData.json';
import styles from "./Campaigns.module.css";

const Campaigns: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Campaigns в ActiveCampaign</h1>
            {campaignsData.map((section, index) => (
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

export {Campaigns};

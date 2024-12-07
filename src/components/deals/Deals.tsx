import React from "react";
import dealsData from "../../assets/data/dealsData.json";
import styles from "./Deals.module.css";

const Deals: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Deals в ActiveCampaign</h1>
            {dealsData.map((section, index) => (
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

export default Deals;

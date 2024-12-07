import React from "react";
import reportsData from "../../assets/data/reportsData.json";
import styles from "./Reports.module.css";

const Reports: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Reports в ActiveCampaign</h1>
            {reportsData.map((section, index) => (
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

export default Reports;

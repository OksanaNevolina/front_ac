import React from "react";
import automationsData from "../../assets/data/automationsData.json";
import styles from "./Automations.module.css";

const Automations: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Automations в ActiveCampaign</h1>
            {automationsData.map((section, index) => (
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

export default Automations;

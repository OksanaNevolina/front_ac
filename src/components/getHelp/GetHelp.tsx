import React from "react";
import getHelpData from "../../assets/data/getHelpData.json";
import styles from "./GetHelp.module.css";

const GetHelp: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Модуль Get Help в ActiveCampaign</h1>
            {getHelpData.map((section, index) => (
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

export default GetHelp;

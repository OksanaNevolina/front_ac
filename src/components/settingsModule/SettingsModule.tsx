import React from "react";
import data from "../../assets/data/settingsModule.json";
import styles from "./SettingsModule.module.css";

const SettingsModule: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.sections}>
                {data.sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <ul className={styles.descriptionList}>
                            {section.description.map((desc, idx) => (
                                <li key={idx} className={styles.listItem}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsModule;

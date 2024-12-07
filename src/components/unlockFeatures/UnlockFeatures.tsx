import React from "react";
import data from "../../assets/data/unlockFeatures.json";
import styles from "./UnlockFeatures.module.css";

const UnlockFeatures: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Unlock Features в ActiveCampaign</h1>
            {data.map((feature, index) => (
                <div key={index} className={styles.featureSection}>
                    <h2 className={styles.featureTitle}>{feature.title}</h2>
                    <ul className={styles.featureList}>
                        {feature.description.map((item, idx) => (
                            <li key={idx} className={styles.featureItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UnlockFeatures;

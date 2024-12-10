import React from "react";
import styles from "./Reports.module.css";
import data from "../../../assets/data/reports.json";

const Reports: React.FC = () => {
    return (
        <div className={styles.container}>
            {data.modules.map((module, index: number) => (
                <div key={index} className={styles.card}>
                    <h2 className={styles.title}>{module.name}</h2>
                    <p className={styles.description}>{module.description}</p>

                    {module.useCases && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Випадки використання:</h3>
                            <ul className={styles.list}>
                                {module.useCases.map((useCase, idx) => (
                                    <li key={idx} className={styles.listItem}>
                                        {useCase}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {module.features && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Особливості:</h3>
                            <ul className={styles.list}>
                                {module.features.map((feature, idx) => (
                                    <li key={idx} className={styles.listItem}>
                                        <strong>{feature.name}:</strong>
                                        <ul className={styles.subList}>
                                            {feature.details.map((detail, detailIdx) => (
                                                <li key={detailIdx} className={styles.subListItem}>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {module.benefits && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Переваги:</h3>
                            <ul className={styles.list}>
                                {module.benefits.map((benefit, idx) => (
                                    <li key={idx} className={styles.listItem}>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Reports;

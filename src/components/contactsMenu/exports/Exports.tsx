import React from "react";
import styles from "./Exports.module.css";
import data from "../../../assets/data/exports.json";

type Feature = {
    name: string;
    details: string[];
};

type Module = {
    name: string;
    description: string;
    useCases?: string[];
    features?: Feature[];
    benefits?: string[];
};

const Modules: React.FC = () => {
    return (
        <div className={styles.container}>
            {data.modules.map((module: Module, index: number) => (
                <div key={index} className={styles.card}>
                    <h2 className={styles.title}>{module.name}</h2>
                    <p className={styles.description}>{module.description}</p>

                    {module.useCases && module.useCases.length > 0 && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Випадки використання:</h3>
                            <ul className={styles.list}>
                                {module.useCases.map((useCase, idx) => (
                                    <li key={idx} className={styles.listItem}>{useCase}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {module.features && module.features.length > 0 && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Особливості:</h3>
                            <ul className={styles.list}>
                                {module.features.map((feature, idx) => (
                                    <li key={idx} className={styles.listItem}>
                                        <strong>{feature.name}:</strong>
                                        <ul className={styles.subList}>
                                            {feature.details.map((detail, detailIdx) => (
                                                <li key={detailIdx} className={styles.subListItem}>{detail}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {module.benefits && module.benefits.length > 0 && (
                        <div className={styles.section}>
                            <h3 className={styles.subtitle}>Переваги:</h3>
                            <ul className={styles.list}>
                                {module.benefits.map((benefit, idx) => (
                                    <li key={idx} className={styles.listItem}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Modules;

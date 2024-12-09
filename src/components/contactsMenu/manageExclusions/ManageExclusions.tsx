import React from "react";
import data from "../../../assets/data/manageExclusions.json";
import styles from "./ManageExclusions.module.css";

const ManageExclusions: React.FC = () => {
    return (
        <div className={styles.exclusionsContainer}>
            <header className={styles.exclusionsHeader}>
                <h2>{data.overview.title}</h2>
                <p>{data.overview.description}</p>
            </header>

            <section className={styles.featuresSection}>
                <h4>Основний функціонал</h4>
                {data.features.map((feature, index) => (
                    <div className={styles.featureCard} key={index}>
                        <h5>{feature.title}</h5>
                        <p>{feature.description}</p>
                        {feature.steps && (
                            <ul>
                                {feature.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ul>
                        )}
                        {feature.actions && (
                            <ul>
                                {feature.actions.map((action, i) => (
                                    <li key={i}>{action}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section className={styles.usageSection}>
                <h4>Як працювати з модулем?</h4>
                {data.usage.map((usage, index) => (
                    <div className={styles.usageCard} key={index}>
                        <h3>{usage.title}</h3>
                        <p>{usage.description}</p>
                        {usage.steps && (
                            <ul>
                                {usage.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section className={styles.benefitsSection}>
                <h4>Переваги модуля</h4>
                <ul>
                    {data.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ManageExclusions;


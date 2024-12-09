import React from 'react';
import data from "../../../assets/data/databaseSync.json";
import styles from './DatabaseSync.module.css';

const DatabaseSync = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{data.overview.title}</h1>
                <p>{data.overview.description}</p>
            </header>

            <section className={styles.featuresSection}>
                <h4>Основний функціонал</h4>
                {data.features.map((feature: any, index: number) => (
                    <div className={styles.featureCard} key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        {feature.steps.length > 0 && (
                            <ul>
                                {feature.steps.map((step: string, i: number) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section className={styles.benefitsSection}>
                <h4>Переваги</h4>
                <ul>
                    {data.benefits.map((benefit: string, index: number) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default DatabaseSync;

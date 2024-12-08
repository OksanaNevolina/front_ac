import React from 'react';
import styles from './Tags.module.css';
import data from '../../../assets/data/tags.json';

const Tags: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Основні функції:</h2>
                {data.features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        {feature.steps ? (
                            <ol className={styles.steps}>
                                {feature.steps.map((step, idx) => (
                                    <li key={idx} className={styles.stepItem}>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        ) : feature.options ? (
                            <ul className={styles.options}>
                                {feature.options.map((option, idx) => (
                                    <li key={idx} className={styles.optionItem}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.featureDescription}>{feature.description}</p>
                        )}
                    </div>
                ))}
            </section>

            <section className={styles.benefits}>
                <h2 className={styles.sectionTitle}>Переваги:</h2>
                <ul>
                    {data.benefits.map((benefit, index) => (
                        <li key={index} className={styles.benefitItem}>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Tags;

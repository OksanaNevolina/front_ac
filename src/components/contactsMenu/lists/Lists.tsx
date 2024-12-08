import React from 'react';
import styles from './Lists.module.css';
import data from '../../../assets/data/lists.json';

const Lists: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <ul className={styles.featureList}>
                {data.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </li>
                ))}
            </ul>
            <div className={styles.examples}>
                <h2 className={styles.examplesTitle}>Приклади використання:</h2>
                <ul>
                    {data.examples.map((example, index) => (
                        <li key={index} className={styles.exampleItem}>
                            <strong>{example.title}:</strong> {example.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Lists;

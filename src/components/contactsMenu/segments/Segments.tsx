import React from 'react';
import styles from './Segments.module.css';
import data from '../../../assets/data/segments.json';

const Segments: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Основні функції:</h2>
                <ul>
                    {data.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                            <strong>{feature.title}:</strong> {feature.description}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.tableSection}>
                <h2 className={styles.sectionTitle}>Таблиця сегментів:</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        {data.columns.map((column, index) => (
                            <th key={index} className={styles.tableHeader}>
                                {column}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Welcome New Subscribers</td>
                        <td>100</td>
                        <td>120</td>
                        <td>2023-12-01</td>
                        <td>2023-12-01</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section className={styles.examples}>
                <h2 className={styles.sectionTitle}>Приклади сегментів:</h2>
                <ul>
                    {data.examples.map((example, index) => (
                        <li key={index} className={styles.exampleItem}>
                            <strong>{example.title}:</strong> {example.description}
                        </li>
                    ))}
                </ul>
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

export default Segments;

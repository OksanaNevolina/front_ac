import React from 'react';
import styles from './Fields.module.css';
import data from '../../../assets/data/fields.json';

const Fields: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>

            {data.sections.map((section, index) => (
                <section key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {section.items.map((item, idx) => (
                        <div key={idx} className={styles.item}>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDescription}>{item.description}</p>
                            {item.details && (
                                <ul className={styles.detailsList}>
                                    {item.details.map((detail, i) => (
                                        <li key={i} className={styles.detailItem}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            ))}
        </div>
    );
};

export default Fields;

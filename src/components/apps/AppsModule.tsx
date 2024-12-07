import React from "react";
import data from "../../assets/data/appsModule.json";
import styles from "./AppsModule.module.css";

const AppsModule: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            {data.sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {section.items && (
                        <ul className={styles.itemsList}>
                            {section.items.map((item, idx) => (
                                <li key={idx} className={styles.item}>
                                    <h3 className={styles.itemTitle}>{item.name}</h3>
                                    <ul className={styles.itemDescription}>
                                        {item.description.map((desc, id) => (
                                            <li key={id}>{desc}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                    {section.categories && (
                        <ul className={styles.categoriesList}>
                            {section.categories.map((category, catIdx) => (
                                <li key={catIdx} className={styles.category}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AppsModule;

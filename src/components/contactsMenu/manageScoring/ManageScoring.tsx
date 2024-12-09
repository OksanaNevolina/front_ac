import React from 'react';
import data from '../../../assets/data/scoringRules.json';
import styles from './ManageScoring.module.css';

const ManageScoring = () => {
    const { overview, features, scoringTypes, rulePanel, instructions, benefits } = data;

    return (
        <div className={styles.container}>
            {/* Overview Section */}
            <section className={styles.overview}>
                <h1>{overview.title}</h1>
                <p>{overview.description}</p>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <h2>Особливості</h2>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        {feature.steps && (
                            <ul>
                                {feature.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                ))}
                            </ul>
                        )}
                        {feature.types && (
                            <div className={styles.types}>
                                {feature.types.map((type, typeIndex) => (
                                    <div key={typeIndex} className={styles.type}>
                                        <h4>{type.name}</h4>
                                        <p>{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* Scoring Types Section */}
            <section className={styles.scoringTypes}>
                <h2>Типи оцінювання</h2>
                {scoringTypes.map((type, index) => (
                    <div key={index} className={styles.scoringType}>
                        <h3>{type.name}</h3>
                        <p>{type.description}</p>
                        {type.examples && (
                            <ul>
                                {type.examples.map((example, exampleIndex) => (
                                    <li key={exampleIndex}>{example}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            {/* Rule Panel Section */}
            <section className={styles.rulePanel}>
                <h2>Панель правил</h2>
                {rulePanel.map((panelItem, index) => (
                    <div key={index} className={styles.panelItem}>
                        <h3>{panelItem.field}</h3>
                        <p>{panelItem.description}</p>
                    </div>
                ))}
            </section>

            {/* Instructions Section */}
            <section className={styles.instructions}>
                <h2>Інструкції</h2>
                {Object.entries(instructions).map(([key, instruction], index) => (
                    <div key={index} className={styles.instruction}>
                        <h3>{instruction.title}</h3>
                        <ul>
                            {instruction.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Benefits Section */}
            <section className={styles.benefits}>
                <h2>Переваги</h2>
                <ul>
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ManageScoring;

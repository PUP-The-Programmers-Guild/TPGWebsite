import React from 'react';
import styles from './Hero.module.css';

const HeroSteps: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ca}></div>
        <div className={styles.cb}></div>
        <div className={styles.cc}></div>
        <div className={styles.arrowline}>
            <svg width="730" height="200" style={{ display: 'inline-block' }}>
                <marker id="arrowhead" 
                viewBox="0 0 10 10" 
                refX="5" 
                refY="5"
                markerWidth="6" 
                markerHeight="6" 
                orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                </marker>

                <path d="M 450 130 Q 540 10 630 10" 
                stroke="black" 
                stroke-width="2" 
                fill="none" 
                stroke-dasharray="20 9" 
                marker-end="url(#arrowhead)"/>
            </svg>

            <svg width="2000" height="200" style={{ display: 'inline-block' }}>
                <path d="M 800 10 Q 1000 90 1100 90" 
                stroke="red" 
                stroke-width="2" 
                fill="none" 
                stroke-dasharray="20 9" 
                marker-end="url(#arrowhead)"/>
            </svg>
        </div>
    </div>
  );
};

export default HeroSteps;

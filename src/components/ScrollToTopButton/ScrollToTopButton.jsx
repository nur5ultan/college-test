import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
        className={`${styles.btn} ${visible ? styles.show : ''}`}
        onClick={handleClick}
        aria-label="Наверх"
        >
        ↑
        </button>
    );
}

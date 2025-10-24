import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './DirectorProfile.module.css';

export default function DirectorProfile(){
  const { t } = useTranslation();
  const [closed, setClosed] = useState(false);
  const [visible, setVisible] = useState(true);


  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setClosed(true);
    }, 320);
  };

  if(closed) return null;

  return (
    <aside className={`${styles.widget} ${visible ? styles.show : styles.hide}`} aria-label={t('director.widget_label','Блог директора')}>
      <button className={styles.close} onClick={handleClose} aria-label={t('director.close','Закрыть')}>×</button>
      <div className={styles.inner}>
        <div className={styles.avatarWrap}>
          <img src="/images/director.jpg" alt={t('director.photo_alt','Директор колледжа')} className={styles.avatar} />
        </div>
        <h3 className={styles.name}>{t('director.name','ФИО Директора')}</h3>
        <p className={styles.position}>{t('director.position','Директор Карагандинского высшего политехнического колледжа')}</p>

        <div className={styles.contacts}>
          <a href="tel:+77000000000">+7 (700) 000-00-00</a>
          <a href="mailto:director@college.kz">director@college.kz</a>
        </div>

        <div className={styles.actions}>
          <Link to="/director" className={styles.more}>{t('director.read_more','Читать блог')}</Link>
        </div>
      </div>
    </aside>
  );
}

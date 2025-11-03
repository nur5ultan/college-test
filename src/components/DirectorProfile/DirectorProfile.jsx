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
          <img src="/images/director.png" alt={t('director.photo_alt')} className={styles.avatar} />
        </div>
        <h3 className={styles.name}>{t('directorblog.name')}</h3>
        <p className={styles.position}>{t('directorblog.position')}</p>

        <div className={styles.contacts}>
          <p>{t('directorblog.contact')}</p>
          <p>{t('directorblog.email')}</p>
        </div>

        <div className={styles.actions}>
          <Link to="/director" className={styles.more}>{t('directorblog.read_more')}</Link>
        </div>
      </div>
    </aside>
  );
}

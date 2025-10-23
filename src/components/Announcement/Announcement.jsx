import styles from './Announcement.module.css';
import { useTranslation } from 'react-i18next';

export default function Announcement({ item }){
  const { t } = useTranslation();
  if(!item) return null;
  const { title, date, excerpt, image } = item;
  return (
    <article className={styles.card}>
      <div className={styles.media} style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
        <div className={styles.overlay} />
        <div className={styles.date}>📅 {date}</div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <button className={styles.more} type="button">{t('announcement.more','подробнее →')}</button>
      </div>
    </article>
  );
}

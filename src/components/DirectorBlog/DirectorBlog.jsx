import styles from './DirectorBlog.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function DirectorBlog(){
    const { t } = useTranslation();
    return(
        <aside className={styles.profile}>
            <div className={styles.avatarWrap}>
              <img className={styles.avatar} src="/images/director.png" alt="Директор колледжа" />
            </div>
            <h2 className={styles.name}>{t('directorblog.title')}</h2>
            <p className={styles.position}>{t('directorblog.subtitle')}</p>

            <div className={styles.contacts}>
              {/* <p>{t('directorblog.contact')}</p>
              <p>{t('directorblog.email')}</p> */}
              <Link to="/director">{t('directorblog.title')}</Link>
            </div>
        </aside>
    )
}
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer(){
    const { t } = useTranslation();
    return (
        <div>
            <div className={styles.footerSeparator}>
                <div className={styles.footer1}>
                    <h1>{t('footer.useful','Полезные ссылки')}</h1>
                    <Link to="/contacts">{t('menu.contacts','Контакты')}</Link>
                    <Link to="/specialties">{t('menu.spec','Специальности')}</Link>
                    <Link to="/departments">{t('footer.departments','Отделения')}</Link>
                    <Link to="/accessibility">{t('footer.screen_reader','Экранный диктор')}</Link>
                </div>

                <div className={styles.footer2}>
                    <h1>{t('footer.admission','Поступление')}</h1>
                    <Link to="/admission">{t('footer.rules','Правила приема')}</Link>
                    <Link to="/tuition">{t('footer.cost','Стоимость обучения')}</Link>
                    <Link to="/director">{t('director.title','Блог директора')}</Link>
                    <Link to="/faq">{t('footer.faq','Вопрос-ответ')}</Link >
                </div>
                </div>

                <footer>
                    <img src="/images/logo.png" className={styles.footerLogo} alt={t('footer.logo_alt','Логотип')} />
                    <p className={styles.footerP}>{t('footer.college_name','Мангыстауский колледж туризма')}</p>
                    <p className={styles.footerRight}>{t('footer.copyright','© {{year}}', { year: new Date().getFullYear() })}</p>
                </footer>
        </div>
    );
}
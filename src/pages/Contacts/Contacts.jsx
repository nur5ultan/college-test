import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import styles from './Contacts.module.css';

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('students.title','Контакты')}</h1>
                    <p className={styles.subtitle}>{t('students.subtitle','Свяжитесь с нами для получения дополнительной информации')}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

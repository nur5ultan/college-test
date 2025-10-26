import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Teachers.module.css';
export default function Teachers() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
             <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('students.title','Абитуриентам')}</h1>
                    <p className={styles.subtitle}>{t('students.subtitle','Информация для aбитуриентов')}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
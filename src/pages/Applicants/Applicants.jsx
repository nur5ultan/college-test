import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from './Applicants.module.css';
import { useTranslation } from "react-i18next";

export default function Applicants() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
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

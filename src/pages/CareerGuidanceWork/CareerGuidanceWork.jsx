import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './CareerGuidanceWork.module.css';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
export default function CareerGuidanceWork() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('menu.careerguidancework', 'Проф ориентированная работа')}</h1>
                </div>
            </div>
            <div className={styles.container}>
                <p>{t('menu.careerguidancework', 'Проф ориентированная работа')}</p>
                <iframe
                    src="https://drive.google.com/file/d/1OfCu7I3wgoBV2KqJO8ZL2BqwtZnCgYI1/preview"
                    title={t('menu.careerguidancework', 'Проф ориентированная работа')}
                    width="900"
                    height="600"
                    frameBorder="0"
                ></iframe>
            </div>
            <Footer />
        </div>
    )
}
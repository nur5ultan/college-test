import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './SpecialtyDetail.module.css';

export default function SpecialtyDetail() {
    const { id } = useParams();
    const { t } = useTranslation();

    // Проверяем существование специальности
    const specialtyExists = ['s1', 's2', 's3', 's4', 's5'].includes(id);
    
    if (!specialtyExists) {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    <h1>{t('specialties.detail.not_found')}</h1>
                    <Link to="/specialties">{t('specialties.detail.back_to_list')}</Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Получаем данные специальности из переводов
    const specialty = {
        title: t(`specialties.items.${id}.title`),
        description: t(`specialties.detail.${id}.description`),
        qualification: t(`specialties.detail.${id}.qualification`),
        duration: t(`specialties.detail.${id}.duration`),
        subjects: t(`specialties.detail.${id}.subjects`, { returnObjects: true })
    };

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{specialty.title}</h1>
                    <p className={styles.subtitle}>{t('specialties.detail.subtitle')}</p>
                </div>
            </div>

            <main className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to="/" className={styles.breadcrumb}>{t('nav.home', 'Главная')}</Link>
                    <span className={styles.breadcrumbSeparator}>→</span>
                    <Link to="/specialties" className={styles.breadcrumb}>{t('nav.specialties', 'Специальности')}</Link>
                    <span className={styles.breadcrumbSeparator}>→</span>
                    <span className={styles.breadcrumbCurrent}>{specialty.title}</span>
                </div>

                <section className={styles.content}>
                    <div className={styles.description}>
                        <h2 className={styles.sectionTitle}>{t('specialties.detail.about')}</h2>
                        <p className={styles.descriptionText}>{specialty.description}</p>
                        
                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>🎓</div>
                                <div className={styles.infoContent}>
                                    <h3 className={styles.infoTitle}>{t('specialties.detail.duration_label')}</h3>
                                    <p className={styles.infoValue}>{specialty.duration}</p>
                                </div>
                            </div>
                            
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📜</div>
                                <div className={styles.infoContent}>
                                    <h3 className={styles.infoTitle}>{t('specialties.detail.qualification_label')}</h3>
                                    <p className={styles.infoValue}>{specialty.qualification}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.subjects}>
                        <h2 className={styles.sectionTitle}>{t('specialties.detail.subjects')}</h2>
                        <ul className={styles.subjectsList}>
                            {specialty.subjects && specialty.subjects.map((subject, index) => (
                                <li key={index} className={styles.subjectItem}>{subject}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Link to="/applicants" className={styles.applyBtn}>
                            {t('specialties.detail.apply')}
                        </Link>
                        <Link to="/specialties" className={styles.backBtn}>
                            {t('specialties.detail.back_to_list')}
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
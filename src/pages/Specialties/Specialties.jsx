import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import styles from './Specialties.module.css';
import { useTranslation } from 'react-i18next';
export default function Specialties() {

    const { t } = useTranslation();
    const specialtiesIds = ['s1','s2','s3','s4','s5'];

     const specialties = specialtiesIds.map(id => ({
        id,
        title: t(`specialties.items.${id}.title`),
        desc: t(`specialties.items.${id}.desc`),
        icon: `/images/${id === 's1' ? 'hotel' : id === 's2' ? 'eat' : id === 's3' ? 'tourism' : id === 's4' ? 'translate' : 'marketing'}.png`
    }));
    return (
        <div className={styles.container}>
            <Header />
                <div className={styles.directorBlog}>
                    <DirectorBlog />
                </div>
                <div className={styles.header}>
                    <div className={styles.headerInner}>
                        <h1 className={styles.title}>{t('students.title','Специальности')}</h1>
                        <p className={styles.subtitle}>{t('students.subtitle','Информация для студентов')}</p>
                    </div>
                </div>
            <section className={styles.section} aria-label={t('specialties.section_label','Специальности')}>
            <h3 className={styles.subheading}>{t('specialties.college','Мангистауский колледж туризма')}</h3>

            <div className={styles.grid}>
                {specialties.map(s => (
                    <article key={s.id} className={styles.card}>
                        <img src={s.icon} alt={t(`specialties.items.${s.id}.title`)} className={styles.cardIcon} />
                        <h4 className={styles.cardTitle}>{s.title}</h4>
                        <p className={styles.cardDesc}>{s.desc}</p>
                        <Link to={`/specialties/${s.id}`} className={styles.cardMore}>{t('specialties.more','Подробнее')}</Link>
                    </article>
                ))}
            </div>
        </section>

            <Footer />
        </div>
    );
}

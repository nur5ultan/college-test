import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderSpecialties.module.css';
import { useTranslation } from 'react-i18next';

const specialtiesIds = ['s1','s2','s3','s4','s5'];

export default function SliderSpecialties() {
    const { t } = useTranslation();

    const specialties = specialtiesIds.map(id => ({
        id,
        title: t(`specialties.items.${id}.title`),
        desc: t(`specialties.items.${id}.desc`),
        icon: `/images/${id === 's1' ? 'hotel' : id === 's2' ? 'eat' : id === 's3' ? 'tourism' : id === 's4' ? 'translate' : 'marketing'}.png`
    }));

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow ariaLabel={t('specialties.next','Следующий')} />,
        prevArrow: <PrevArrow ariaLabel={t('specialties.prev','Предыдущий')} />,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 720, settings: { slidesToShow: 1 } },
        ],
    };

    function PrevArrow(props){
        const { onClick, ariaLabel } = props;
        return (
            <button aria-label={ariaLabel || t('specialties.prev','Предыдущий')} className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#5b3b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
        );
    }

    function NextArrow(props){
        const { onClick, ariaLabel } = props;
        return (
            <button aria-label={ariaLabel || t('specialties.next','Следующий')} className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#5b3b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
        );
    }

    return (
        <section className={styles.section} aria-label={t('specialties.section_label','Специальности')}>
            <h2 className={styles.heading}>{t('specialties.title','Специальности')}</h2>
            <h3 className={styles.subheading}>{t('specialties.college','Мангистауский колледж туризма')}</h3>
            <Slider {...settings} className={styles.slider}>
                {specialties.map(s => (
                    <div key={s.id} className={styles.slide}>
                        <div className={styles.card}>
                            <div className={styles.cardMain}>
                                <img src={s.icon} alt="" className={styles.icon} />
                                <div className={styles.cardTitle}>{s.title}</div>
                            </div>

                            <div className={styles.cardOverlay}>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <button className={styles.cardBtn} type="button">{t('specialties.more_btn','Подробнее')}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
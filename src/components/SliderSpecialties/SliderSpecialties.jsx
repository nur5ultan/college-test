import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderSpecialties.module.css';

const specialties = [
    { id: 's1', title: 'Сварочное дело', desc: 'Подготовка специалистов по сварочным технологиям и металлообработке.' , icon: '/images/student-icon.png' },
    { id: 's2', title: 'Организация дорожного движения', desc: 'Обучение организации и обеспечению безопасности дорожного движения.' , icon: '/images/building-icon.png' },
    { id: 's3', title: 'Подземная разработка месторождений', desc: 'Специальность по горно-разведочным и горно-добывающим работам.' , icon: '/images/teacher-icon.png' },
    { id: 's4', title: 'Электрооборудование электрических станций', desc: 'Подготовка специалистов по обслуживанию электроустановок.' , icon: '/images/dorm-icon.png' },
    { id: 's5', title: 'Техническое обслуживание и ремонт', desc: 'Ремонт и обслуживание горного и электромеханического оборудования.' , icon: '/images/student-icon.png' },
    { id: 's6', title: 'Теплоэнергетические установки', desc: 'Обучение по эксплуатации тепловых и энергетических установок.' , icon: '/images/building-icon.png' },
];

export default function SliderSpecialties() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 720, settings: { slidesToShow: 1 } },
        ],
    };

            function PrevArrow(props){
                const { onClick } = props;
            return (
                <button aria-label="Предыдущий" className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#5b3b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            );
        }

            function NextArrow(props){
                const { onClick } = props;
            return (
                <button aria-label="Следующий" className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#5b3b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            );
        }

    return (
        <section className={styles.section} aria-label="Специальности">
            <h2 className={styles.heading}>Специальности</h2>
            <h2 className={styles.heading}>Мангыстауского колледж туризма</h2>
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
                                <button className={styles.cardBtn} type="button">Подробнее</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
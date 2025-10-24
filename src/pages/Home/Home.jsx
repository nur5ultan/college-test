import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Header from "../../components/Header/Header";
import styles from './Home.module.css';
import Stats from '../../components/Stats/Stats';
import SliderSpecialties from "../../components/SliderSpecialties/SliderSpecialties";
import AnnouncementsList from '../../components/Announcement/AnnouncementsList';
import Footer from "../../components/Footer/Footer";


const videos = ['/video/background.mp4',]

export default function Home(){
  const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(i => (i + 1) % videos.length);
        }, 8000); 
        return () => clearInterval(id);
    }, []);

    return (
      <div>
        <Header />

        <section className={styles.hero}>
          <video
            key={videos[index]}
            autoPlay
            muted
            loop
            playsInline
            className={styles.videoBackground}
          >
            <source src={videos[index]} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>

          <div className={styles.heroContent}>
            <h1 className={styles.h1}>{t('home.title','Официальный сайт')}</h1> <br></br>
            <h2 className={styles.h2}>{t('home.name','Мангыстауский колледж туризма')}</h2>
            <a
              className={styles.videoButton}
              href="https://youtu.be/AnGRgWeVNJY?si=bx9p6gKstULYRNKi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/player.png"
                className={styles.playerImg}
                alt="play"
              />
            </a>
            <p className={styles.playerP}>{t('home.watch_video','Смотреть видео о колледже')}</p>
          </div>
        </section>

        <Stats
          data={[
            {
              id: "students",
              icon: "/images/student-icon.png",
              value: "3475",
              label: "студентов",
            },
            {
              id: "buildings",
              icon: "/images/building-icon.png",
              value: "4",
              label: "учебных корпусов",
            },
            {
              id: "teachers",
              icon: "/images/teacher-icon.png",
              value: "221",
              label: "преподавателей",
            },
            {
              id: "dorms",
              icon: "/images/dorm-icon.png",
              value: "2",
              label: "общежития",
            },
          ]}
        />

        <SliderSpecialties />

  <h1>{t('home.announcements','Объявления и мероприятия')}</h1>
        <AnnouncementsList />{/* Объявления шақыру керек мына жерге */}

  <h1>{t('home.news','Новости')}</h1>
  <p>{t('home.news_sub','Мангистауского колледж туризма')}</p>

        {/* Новости шақыру керек мына жерге */}

        <div className={styles.map}>
            <div className={styles.mapContainer}>
                <a
                href="https://yandex.kz/maps/ru/29575/aktau/?utm_medium=mapframe&utm_source=maps"
                className={styles.mapLinkTop}
                target="_blank"
                rel="noopener noreferrer"
                >
                Актау
                </a>
                <a
                href="https://yandex.kz/maps/ru/29575/aktau/?ll=51.169963%2C43.648722&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=51.169479%2C43.648923&whatshere%5Bzoom%5D=17&z=18.43"
                className={styles.mapLinkBottom}
                target="_blank"
                rel="noopener noreferrer"
                >
                43.648923, 51.169479 — Яндекс Карты
                </a>
                <iframe
                src="https://yandex.kz/map-widget/v1/?ll=51.169963%2C43.648722&mode=whatshere&whatshere%5Bpoint%5D=51.169479%2C43.648923&whatshere%5Bzoom%5D=17&z=18.43"
                frameBorder="1"
                allowFullScreen
                title="Yandex Map Aktau"
                className={styles.iframe}
                ></iframe>
            </div>
        </div>

       <Footer />


        </div>
    );
};

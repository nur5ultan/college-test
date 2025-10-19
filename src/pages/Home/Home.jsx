import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from './Home.module.css';
import Stats from '../../components/Stats/Stats';
import SliderSpecialties from "../../components/SliderSpecialties/SliderSpecialties";
import AnnouncementsList from '../../components/Announcement/AnnouncementsList';


const videos = ['/video/background.mp4',]

export default function Home(){
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
                    <h1 className={styles.h1}>Официальный сайт</h1> <br></br>
                    <h2 className={styles.h2}>Мангыстауский колледж туризма</h2>
                                        <a className={styles.videoButton} href="https://youtu.be/AnGRgWeVNJY?si=bx9p6gKstULYRNKi" target="_blank" rel="noopener noreferrer">
                                            <img src="/images/player.png" className={styles.playerImg} alt="play"/>
                                        </a>
                    <p className={styles.playerP}>Смотреть видео о колледже</p>

                </div>
            </section> 

            <Stats data={[
                { id: 'students', icon: '/images/student-icon.png', value: '3475', label: 'студентов' },
                { id: 'buildings', icon: '/images/building-icon.png', value: '4', label: 'учебных корпусов' },
                { id: 'teachers', icon: '/images/teacher-icon.png', value: '221', label: 'преподавателей' },
                { id: 'dorms', icon: '/images/dorm-icon.png', value: '2', label: 'общежития' },
            ]} />

            <img src="/images/god.png" className={styles.godImg} alt=""/>

            <SliderSpecialties />
            
            <h1>Объявления и мероприятия</h1>
            <AnnouncementsList />

        </div>
    );
};

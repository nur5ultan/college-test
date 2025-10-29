import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Abouts.module.css';
export default function About(){
    const { t } = useTranslation();
    return(
        <div className={styles.about}>
             <Header />
                <div className={styles.directorBlog}>
                    <DirectorBlog />
                </div>
                 <div className={styles.header}>
                    <div className={styles.headerInner}>
                        <h1 className={styles.title}>{t('students.title','О нас')}</h1>
                        <p className={styles.subtitle}>{t('students.subtitle','Информация про колледж')}</p>
                    </div>
                 </div>
                <div id="content" className={styles.siteContent}>
                <img src="/images/about.jpg" alt="О колледже" className={styles.image} />

                <div className={styles.container}>
                <div className={styles.innerWrapper}>
                    <div id="primary" className={styles.contentArea}>
                    <article className={styles.article}>
                        <div className={styles.entryContent}>
                        <p>
                            <strong>ГККП «Мангистауский колледж туризма»</strong> — образовательное учебное заведение с актуальной системой,
                            открытой информационной средой и современной инфраструктурой.
                        </p>

                        <p>
                            Колледж представляет собой развивающуюся систему с ориентацией на потребности личности, общества и государства.
                            Основные тенденции развития колледжа — постоянное улучшение качества образования и ориентация на рынок труда.
                        </p>

                        <p>
                            <strong>Контингент студентов:</strong> 976 обучающихся (по госзаказу на бюджетной основе), в том числе:
                        </p>
                        <ul>
                            <li>552 человека — за счет местного бюджета,</li>
                            <li>424 человека — за счет республиканского бюджета.</li>
                        </ul>

                        <p>На государственном языке обучаются 563 студента, на русском — 413.</p>

                        <p>
                            Колледж начал деятельность <strong>6 августа 2009 года</strong> и реализует программы профессионального и технического образования.
                        </p>

                        <p><strong>Материально-техническая база:</strong></p>
                        <ul>
                            <li>собственное здание (на 750 мест),</li>
                            <li>22 кабинета, 3 компьютерных класса, 2 лингафонных кабинета, 12 лабораторий,</li>
                            <li>общежитие на 160 мест, библиотека, спортзал, музей, скалодром.</li>
                        </ul>

                        <p>
                            В 2020 году реализован проект <strong>«Жас маман»</strong> на сумму 213 млн тенге.
                        </p>
                        <p>
                            Колледж активно развивает кулинарные и туристические направления, реализуя программы
                            подготовки и переподготовки кадров.
                        </p>
                        </div>
                    </article>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
    </div>
    );
}
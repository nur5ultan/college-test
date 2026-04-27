import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Abouts.module.css';

export default function About(){
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return(
        <div className={styles.about}>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('about.title','О нас')}</h1>
                    <p className={styles.subtitle}>{t('about.subtitle','Информация о колледже')}</p>
                </div>
            </div>
            <div id="content" className={styles.siteContent}>
                <img src="/images/about.jpg" alt={t('about.title','О колледже')} className={styles.image} />

                <div className={styles.container}>
                    <div className={styles.innerWrapper}>
                        <div id="primary" className={styles.contentArea}>
                            <article className={styles.article}>
                                <div className={styles.entryContent}>

                                    {/* RUSSIAN */}
                                    {lang === 'ru' && (
                                        <>
                                            <p>
                                                <strong>ГККП «Мангистауский колледж туризма»</strong> — образовательное учебное заведение с актуальной системой,
                                                открытой информационной средой и современной инфраструктурой.
                                            </p>
                                            <p>
                                                Колледж представляет собой развивающуюся систему с ориентацией на потребности личности, общества и государства.
                                                Основные тенденции развития колледжа — постоянное улучшение качества образования и ориентация на рынок труда.
                                            </p>
                                            <p><strong>Контингент студентов:</strong> 976 обучающихся (по госзаказу на бюджетной основе), в том числе:</p>
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
                                            <p>В 2020 году реализован проект <strong>«Жас маман»</strong> на сумму 213 млн тенге.</p>
                                            <p>Колледж активно развивает кулинарные и туристические направления, реализуя программы подготовки и переподготовки кадров.</p>
                                        </>
                                    )}

                                    {/* KAZAKH */}
                                    {lang === 'kz' && (
                                        <>
                                            <p>
                                                <strong>МККП «Маңғыстау туризм колледжі»</strong> — өзекті жүйесі, ашық ақпараттық ортасы және заманауи инфрақұрылымы бар оқу орны.
                                            </p>
                                            <p>
                                                Колледж жеке тұлғаның, қоғамның және мемлекеттің мүдделеріне бағытталған дамушы жүйені білдіреді.
                                                Колледждің негізгі даму тенденциялары — білім сапасын үнемі жақсарту және еңбек нарығына бағытталу.
                                            </p>
                                            <p><strong>Студенттер контингенті:</strong> 976 оқушы (мемлекеттік тапсырыс бойынша бюджеттік негізде), соның ішінде:</p>
                                            <ul>
                                                <li>552 адам — жергілікті бюджет есебінен,</li>
                                                <li>424 адам — республикалық бюджет есебінен.</li>
                                            </ul>
                                            <p>Мемлекеттік тілде 563 студент, орыс тілінде 413 студент оқиды.</p>
                                            <p>
                                                Колледж <strong>2009 жылдың 6 тамызынан</strong> бастап жұмыс істейді және кәсіби-техникалық білім беру бағдарламаларын жүзеге асырады.
                                            </p>
                                            <p><strong>Материалдық-техникалық база:</strong></p>
                                            <ul>
                                                <li>меншікті ғимарат (750 орынға),</li>
                                                <li>22 кабинет, 3 компьютерлік сынып, 2 лингафон кабинеті, 12 зертхана,</li>
                                                <li>160 орынға жатақхана, кітапхана, спорт залы, мұражай, скалодром.</li>
                                            </ul>
                                            <p>2020 жылы 213 млн теңге сомасына <strong>«Жас маман»</strong> жобасы жүзеге асырылды.</p>
                                            <p>Колледж аспаздық және туристік бағыттарды белсенді дамытып, кадрларды даярлау және қайта даярлау бағдарламаларын жүргізеді.</p>
                                        </>
                                    )}

                                    {/* ENGLISH */}
                                    {lang === 'en' && (
                                        <>
                                            <p>
                                                <strong>Mangistau College of Tourism</strong> is an educational institution with a relevant system,
                                                open information environment, and modern infrastructure.
                                            </p>
                                            <p>
                                                The college represents a developing system oriented toward the needs of the individual, society, and the state.
                                                The main development trends are the continuous improvement of education quality and orientation toward the labor market.
                                            </p>
                                            <p><strong>Student body:</strong> 976 students (on a budgetary basis under state order), including:</p>
                                            <ul>
                                                <li>552 students — funded by local budget,</li>
                                                <li>424 students — funded by the republican budget.</li>
                                            </ul>
                                            <p>563 students study in the Kazakh language, 413 in Russian.</p>
                                            <p>
                                                The college began operations on <strong>August 6, 2009</strong> and implements vocational and technical education programs.
                                            </p>
                                            <p><strong>Material and technical base:</strong></p>
                                            <ul>
                                                <li>own building (capacity 750),</li>
                                                <li>22 classrooms, 3 computer labs, 2 language labs, 12 laboratories,</li>
                                                <li>dormitory for 160, library, gymnasium, museum, climbing wall.</li>
                                            </ul>
                                            <p>In 2020, the <strong>"Zhas Maман"</strong> project was implemented for 213 million tenge.</p>
                                            <p>The college actively develops culinary and tourism programs, implementing personnel training and retraining programs.</p>
                                        </>
                                    )}

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

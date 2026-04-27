import Header from "../../components/Header/Header";
import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import styles from "./Demo.module.css";
import { useTranslation } from 'react-i18next';
import Footer from "../../components/Footer/Footer";

export default function Demo() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('menu.demo', 'Демонстрационный экзамен')}</h1>
                </div>
            </div>
            <main className={styles.container}>

                {/* RUSSIAN */}
                {lang === 'ru' && (
                    <section className={styles.langSection}>
                        <p className={styles.description}>
                            <strong>Демонстрационный экзамен</strong> — это форма итоговой оценки профессиональных компетенций студентов,
                            максимально приближённая к условиям реального производства. По итогам экзамена студент получает <strong>Skills паспорт</strong>.
                        </p>
                        <div className={styles.gridInfo}>
                            <div className={styles.infoBlock}>
                                <h3>Цели:</h3>
                                <ul>
                                    <li>Оценить уровень профессиональных навыков;</li>
                                    <li>Повысить качество подготовки кадров;</li>
                                    <li>Сблизить образование с рынком труда.</li>
                                </ul>
                            </div>
                            <div className={styles.infoBlock}>
                                <h3>Особенности:</h3>
                                <ul>
                                    <li>Независимые эксперты от предприятий;</li>
                                    <li>Реальное практическое задание;</li>
                                    <li>База колледжа или площадка работодателя.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.tableResponsive}>
                            <h3 className={styles.tableTitle}>Данные по выпуску и ДЭ</h3>
                            <table className={styles.statsTable}>
                                <thead>
                                    <tr>
                                        <th>Год</th>
                                        <th>Выпускников</th>
                                        <th>Специальности (код - кол-во)</th>
                                        <th>Сдали ДЭ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2023-2024</td><td>280</td>
                                        <td className={styles.smallText}>Питание: 140; Отель: 42; Перевод: 44; Туризм: 34; Маркетинг: 20</td>
                                        <td>280</td>
                                    </tr>
                                    <tr>
                                        <td>2024-2025</td><td>343</td>
                                        <td className={styles.smallText}>Питание: 148; Отель: 49; Перевод: 44; Туризм: 58; Маркетинг: 43</td>
                                        <td>343 (16 коммерч.)</td>
                                    </tr>
                                    <tr>
                                        <td>2025-2026</td><td>359 (план)</td>
                                        <td className={styles.smallText}>Питание: 188; Отель: 49; Перевод: 50; Туризм: 25; Маркетинг: 47</td>
                                        <td>359 (36 коммерч.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* KAZAKH */}
                {lang === 'kz' && (
                    <section className={styles.langSection}>
                        <p className={styles.description}>
                            <strong>Демонстрациялық емтихан</strong> — бұл студенттердің кәсіби құзыреттіліктерін қорытынды бағалаудың нысаны,
                            нақты өндіріс жағдайларына барынша жақын. Емтихан қорытындысы бойынша студентке <strong>Skills паспорты</strong> беріледі.
                        </p>
                        <div className={styles.gridInfo}>
                            <div className={styles.infoBlock}>
                                <h3>Мақсаттар:</h3>
                                <ul>
                                    <li>Кәсіби дағдылар деңгейін бағалау;</li>
                                    <li>Кадр даярлау сапасын арттыру;</li>
                                    <li>Білімді еңбек нарығына жақындату.</li>
                                </ul>
                            </div>
                            <div className={styles.infoBlock}>
                                <h3>Ерекшеліктері:</h3>
                                <ul>
                                    <li>Кәсіпорындардан тәуелсіз сарапшылар;</li>
                                    <li>Нақты практикалық тапсырма;</li>
                                    <li>Колледж базасы немесе жұмыс берушінің алаңы.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.tableResponsive}>
                            <h3 className={styles.tableTitle}>Түлек шығарылымы және ДЕ бойынша деректер</h3>
                            <table className={styles.statsTable}>
                                <thead>
                                    <tr>
                                        <th>Жыл</th>
                                        <th>Түлектер</th>
                                        <th>Мамандықтар (код - саны)</th>
                                        <th>ДЕ тапсырды</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2023-2024</td><td>280</td>
                                        <td className={styles.smallText}>Тамақтану: 140; Қонақ үй: 42; Аударма: 44; Туризм: 34; Маркетинг: 20</td>
                                        <td>280</td>
                                    </tr>
                                    <tr>
                                        <td>2024-2025</td><td>343</td>
                                        <td className={styles.smallText}>Тамақтану: 148; Қонақ үй: 49; Аударма: 44; Туризм: 58; Маркетинг: 43</td>
                                        <td>343 (16 коммерц.)</td>
                                    </tr>
                                    <tr>
                                        <td>2025-2026</td><td>359 (жоспар)</td>
                                        <td className={styles.smallText}>Тамақтану: 188; Қонақ үй: 49; Аударма: 50; Туризм: 25; Маркетинг: 47</td>
                                        <td>359 (36 коммерц.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* ENGLISH */}
                {lang === 'en' && (
                    <section className={styles.langSection}>
                        <p className={styles.description}>
                            <strong>Demonstration Exam</strong> is a form of final assessment of students' professional competencies,
                            as close as possible to real production conditions. Upon completion of the exam, the student receives a <strong>Skills Passport</strong>.
                        </p>
                        <div className={styles.gridInfo}>
                            <div className={styles.infoBlock}>
                                <h3>Goals:</h3>
                                <ul>
                                    <li>Assess the level of professional skills;</li>
                                    <li>Improve the quality of personnel training;</li>
                                    <li>Bridge education and the labor market.</li>
                                </ul>
                            </div>
                            <div className={styles.infoBlock}>
                                <h3>Features:</h3>
                                <ul>
                                    <li>Independent experts from enterprises;</li>
                                    <li>Real practical assignment;</li>
                                    <li>College premises or employer's site.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.tableResponsive}>
                            <h3 className={styles.tableTitle}>Graduation and Demo Exam Data</h3>
                            <table className={styles.statsTable}>
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Graduates</th>
                                        <th>Specialties (code - count)</th>
                                        <th>Passed DE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2023-2024</td><td>280</td>
                                        <td className={styles.smallText}>Food: 140; Hotel: 42; Translation: 44; Tourism: 34; Marketing: 20</td>
                                        <td>280</td>
                                    </tr>
                                    <tr>
                                        <td>2024-2025</td><td>343</td>
                                        <td className={styles.smallText}>Food: 148; Hotel: 49; Translation: 44; Tourism: 58; Marketing: 43</td>
                                        <td>343 (16 commercial)</td>
                                    </tr>
                                    <tr>
                                        <td>2025-2026</td><td>359 (plan)</td>
                                        <td className={styles.smallText}>Food: 188; Hotel: 49; Translation: 50; Tourism: 25; Marketing: 47</td>
                                        <td>359 (36 commercial)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
}

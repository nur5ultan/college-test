import Header from "../../components/Header/Header";
import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import styles from "./Demo.module.css";

export default function Demo() {
    return (
        <div className={styles.pageWrapper}>
             <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>WorldSkills</h1>
                </div>
            </div>
            <main className={styles.container}>
                {/* --- RU SECTION --- */}
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
                                    <td>2023-2024</td>
                                    <td>280</td>
                                    <td className={styles.smallText}>
                                        Питание: 140; Отель: 42; Перевод: 44; Туризм: 34; Маркетинг: 20
                                    </td>
                                    <td>280</td>
                                </tr>
                                <tr>
                                    <td>2024-2025</td>
                                    <td>343</td>
                                    <td className={styles.smallText}>
                                        Питание: 148; Отель: 49; Перевод: 44; Туризм: 58; Маркетинг: 43
                                    </td>
                                    <td>343 (16 коммерч.)</td>
                                </tr>
                                <tr>
                                    <td>2025-2026</td>
                                    <td>359 (план)</td>
                                    <td className={styles.smallText}>
                                        Питание: 188; Отель: 49; Перевод: 50; Туризм: 25; Маркетинг: 47
                                    </td>
                                    <td>359 (36 коммерч.)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className={styles.divider}></div>

                {/* --- KZ SECTION --- */}
                <section className={styles.langSection}>
                    <p className={styles.description}>
                        <strong>Демонстрациялық емтихан</strong> — бұл студенттердің кәсіби құзыреттіліктерін қорытынды бағалау нысаны. 
                        Қорытындысы бойынша студентке <strong>Skills паспорты</strong> беріледі.
                    </p>
                    {/* Аналогичная структура для казахского языка */}
                </section>
            </main>
        </div>
    );
}
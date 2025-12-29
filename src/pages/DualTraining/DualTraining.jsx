import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './DualTraining.module.css';

export default function DualTraining() {
    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>Дуальное обучение</h1>
                </div>
            </div>

            <div className={styles.container}>
                {/* --- РУССКИЙ БЛОК --- */}
                <section className={styles.section}>
                    <h2>Дуальное обучение</h2>
                    <p>
                        Под «дуальным обучением» понимается система подготовки, при которой студент колледжа совмещает теоретическое обучение в образовательном учреждении и практическую деятельность на предприятии-работодателе. 
                        Основным предприятием по дуальному обучению нашего колледжа является Филиал частной компании «Aktau Tourism City Ltd».
                    </p>
                    
                    <ul className={styles.list}>
                        <li>Обучающийся проходит часть времени (например, 60 %) не только в классе, а на производстве или рабочем месте.</li>
                        <li>Между колледжем, предприятием и студентом заключается трёхсторонний или более договор/соглашение, закрепляющий права и обязанности.</li>
                        <li>Практика, пройденная на предприятии, может засчитываться в трудовой стаж.</li>
                        <li>Образование ориентировано на конкретные запросы предприятий — готовится выпускник, востребованный на рынке труда.</li>
                    </ul>

                    <p>
                        В Трудовой кодекс Республики Казахстан введена статья 119 «Дуальное обучение», где закреплены особенности данной системы. 
                        Приняты «Правила организации дуального обучения» приказом Министерства просвещения РК.
                    </p>

                    <h3>Основные цели:</h3>
                    <ul className={styles.list}>
                        <li>Сближение образования и производства.</li>
                        <li>Подготовка конкурентоспособных кадров.</li>
                        <li>Формирование профессиональных компетенций.</li>
                        <li>Содействие трудоустройству выпускников.</li>
                    </ul>

                    <h3>Данные по дуальному обучению (RU)</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th colSpan="2">2023-2024 учебный год</th>
                                    <th colSpan="2">2024-2025 учебный год</th>
                                    <th colSpan="2">2025-2026 учебный год</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>контингент</td><td>1065</td>
                                    <td>контингент</td><td>1125</td>
                                    <td>контингент</td><td>1097</td>
                                </tr>
                                <tr>
                                    <td>дуальное обучение</td><td>172</td>
                                    <td>дуальное обучение</td><td>318</td>
                                    <td>дуальное обучение</td><td>404</td>
                                </tr>
                                <tr>
                                    <td>Организация питания</td><td>122</td>
                                    <td>Организация питания</td><td>243</td>
                                    <td>Организация питания</td><td>331</td>
                                </tr>
                                <tr>
                                    <td>Гостиничный бизнес</td><td>50</td>
                                    <td>Гостиничный бизнес</td><td>75</td>
                                    <td>Гостиничный бизнес</td><td>73</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* --- КАЗАХСКИЙ БЛОК --- */}
                <section className={styles.section}>
                    <p>«Дуальды оқыту» деп – колледж студенті теориялық білімді оқу орнында меңгеріп, сонымен қатар жұмыс беруші кәсіпорында тәжірибеден өтетін даярлық жүйесін айтамыз.</p>
                    <p>Біздің колледждің дуальды оқыту бойынша негізгі серіктес кәсіпорны – «Aktau Tourism City Ltd» жеке компаниясының филиалы.</p>
                    
                    <h3>Дуальды оқыту бойынша мәліметтер (KZ)</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <tbody>
                                <tr>
                                    <td colSpan="2">2023-2024 оқу жылы</td>
                                    <td colSpan="2">2024-2025 оқу жылы</td>
                                    <td colSpan="2">2025-2026 оқу жылы</td>
                                </tr>
                                <tr>
                                    <td>Жалпы контингент</td><td>1065</td>
                                    <td>Жалпы контингент</td><td>1125</td>
                                    <td>Жалпы контингент</td><td>1097</td>
                                </tr>
                                <tr>
                                    <td>Дуальды оқыту</td><td>172</td>
                                    <td>Дуальды оқыту</td><td>318</td>
                                    <td>Дуальды оқыту</td><td>404</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className={styles.divider} />

                {/* --- ENGLISH BLOCK --- */}
                <section className={styles.section}>
                    <p>“Dual education” refers to a training system in which a college student combines theoretical studies at an educational institution with practical activities at an employer’s enterprise.</p>
                    <p>The main enterprise for dual education at our college is the Branch of the private company “Aktau Tourism City Ltd.”</p>
                    
                    <h3>Main goals:</h3>
                    <ul className={styles.list}>
                        <li>Bridging education and production.</li>
                        <li>Developing students’ professional competencies.</li>
                        <li>Facilitating employment of graduates.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
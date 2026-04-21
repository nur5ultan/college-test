import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';
import styles from './Applicants.module.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Applicants() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('admission');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [calculatedScore, setCalculatedScore] = useState(null);

    const calculateAdmissionScore = () => {
        if (!selectedSpecialty) return;
        
        const baseScores = {
            's1': 100, // Гостиничный бизнес
            's2': 80, // Организация питания
            's3': 90, // Туризм
            's4': 95, // Переводческое дело
            's5': 135  // Маркетинг
        };
        
        setCalculatedScore(baseScores[selectedSpecialty] || 85);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('applicants.title', 'Абитуриентам')}</h1>
                    <p className={styles.subtitle}>{t('applicants.subtitle', 'Вся необходимая информация для поступления в колледж')}</p>
                </div>
            </div>

            <main className={styles.content}>
                {/* Быстрые действия */}
                <section className={styles.quickActions}>
                    <div className={styles.actionCards}>
                        <Link to="/specialties" className={styles.actionCard}>
                            <div className={styles.actionIcon}>🎓</div>
                            <h3>{t('applicants.quick.specialties.title', 'Выбрать специальность')}</h3>
                            <p>{t('applicants.quick.specialties.desc', 'Ознакомьтесь с программами обучения')}</p>
                        </Link>
                        
                        <div className={styles.actionCard}>
                            <div className={styles.actionIcon}>📋</div>
                            <a href="https://egov.kz/cms/ru/services/university_degree/182pass_mon?ysclid=mhd6y15ruu781285839">{t('applicants.quick.documents.title', 'Подать документы')}</a>
                            <p>{t('applicants.quick.documents.desc', 'Онлайн подача заявления')}</p>
                        </div>
                        
                        <Link to="/contacts" className={styles.actionCard}>
                            <div className={styles.actionIcon}>💬</div>
                            <h3>{t('applicants.quick.consultation.title', 'Получить консультацию')}</h3>
                            <p>{t('applicants.quick.consultation.desc', 'Задайте вопросы приёмной комиссии')}</p>
                        </Link>
                        
                        <div className={styles.actionCard}>
                            <div className={styles.actionIcon}>📊</div>
                            <h3>{t('applicants.quick.calculator.title', 'Калькулятор баллов')}</h3>
                            <p>{t('applicants.quick.calculator.desc', 'Рассчитайте проходной балл')}</p>
                        </div>
                    </div>
                </section>

                {/* Табы с информацией */}
                <section className={styles.infoTabs}>
                    <div className={styles.tabButtons}>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'admission' ? styles.active : ''}`}
                            onClick={() => setActiveTab('admission')}
                        >
                            {t('applicants.tabs.admission', 'Поступление')}
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'documents' ? styles.active : ''}`}
                            onClick={() => setActiveTab('documents')}
                        >
                            {t('applicants.tabs.documents', 'Документы')}
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'dates' ? styles.active : ''}`}
                            onClick={() => setActiveTab('dates')}
                        >
                            {t('applicants.tabs.dates', 'Важные даты')}
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.active : ''}`}
                            onClick={() => setActiveTab('benefits')}
                        >
                            {t('applicants.tabs.benefits', 'Льготы')}
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'dormitory' ? styles.active : ''}`}
                            onClick={() => setActiveTab('dormitory')}
                        >
                            {t('applicants.tabs.dormitory', 'Общежитие')}
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'admission' && (
                            <div className={styles.admissionInfo}>
                                <h3>{t('applicants.admission.title', 'Правила поступления')}</h3>
                                
                                <div className={styles.admissionSteps}>
                                    <div className={styles.step}>
                                        <div className={styles.stepNumber}>1</div>
                                        <div className={styles.stepContent}>
                                            <h4>{t('applicants.admission.step1.title', 'Выбор специальности')}</h4>
                                            <p>{t('applicants.admission.step1.desc', 'Ознакомьтесь с программами обучения и выберите подходящую специальность')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.step}>
                                        <div className={styles.stepNumber}>2</div>
                                        <div className={styles.stepContent}>
                                            <h4>{t('applicants.admission.step2.title', 'Подготовка документов')}</h4>
                                            <p>{t('applicants.admission.step2.desc', 'Соберите необходимые документы согласно списку требований')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.step}>
                                        <div className={styles.stepNumber}>3</div>
                                        <div className={styles.stepContent}>
                                            <h4>{t('applicants.admission.step3.title', 'Подача заявления')}</h4>
                                            <p>{t('applicants.admission.step3.desc', 'Подайте документы лично или через онлайн-форму')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.step}>
                                        <div className={styles.stepNumber}>4</div>
                                        <div className={styles.stepContent}>
                                            <h4>{t('applicants.admission.step4.title', 'Вступительные испытания')}</h4>
                                            <p>{t('applicants.admission.step4.desc', 'Пройдите необходимые тесты и собеседования')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.scoreCalculator}>
                                    <h4>{t('applicants.calculator.title', 'Калькулятор проходного балла')}</h4>
                                    <div className={styles.calculatorForm}>
                                        <select 
                                            value={selectedSpecialty} 
                                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                                            className={styles.selectInput}
                                        >
                                            <option value="">{t('applicants.calculator.select', 'Выберите специальность')}</option>
                                            <option value="s1">{t('specialties.items.s1.title', 'Гостиничный бизнес')}</option>
                                            <option value="s2">{t('specialties.items.s2.title', 'Организация питания')}</option>
                                            <option value="s3">{t('specialties.items.s3.title', 'Туризм')}</option>
                                            <option value="s4">{t('specialties.items.s4.title', 'Переводческое дело')}</option>
                                            <option value="s5">{t('specialties.items.s5.title', 'Маркетинг')}</option>
                                        </select>
                                        <button onClick={calculateAdmissionScore} className={styles.calculateBtn}>
                                            {t('applicants.calculator.calculate', 'Рассчитать')}
                                        </button>
                                    </div>
                                    {calculatedScore && (
                                        <div className={styles.scoreResult}>
                                            {t('applicants.calculator.result', 'Примерный проходной балл на грант')}: <strong>{calculatedScore}</strong>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'documents' && (
                            <div className={styles.documentsInfo}>
                                <h3>{t('applicants.documents.title', 'Необходимые документы')}</h3>
                                
                                <div className={styles.documentCategories}>
                                    <div className={styles.docCategory}>
                                        <h4>{t('applicants.documents.required.title', 'Обязательные документы')}</h4>
                                        <ul className={styles.docList}>
                                            <li>{t('applicants.documents.required.app', 'Заявление о приёме')}</li>
                                            <li>{t('applicants.documents.required.certificate', 'Документ об образовании (оригинал)')}</li>
                                            <li>{t('applicants.documents.required.passport', 'Копия удостоверения личности')}</li>
                                            <li>{t('applicants.documents.required.photos', '6 фотографий 3x4 см')}</li>
                                            <li>{t('applicants.documents.required.medical', 'Медицинская справка формы 086-У')}</li>
                                        </ul>
                                    </div>
                                    
                                    <div className={styles.docCategory}>
                                        <h4>{t('applicants.documents.additional.title', 'Дополнительные документы')}</h4>
                                        <ul className={styles.docList}>
                                            <li>{t('applicants.documents.additional.benefits', 'Документы, подтверждающие льготы')}</li>
                                            <li>{t('applicants.documents.additional.achievements', 'Дипломы и грамоты за достижения')}</li>
                                            <li>{t('applicants.documents.additional.language', 'Сертификаты знания языков')}</li>
                                            <li>{t('applicants.documents.additional.work', 'Трудовая книжка (при наличии)')}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.documentTips}>
                                    <h4>{t('applicants.documents.tips.title', 'Полезные советы')}</h4>
                                    <div className={styles.tips}>
                                        <div className={styles.tip}>
                                            <span className={styles.tipIcon}>💡</span>
                                            <p>{t('applicants.documents.tips.copies', 'Сделайте копии всех документов')}</p>
                                        </div>
                                        <div className={styles.tip}>
                                            <span className={styles.tipIcon}>📋</span>
                                            <p>{t('applicants.documents.tips.check', 'Проверьте актуальность всех справок')}</p>
                                        </div>
                                        <div className={styles.tip}>
                                            <span className={styles.tipIcon}>📞</span>
                                            <p>{t('applicants.documents.tips.call', 'При сомнениях звоните в приёмную комиссию')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'dates' && (
                            <div className={styles.datesInfo}>
                                <h3>{t('applicants.dates.title', 'Важные даты 2025-2026')}</h3>
                                
                                <div className={styles.timeline}>
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDate}>{t('applicants.dates.application.date', '1 июня - 20 августа')}</div>
                                        <div className={styles.timelineContent}>
                                            <h4>{t('applicants.dates.application.title', 'Приём документов')}</h4>
                                            <p>{t('applicants.dates.application.desc', 'Подача заявлений и документов для поступления')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDate}>{t('applicants.dates.exams.date', '25-30 августа')}</div>
                                        <div className={styles.timelineContent}>
                                            <h4>{t('applicants.dates.exams.title', 'Вступительные испытания')}</h4>
                                            <p>{t('applicants.dates.exams.desc', 'Тестирование и собеседования по специальностям')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDate}>{t('applicants.dates.results.date', '31 августа')}</div>
                                        <div className={styles.timelineContent}>
                                            <h4>{t('applicants.dates.results.title', 'Объявление результатов')}</h4>
                                            <p>{t('applicants.dates.results.desc', 'Публикация списков зачисленных студентов')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDate}>{t('applicants.dates.enrollment.date', '1-5 сентября')}</div>
                                        <div className={styles.timelineContent}>
                                            <h4>{t('applicants.dates.enrollment.title', 'Зачисление')}</h4>
                                            <p>{t('applicants.dates.enrollment.desc', 'Подписание договоров и оформление документов')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDate}>{t('applicants.dates.start.date', '15 сентября')}</div>
                                        <div className={styles.timelineContent}>
                                            <h4>{t('applicants.dates.start.title', 'Начало занятий')}</h4>
                                            <p>{t('applicants.dates.start.desc', 'Первый учебный день нового академического года')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'benefits' && (
                            <div className={styles.benefitsInfo}>
                                <h3>{t('applicants.benefits.title', 'Льготы и преимущества')}</h3>
                                
                                <div className={styles.benefitCategories}>
                                    <div className={styles.benefitCategory}>
                                        <h4>{t('applicants.benefits.admission.title', 'Льготы при поступлении')}</h4>
                                        <ul className={styles.benefitList}>
                                            <li>{t('applicants.benefits.admission.orphans', 'Дети-сироты и дети, оставшиеся без попечения родителей')}</li>
                                            <li>{t('applicants.benefits.admission.disabled', 'Лица с инвалидностью I и II групп')}</li>
                                            <li>{t('applicants.benefits.admission.veterans', 'Дети военнослужащих и ветеранов')}</li>
                                            <li>{t('applicants.benefits.admission.large', 'Выпускники из многодетных семей')}</li>
                                        </ul>
                                    </div>
                                    
                                    <div className={styles.benefitCategory}>
                                        <h4>{t('applicants.benefits.study.title', 'Льготы в период обучения')}</h4>
                                        <ul className={styles.benefitList}>
                                            <li>{t('applicants.benefits.study.scholarship', 'Академические стипендии')}</li>
                                            <li>{t('applicants.benefits.study.social', 'Социальные стипендии')}</li>
                                            <li>{t('applicants.benefits.study.dormitory', 'Льготное проживание в общежитии')}</li>
                                            <li>{t('applicants.benefits.study.meals', 'Льготное питание')}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.scholarshipInfo}>
                                    <h4>{t('applicants.benefits.scholarship.title', 'Размеры стипендий')}</h4>
                                    <div className={styles.scholarshipTable}>
                                        <div className={styles.scholarshipRow}>
                                            <span>{t('applicants.benefits.scholarship.academic', 'Академическая стипендия')}</span>
                                            <span>15 000 - 25 000 тенге</span>
                                        </div>
                                        <div className={styles.scholarshipRow}>
                                            <span>{t('applicants.benefits.scholarship.social', 'Социальная стипендия')}</span>
                                            <span>14 000 - 18 000 тенге</span>
                                        </div>
                                        <div className={styles.scholarshipRow}>
                                            <span>{t('applicants.benefits.scholarship.excellence', 'За отличную учёбу')}</span>
                                            <span>40 000 - 50 000 тенге</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'dormitory' && (
                            <div className={styles.dormitoryInfo}>
                                <h3>{t('applicants.dormitory.title', 'Общежитие')}</h3>
                                
                                <div className={styles.dormitoryFeatures}>
                                    <div className={styles.featureCard}>
                                        <div className={styles.featureIcon}>🏠</div>
                                        <h4>{t('applicants.dormitory.comfort.title', 'Комфортное проживание')}</h4>
                                        <p>{t('applicants.dormitory.comfort.desc', 'Комнаты на 2-3 человека с мебелью и удобствами')}</p>
                                    </div>
                                    
                                    <div className={styles.featureCard}>
                                        <div className={styles.featureIcon}>🍽️</div>
                                        <h4>{t('applicants.dormitory.dining.title', 'Столовая')}</h4>
                                        <p>{t('applicants.dormitory.dining.desc', 'Трёхразовое питание и буфет на территории')}</p>
                                    </div>
                                    
                                    <div className={styles.featureCard}>
                                        <div className={styles.featureIcon}>📚</div>
                                        <h4>{t('applicants.dormitory.study.title', 'Учебные зоны')}</h4>
                                        <p>{t('applicants.dormitory.study.desc', 'Читальные залы и комнаты для самоподготовки')}</p>
                                    </div>
                                    
                                    <div className={styles.featureCard}>
                                        <div className={styles.featureIcon}>🏃</div>
                                        <h4>{t('applicants.dormitory.sports.title', 'Спорт и отдых')}</h4>
                                        <p>{t('applicants.dormitory.sports.desc', 'Спортзал, настольный теннис, комната отдыха')}</p>
                                    </div>
                                </div>

                                <div className={styles.dormitoryPricing}>
                                    <h4>{t('applicants.dormitory.pricing.title', 'Стоимость проживания')}</h4>
                                    <div className={styles.pricingTable}>
                                        <div className={styles.pricingRow}>
                                            <span>{t('applicants.dormitory.pricing.room2', 'Одноместная комната')}</span>
                                            <span>12 000 тенге/месяц</span>
                                        </div>
                                        {/* <div className={styles.pricingRow}>
                                            <span>{t('applicants.dormitory.pricing.room3', 'Трёхместная комната')}</span>
                                            <span>6 000 тенге/месяц</span>
                                        </div> */}
                                        <div className={styles.pricingRow}>
                                            <span>{t('applicants.dormitory.pricing.meals', 'Питание (опционально)')}</span>
                                            <span>8 000 тенге/месяц</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.dormitoryContact}>
                                    <h4>{t('applicants.dormitory.contact.title', 'Как подать заявку')}</h4>
                                    <p>{t('applicants.dormitory.contact.desc', 'Заявки на общежитие подаются одновременно с документами для поступления.')}</p>
                                    <p><strong>{t('applicants.dormitory.contact.phone', 'Телефон:')}</strong> +7 (7292) 60-51-56</p>
                                    <p><strong>{t('applicants.dormitory.contact.address', 'Адрес:')}</strong> г. Актау, 23-й микрорайон, 8</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

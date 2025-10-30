import DirectorBlog from "../../components/DirectorBlog/DirectorBlog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFeedback } from "../../contexts/FeedbackContext";
import styles from './Contacts.module.css';

export default function Contacts() {
    const { t } = useTranslation();
    const { addMessage } = useFeedback();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Добавляем сообщение в систему Feedback
            console.log('Отправляем сообщение:', formData);
            const messageId = addMessage(formData);
            console.log('Сообщение добавлено с ID:', messageId);
            
            // Имитация отправки формы
            setTimeout(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                
                // Очищаем статус через 5 секунд
                setTimeout(() => {
                    setSubmitStatus('');
                }, 5000);
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>{t('contacts.title', 'Контакты')}</h1>
                    <p className={styles.subtitle}>{t('contacts.subtitle', 'Свяжитесь с нами для получения дополнительной информации')}</p>
                </div>
            </div>

            <main className={styles.container}>
                {/* Основная контактная информация */}
                <section className={styles.contactInfo}>
                    <div className={styles.infoCards}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📍</div>
                            <div className={styles.infoContent}>
                                <h3>{t('contacts.address.title', 'Адрес')}</h3>
                                <p>{t('contacts.address.value', 'г. Актау, 23-й микрорайон, 8')}</p>
                                {/* <p>{t('contacts.address.postal', 'Почтовый индекс: 130000')}</p> */}
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📞</div>
                            <div className={styles.infoContent}>
                                <h3>{t('contacts.phone.title', 'Телефоны')}</h3>
                                {/* <p><strong>{t('contacts.phone.reception', 'Приёмная:')}</strong> +7 (7292) 60-51-56</p> */}
                                <p><strong>{t('contacts.phone.admission', 'Приёмная комиссия:')}</strong> +7 (7292) 60-50-56</p>
                                <p><strong>{t('contacts.phone.emergency', 'Вахта:')}</strong> +7 (7292) 60-51-56</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📧</div>
                            <div className={styles.infoContent}>
                                <h3>{t('contacts.email.title', 'Email')}</h3>
                                <p><strong>{t('contacts.email.general', 'Общие вопросы:')}</strong><br />info@mangistau-tourism.kz</p>
                                <p><strong>{t('contacts.email.admission', 'Поступление:')}</strong><br />admission@mangistau-tourism.kz</p>
                                <p><strong>{t('contacts.email.director', 'Директор:')}</strong><br />j_sarmurzina@mail.ru</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>🕒</div>
                            <div className={styles.infoContent}>
                                <h3>{t('contacts.hours.title', 'Часы работы')}</h3>
                                <p><strong>{t('contacts.hours.weekdays', 'Пн-Пт:')}</strong> 09:00 - 18:00</p>
                                <p><strong>{t('contacts.hours.saturday', 'Суббота:')}</strong> 09:00 - 13:00</p>
                                <p><strong>{t('contacts.hours.sunday', 'Воскресенье:')}</strong> {t('contacts.hours.closed', 'Выходной')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Отделы и службы */}
                <section className={styles.departments}>
                    <h2 className={styles.sectionTitle}>{t('contacts.departments.title', 'Отделы и службы')}</h2>
                    <div className={styles.departmentGrid}>
                        <div className={styles.departmentCard}>
                            <h3>{t('contacts.departments.admission.title', 'Приёмная комиссия')}</h3>
                            <p>{t('contacts.departments.admission.desc', 'Информация о поступлении, документы, льготы')}</p>
                            <p><strong>{t('contacts.phone.label', 'Телефон:')}</strong> +7 (7292) 60-51-57</p>
                            <p><strong>{t('contacts.room.label', 'Кабинет:')}</strong> 101</p>
                        </div>

                        <div className={styles.departmentCard}>
                            <h3>{t('contacts.departments.academic.title', 'Учебный отдел')}</h3>
                            <p>{t('contacts.departments.academic.desc', 'Расписание, академические вопросы, сессии')}</p>
                            <p><strong>{t('contacts.phone.label', 'Телефон:')}</strong> +7 (7292) 60-51-59</p>
                            <p><strong>{t('contacts.room.label', 'Кабинет:')}</strong> 201</p>
                        </div>

                        <div className={styles.departmentCard}>
                            <h3>{t('contacts.departments.library.title', 'Библиотека')}</h3>
                            <p>{t('contacts.departments.library.desc', 'Учебная литература, электронные ресурсы')}</p>
                            <p><strong>{t('contacts.phone.label', 'Телефон:')}</strong> +7 (7292) 60-51-60</p>
                            <p><strong>{t('contacts.room.label', 'Кабинет:')}</strong> 105</p>
                        </div>

                        <div className={styles.departmentCard}>
                            <h3>{t('contacts.departments.dormitory.title', 'Общежитие')}</h3>
                            <p>{t('contacts.departments.dormitory.desc', 'Размещение студентов, бытовые вопросы')}</p>
                            <p><strong>{t('contacts.phone.label', 'Телефон:')}</strong> +7 (7292) 60-51-61</p>
                            <p><strong>{t('contacts.address.label', 'Адрес:')}</strong> {t('contacts.departments.dormitory.address', 'ул. Студенческая, 5')}</p>
                        </div>
                    </div>
                </section>

                {/* Форма обратной связи */}
                <section className={styles.contactForm}>
                    <h2 className={styles.sectionTitle}>{t('contacts.form.title', 'Написать нам')}</h2>
                    <div className={styles.formContainer}>
                        <div className={styles.formInfo}>
                            <h3>{t('contacts.form.info.title', 'Остались вопросы?')}</h3>
                            <p>{t('contacts.form.info.desc', 'Заполните форму, и мы обязательно свяжемся с вами в ближайшее время для ответа на все ваши вопросы.')}</p>
                            
                            <div className={styles.socialLinks}>
                                <h4>{t('contacts.social.title', 'Мы в социальных сетях')}</h4>
                                <div className={styles.socialIcons}>
                                    <a href="https://www.instagram.com/mangistau_college_tourism/" className={styles.socialLink}>📱 Instagram</a>
                                    <a href="https://www.facebook.com/mkt.aktau/" className={styles.socialLink}>📘 Facebook</a>
                                    <button className={styles.socialLink} onClick={() => alert('Telegram скоро будет доступен')}>💬 Telegram</button>
                                    <a href="https://www.instagram.com/mangistau_college_tourism/" className={styles.socialLink}>📺 YouTube</a>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={t('contacts.form.name.placeholder', 'Ваше имя')}
                                    className={styles.formInput}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t('contacts.form.email.placeholder', 'Email адрес')}
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            
                            <div className={styles.formRow}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={t('contacts.form.phone.placeholder', 'Номер телефона')}
                                    className={styles.formInput}
                                />
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    required
                                >
                                    <option value="">{t('contacts.form.subject.placeholder', 'Тема обращения')}</option>
                                    <option value="admission">{t('contacts.form.subject.admission', 'Поступление')}</option>
                                    <option value="academic">{t('contacts.form.subject.academic', 'Учебные вопросы')}</option>
                                    <option value="dormitory">{t('contacts.form.subject.dormitory', 'Общежитие')}</option>
                                    <option value="other">{t('contacts.form.subject.other', 'Другое')}</option>
                                </select>
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={t('contacts.form.message.placeholder', 'Ваше сообщение')}
                                className={styles.formTextarea}
                                rows="5"
                                required
                            ></textarea>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    {t('contacts.form.success', 'Спасибо! Ваше сообщение отправлено.')}
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className={styles.errorMessage}>
                                    {t('contacts.form.error', 'Произошла ошибка при отправке сообщения. Попробуйте снова.')}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting 
                                    ? t('contacts.form.sending', 'Отправка...') 
                                    : t('contacts.form.send', 'Отправить сообщение')
                                }
                            </button>
                        </form>
                    </div>
                </section>

                {/* Карта и транспорт */}
                <section className={styles.mapSection}>
                    <h2 className={styles.sectionTitle}>{t('contacts.location.title', 'Как нас найти')}</h2>
                    <div className={styles.locationInfo}>
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapContent}>
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
                        
                        <div className={styles.transportInfo}>
                            <h3>{t('contacts.transport.title', 'Транспортная доступность')}</h3>
                            <div className={styles.transportOptions}>
                                <div className={styles.transportOption}>
                                    <strong>🚌 {t('contacts.transport.bus.title', 'Автобус:')}</strong>
                                    <p>{t('contacts.transport.bus.routes', 'Маршруты №7, 106, 2, 9, 104, 107')}</p>
                                    <p>{t('contacts.transport.bus.stop', 'Остановка "Колледж туризма"')}</p>
                                </div>
                                
                                {/* <div className={styles.transportOption}>
                                    <strong>🚗 {t('contacts.transport.car.title', 'На автомобиле:')}</strong>
                                    <p>{t('contacts.transport.car.parking', 'Бесплатная парковка для посетителей')}</p>
                                    <p>{t('contacts.transport.car.entrance', 'Въезд с ул. Мангистауская')}</p>
                                </div> */}
                                
                                <div className={styles.transportOption}>
                                    <strong>🚶 {t('contacts.transport.walk.title', 'Пешком:')}</strong>
                                    <p>{t('contacts.transport.walk.metro', '5 минут от остановки "Колледж туризма"')}</p>
                                    <p>{t('contacts.transport.walk.center', '15 минут от центра города')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

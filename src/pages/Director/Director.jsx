import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import api from '../../api/axios';
import styles from './Director.module.css';
import Footer from '../../components/Footer/Footer';

export default function Director(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSuccess('');
      setError('');

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRe.test(email)){
        setError('Введите корректный email');
        return;
      }
      if(!message || message.trim().length < 3){
        setError('Пожалуйста, введите сообщение');
        return;
      }

      setSending(true);
      try{
        const payload = { full_name: 'Посетитель сайта', title: email, text: message };
        await api.post('/feedbacks', payload);
        setSuccess('Спасибо! Ваше сообщение отправлено.');
        setEmail('');
        setMessage('');
      }catch(err){
        console.error(err);
        setError('Не удалось отправить сообщение. Попробуйте позже.');
      }finally{
        setSending(false);
      }
    };

    return (
    <div>
    <Header />
      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <h1 className={styles.title}>Директор колледжа</h1>
            <p className={styles.subtitle}>Новости, обращения и блог директора</p>
          </div>
        </header>

        <section className={styles.container}>
          <aside className={styles.profile}>
            <div className={styles.avatarWrap}>
              <img className={styles.avatar} src="/images/director.jpg" alt="Директор колледжа" />
            </div>
            <h2 className={styles.name}>ФИО Директора</h2>
            <p className={styles.position}>Директор Карагандинского высшего политехнического колледжа</p>

            <div className={styles.contacts}>
              <a href="tel:+77000000000">+7 (700) 000-00-00</a>
              <a href="mailto:director@college.kz">director@college.kz</a>
            </div>
          </aside>

          <article className={styles.content}>
            <h3 className={styles.sectionTitle}>Обращение</h3>
            <p>Информация о директоре колледжа будет размещена здесь. Краткая биография или информация о профессиональном опыте, миссии и целях.</p>

            <h3 className={styles.sectionTitle}>Написать сообщение директору</h3>

            <div className={styles.formWrap}>
              <form className={styles.feedbackForm} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">Ваш Email</label>
                <input id="email" className={styles.input} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@mail.com" />

                <label className={styles.label} htmlFor="message">Сообщение</label>
                <textarea id="message" className={styles.textarea} rows={5} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ваше сообщение..." />

                {error && <div className={styles.formError}>{error}</div>}
                {success && <div className={styles.formSuccess}>{success}</div>}

                <div className={styles.formActions}>
                  <button className={styles.btnPrimary} type="submit" disabled={sending}>{sending ? 'Отправка...' : 'Отправить'}</button>
                </div>
              </form>
            </div>

            <h3 className={styles.sectionTitle}>Последние публикации</h3>
            <div className={styles.postsGrid}>
              {/* Пример карточек — можно заменить на компонент списка публикаций */}
              <article className={styles.postCard}>
                <h4 className={styles.postTitle}>Новости колледжа и важные объявления</h4>
                <p className={styles.postExcerpt}>Краткий анонс публикации директора. Дата и превью текста.</p>
                <button className={styles.postMore}>читать →</button>
              </article>

              <article className={styles.postCard}>
                <h4 className={styles.postTitle}>Отчёты о встречах и поездках</h4>
                <p className={styles.postExcerpt}>Короткий текст-описание прошедших событий и достижений.</p>
                <button className={styles.postMore}>читать →</button>
              </article>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../../api/axios';
import styles from './Search.module.css';
import { useTranslation } from 'react-i18next';

export default function Search(){
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const minLen = 2; // минимальная длина запроса

  // локальный индекс создаём внутри эффекта ниже, чтобы не плодить зависимость функции

  useEffect(()=>{
    if(!q || q.trim().length < minLen) { setItems([]); return; }
    let mounted = true;
    setLoading(true);
    setError('');
    api.get('/blogs')
      .then(res => {
        const list = Array.isArray(res.data) ? res.data : (res.data.data || []);
        // клиентский фильтр по title/description/text
        const lowered = q.toLowerCase();
        const filteredBlogs = list.filter(b => (
          (b.title && b.title.toLowerCase().includes(lowered)) ||
          (b.description && b.description.toLowerCase().includes(lowered)) ||
          (typeof b.text === 'string' && b.text.toLowerCase().includes(lowered)) ||
          (b.slug && b.slug.toLowerCase().includes(lowered))
        ));

        // Локальный фронтовый индекс
        const localIndex = [
          { title: t('menu.about','О нас'),
            text: t('about.lead','Информация о колледже, миссия, история, достижения'),
            url: '/about', type: 'page' },
          { title: t('menu.spec','Специальности'),
            text: t('specialties.lead','Список специальностей, описание программ, срок обучения'),
            url: '/specialties', type: 'page' },
          { title: t('menu.applicants','Абитуриентам'),
            text: t('applicants.lead','Правила приема, документы, сроки, льготы'),
            url: '/applicants', type: 'page' },
          { title: t('menu.students','Студентам'),
            text: t('students.lead','Расписание, учебные материалы, стипендии'),
            url: '/students', type: 'page' },
          { title: t('menu.teachers','Преподавателям'),
            text: t('teachers.lead','Методические материалы, расписание, объявления'),
            url: '/teachers', type: 'page' },
          { title: t('menu.contacts','Контакты'),
            text: t('contacts.subtitle','Свяжитесь с нами для получения дополнительной информации'),
            url: '/contacts', type: 'page' },
          { title: t('menu.director','Директор колледжа'),
            text: t('director.lead','Обращение директора, профиль и блог'),
            url: '/director', type: 'page' },
          { title: t('menu.news','Новости'),
            text: t('home.news','Новости')+': '+t('news.lead','События и обновления колледжа'),
            url: '/news', type: 'page' },
          { title: t('menu.project','Наши проекты'),
            text: t('projects.lead','Внутренние и внешние проекты, партнерства'),
            url: '/projects', type: 'page' },
        ];
        const filteredLocal = localIndex.filter(it => (
          (it.title && it.title.toLowerCase().includes(lowered)) ||
          (it.text && it.text.toLowerCase().includes(lowered)) ||
          (it.url && it.url.toLowerCase().includes(lowered))
        ));

        const normalizedBlogs = filteredBlogs.map(b => ({
          id: b.id || b.slug,
          title: b.title,
          description: b.description,
          text: b.text,
          slug: b.slug,
          url: b.slug ? `/news/${b.slug}` : undefined,
          type: 'blog'
        }));

        const combined = [...filteredLocal, ...normalizedBlogs];
        if(mounted) setItems(combined);
      })
      .catch(err => {
        console.error('Search error', err?.response || err);
        if(mounted) setError('Ошибка загрузки данных');
      })
      .finally(()=> mounted && setLoading(false));
    return ()=> mounted = false;
  },[q, t]);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
  <h2 className={styles.title}>{t('search.results','Результаты поиска')}</h2>
  <p className={styles.subtitle}>{t('search.query','По запросу:')} <strong>{q}</strong></p>

        {!q && <div className={styles.hint}>{t('search.enter','Введите запрос для поиска')}</div>}
        {q && q.trim().length < minLen && (
          <div className={styles.hint}>{t('search.too_short','Введите минимум 2 символа')}</div>
        )}

        {loading && <div>{t('loading','Загрузка...')}</div>}
        {error && <div className={styles.error}>{error}</div>}

        {!loading && q && q.trim().length >= minLen && items.length === 0 && (
          <div className={styles.empty}>{t('search.no_results','Нет результатов')}</div>
        )}

        <div className={styles.grid}>
          {items.map((it, idx) => (
            <article key={it.url || it.slug || it.id || idx} className={styles.card}>
              <h3>{it.title}</h3>
              <p>{it.description || (it.text && it.text.slice(0,160))}</p>
              {it.url ? (
                <Link to={it.url}>{t('search.open','Открыть')}</Link>
              ) : it.slug ? (
                <Link to={`/news/${it.slug}`}>{t('search.read','Читать')}</Link>
              ) : null}
              {it.type && <div className={styles.badge}>{it.type === 'page' ? t('search.page','Страница') : t('search.news','Новость')}</div>}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

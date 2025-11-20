import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/axios';
import styles from './NewsDetail.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import { useTranslation } from 'react-i18next';

export default function NewsDetail(){
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { t, i18n } = useTranslation();

  // Получаем origin бекенда для картинок (из baseURL без "/api")

  const API_ORIGIN = useMemo(() => {
    const base = api?.defaults?.baseURL || '';
    return base.replace(/\/?api\/?$/, '');
  }, []);

  const buildImageUrl = (image) => {
    if (!image) return null;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith('/')) return `${API_ORIGIN}${image}`;
    return `${API_ORIGIN}/storage/${image}`;
  };

  // Функция для получения перевода из JSON
  const getTranslation = (field) => {
    if (!item) return '';
    try {
      const translations = typeof item.text === 'string' ? JSON.parse(item.text) : null;
      const currentLang = i18n.language; // 'ru', 'kz', 'en'
      
      if (translations && translations[currentLang]) {
        return translations[currentLang][field] || item[field] || '';
      }
    } catch (error) {
      console.error('Ошибка парсинга переводов:', error);
    }
    return item[field] || '';
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError('');
      try{
        // Загружаем новость по slug
        const res = await api.get(`/blogs/${slug}`);
        if (!mounted) return;
        setItem(res.data);
      } catch (err){
        // Фолбэк: получить список и найти по slug (на случай несовпадений маршрутов)
        try {
          const list = await api.get('/blogs');
          const data = Array.isArray(list.data) ? list.data : [];
          const found = data.find(x => String(x.slug) === String(slug));
          if (!mounted) return;
          if (found){
            setItem(found);
          } else {
            setError('Новость не найдена');
          }
        } catch(e){
          if (!mounted) return;
          setError(err?.response?.data?.message || 'Не удалось загрузить новость');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  if (loading) return <div className={styles.state}>Загрузка...</div>;
  if (error) return <div className={`${styles.state} ${styles.error}`}>{error}</div>;
  if (!item) return null;

  return ( 
    <div>
    <Header />
          <div className={styles.directorBlog}>
            <DirectorBlog />
          </div>
          <div className={styles.header}>
            <div className={styles.headerInner}>
              <h1 className={styles.title}>
                {t("students.title", "Новости")}
              </h1>
              <p className={styles.subtitle}>
                {t("students.subtitle", "Информация про новости")}
              </p>
            </div>
          </div>
    <article className={styles.wrap}>
      <div className={styles.topbar}>
        <Link to="/" className={styles.back}>&larr; На главную</Link>
      </div>
      <h1 className={styles.title}>{getTranslation('title')}</h1>
      {item.image && (
        <div
          className={styles.hero}
          style={{ backgroundImage: `url(${buildImageUrl(item.image)})` }}
          aria-label={getTranslation('title')}
        />
      )}
      {getTranslation('description') && <p className={styles.desc}>{getTranslation('description')}</p>}
      {getTranslation('text') && <div className={styles.text}>{getTranslation('text')}</div>}
    </article>
    <Footer />
    </div>
  );
}

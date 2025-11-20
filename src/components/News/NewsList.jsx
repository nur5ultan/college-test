import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../api/axios';
import styles from './NewsList.module.css';
import { Link } from 'react-router-dom';

export default function NewsList({ limit = 3 }) {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  // Функция для получения перевода из JSON или fallback на оригинальное поле
  const getTranslation = (item, field) => {
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
      try {
        const res = await api.get('/blogs');
        let data = Array.isArray(res.data) ? res.data : [];
        if (limit) data = data.slice(0, limit);
        if (mounted) setItems(data);
      } catch (err) {
        console.error('Ошибка загрузки новостей:', err?.response?.status, err?.response?.data || err.message);
        if (mounted) setError(t('news_list.error', 'Не удалось загрузить новости'));
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [limit, t]);

  if (loading) {
    return <div className={styles.state}>{t('news_list.loading', 'Загрузка новостей...')}</div>;
  }

  if (error) {
    return <div className={`${styles.state} ${styles.error}`}>{error}</div>;
  }

  if (!items.length) {
    return <div className={styles.state}>{t('news_list.empty', 'Пока нет новостей')}</div>;
  }

  return (
    <div className={styles.list}>
      {items.map((it) => {
        const title = getTranslation(it, 'title');
        const description = getTranslation(it, 'description');
        
        return (
          <article key={it.slug || it.id} className={styles.card}>
            {it.image && (
              <div
                className={styles.thumb}
                style={{ backgroundImage: `url(${buildImageUrl(it.image)})` }}
                aria-label={title}
              />
            )}
            <div className={styles.info}>
              <h3 className={styles.title}>
                {it.slug ? (
                  <Link to={`/news/${it.slug}`}>{title}</Link>
                ) : (
                  title
                )}
              </h3>
              {description && <p className={styles.desc}>{description}</p>}
            </div>
          </article>
        );
      })}
    </div>
  );
}

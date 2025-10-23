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

  useEffect(()=>{
    if(!q) return;
    let mounted = true;
    setLoading(true);
    api.get('/blogs')
      .then(res => {
        const list = Array.isArray(res.data) ? res.data : (res.data.data || []);
        // клиентский фильтр по title/description/text
        const lowered = q.toLowerCase();
        const filtered = list.filter(b => (
          (b.title && b.title.toLowerCase().includes(lowered)) ||
          (b.description && b.description.toLowerCase().includes(lowered)) ||
          (b.text && b.text.toLowerCase().includes(lowered))
        ));
        if(mounted) setItems(filtered);
      })
      .catch(err => {
        console.error('Search error', err);
      })
      .finally(()=> mounted && setLoading(false));
    return ()=> mounted = false;
  },[q]);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h2>{t('search.results','Результаты поиска')}</h2>
        <p>{t('search.query','По запросу:')} <strong>{q}</strong></p>

        {loading && <div>{t('loading','Загрузка...')}</div>}

        {!loading && q && items.length === 0 && (
          <div>{t('search.no_results','Нет результатов')}</div>
        )}

        <div className={styles.grid}>
          {items.map(it => (
            <article key={it.id} className={styles.card}>
              <h3>{it.title}</h3>
              <p>{it.description || (it.text && it.text.slice(0,150))}</p>
              <Link to={`/blogs/${it.slug}`}>{t('search.read','Читать')}</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

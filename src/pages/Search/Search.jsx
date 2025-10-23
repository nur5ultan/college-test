import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../../api/axios';
import styles from './Search.module.css';

export default function Search(){
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
        <h2>Результаты поиска</h2>
        <p>По запросу: <strong>{q}</strong></p>

        {loading && <div>Загрузка...</div>}

        {!loading && q && items.length === 0 && (
          <div>Нет результатов</div>
        )}

        <div className={styles.grid}>
          {items.map(it => (
            <article key={it.id} className={styles.card}>
              <h3>{it.title}</h3>
              <p>{it.description || (it.text && it.text.slice(0,150))}</p>
              <Link to={`/blogs/${it.slug}`}>Читать</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

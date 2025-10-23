import React, { useEffect, useState } from 'react';
import Announcement from './Announcement';
import styles from './AnnouncementsList.module.css';
import api from '../../api/axios';

export default function AnnouncementsList(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    let mounted = true;
    setLoading(true);
    setError(null);

    api.get('/blogs')
      .then(res => {
        const list = Array.isArray(res.data) ? res.data : (res.data.data || []);

        const mapped = list.map(b => ({
          id: b.id || b.slug || Math.random().toString(36).slice(2,9),
          title: b.title || '',
          date: b.created_at ? new Date(b.created_at).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' }) : (b.date || ''),
          excerpt: b.description || b.text?.slice?.(0,150) || '',
          image: b.image ? (b.image.startsWith('http') ? b.image : `${process.env.REACT_APP_API_URL?.replace(/\/api$|\/$/,'') || ''}${b.image}`) : null,
          slug: b.slug || null,
        }));

        if(mounted){
          setItems(mapped);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Failed to load blogs', err);
        if(mounted){
          setError('Ошибка загрузки объявлений');
          setLoading(false);
        }
      });

    return ()=> { mounted = false };
  },[]);

  if(loading) return <div>Загрузка...</div>;
  if(error) return <div>{error}</div>;

  return (
    <div className={styles.grid}>
      {items.map(it=> <Announcement key={it.id} item={it} />)}
    </div>
  );
}

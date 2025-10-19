import React, { useEffect, useState } from 'react';
import Announcement from './Announcement';
import styles from './AnnouncementsList.module.css';

export default function AnnouncementsList(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('/api/announcements')
      .then(r=>r.json())
      .then(data=>{
        setItems(data || []);
        setLoading(false);
      }).catch(()=> setLoading(false));
  },[]);

  if(loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.grid}>
      {items.map(it=> <Announcement key={it.id} item={it} />)}
    </div>
  );
}

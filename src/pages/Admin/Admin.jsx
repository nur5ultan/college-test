import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';

const ADMIN_CREDENTIALS = { username: 'admin', password: 'secret' };

export default function Admin (){


  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(()=>{
    const token = localStorage.getItem('admin_logged');
    if(token === '1') setIsLogged(true);
  },[]);

  function handleLogin(e){
    e.preventDefault();
    if(user === ADMIN_CREDENTIALS.username && pass === ADMIN_CREDENTIALS.password){
      localStorage.setItem('admin_logged','1');
      setIsLogged(true);
    } else {
      alert('Неверные учётные данные');
    }
  }

  function handleLogout(){
    localStorage.removeItem('admin_logged');
    setIsLogged(false);
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('saving');
    try{
      const res = await fetch('/api/announcements', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ title, date, excerpt, image }) });
      if(res.ok){ setStatus('saved'); setTitle(''); setDate(''); setExcerpt(''); setImage(''); }
      else setStatus('error');
    }catch(err){ setStatus('error'); }
  }

  if(!isLogged){
    return (
      <div className={styles.loginWrap}>
        <form className={styles.loginBox} onSubmit={handleLogin}>
          <h2>Админ панель — вход</h2>
          <label>Имя администратора
            <input value={user} onChange={e=>setUser(e.target.value)} />
          </label>
          <label>Пароль
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          </label>
          <div className={styles.actions}>
            <button type="submit">Войти</button>
          </div>
          <p className={styles.foot}>Используйте: admin / secret (можно изменить в Admin.jsx)</p>
        </form>
      </div>
    );
  }

  return(
    <div>

      <div className={styles.header}>
          <h2>Админ панель</h2>
          <button onClick={handleLogout} className={styles.logout}>Выйти</button>
      </div>

      <div className={styles.adminPanel}>
        <button className={styles.buttonAdmin}>Добавить Новость</button>
        <button className={styles.buttonAdmin}>Добавить Объявления и мероприятия</button>
        <button className={styles.buttonAdmin}>Добавить Фотогалерея</button>
        <button className={styles.buttonAdmin}>Добавить Руководство колледжа</button>
        <button className={styles.buttonAdmin}>Добавить Новость</button>
      </div>
    </div>
  )

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.header}>
  //       <h2>Админ панель</h2>
  //       <button onClick={handleLogout} className={styles.logout}>Выйти</button>
  //     </div>

  //     <section className={styles.section}>
  //       <h3>Добавить объявление</h3>
  //       <form onSubmit={handleSubmit} className={styles.form}>
  //         <label>Заголовок<br/>
  //           <input value={title} onChange={e=>setTitle(e.target.value)} />
  //         </label>
  //         <label>Дата<br/>
  //           <input value={date} onChange={e=>setDate(e.target.value)} />
  //         </label>
  //         <label>Короткий текст<br/>
  //           <textarea value={excerpt} onChange={e=>setExcerpt(e.target.value)} />
  //         </label>
  //         <label>URL изображения (в public/images/...)<br/>
  //           <input value={image} onChange={e=>setImage(e.target.value)} />
  //         </label>
  //         <div>
  //           <button type="submit" className={styles.save}>Сохранить</button>
  //           <span style={{ marginLeft: 12 }}>{status}</span>
  //         </div>
  //       </form>
  //     </section>
  //   </div>
  // )
}

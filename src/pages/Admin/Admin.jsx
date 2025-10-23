import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

// === Super User credentials ===
const SUPER_USER = {
  username: "superuser",
  password: "super12345", // можно поменять
};

export default function Admin() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  // проверяем, есть ли логин в localStorage
  useEffect(() => {
    const token = localStorage.getItem('admin_logged');
    if (token === '1') setIsLogged(true);
  }, []);

  // === Авторизация ===
  function handleLogin(e) {
    e.preventDefault();
    // Проверка Super User локально (до обращения к серверу)
    if (user === SUPER_USER.username && pass === SUPER_USER.password) {
      const userData = { name: user, role: 'superuser' };
      localStorage.setItem('auth_token', 'super_token');
      localStorage.setItem('admin_logged', '1');
      localStorage.setItem('admin_user', JSON.stringify(userData));
      setIsLogged(true);
      return;
    }

    // Если не суперюзер — проверяем через API Laravel
    api.post('/login', { email: user, password: pass })
      .then(res => {
        const data = res.data || {};
        const token = data.token || data.access_token || (data.data && data.data.token);
        if (token) {
          localStorage.setItem('auth_token', token);
          localStorage.setItem('admin_logged', '1');
          localStorage.setItem('admin_user', JSON.stringify(data.user || (data.data && data.data.user) || {}));
          setIsLogged(true);
        } else {
          alert('Ошибка: токен от сервера не получен');
        }
      })
      .catch(err => {
        console.error('login error', err.response || err.message);
        alert('Неверные учётные данные или ошибка сервера');
      });
  }

  // === Выход ===
  function handleLogout() {
    localStorage.removeItem('admin_logged');
    localStorage.removeItem('admin_user');
    localStorage.removeItem('auth_token');
    setIsLogged(false);
  }

  // === Если не вошёл ===
  if (!isLogged) {
    return (
      <div className={styles.loginWrap}>
        <form className={styles.loginBox} onSubmit={handleLogin}>
          <h2>Админ панель — вход</h2>
          <label>Имя администратора
            <input value={user} onChange={e => setUser(e.target.value)} />
          </label>
          <label>Пароль
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
          </label>
          <div className={styles.actions}>
            <button type="submit">Войти</button>
          </div>
          <p className={styles.foot}>
            Используйте: admin / secret (Laravel API) <br />
            или superuser / super12345 (Super User)
          </p>
        </form>
      </div>
    );
  }

  // === Если вошёл ===
  const currentUser = JSON.parse(localStorage.getItem('admin_user') || "{}");
  const isSuperUser = currentUser.role === 'superuser' || currentUser.role === 'super';

  return (
    <div>
      <div className={styles.header}>
        <h2>Админ панель</h2>
        <button onClick={handleLogout} className={styles.logout}>Выйти</button>
      </div>

      <div className={styles.adminPanel}>
         {/* Доступ только суперюзеру */}
        {isSuperUser && (
          <button className={styles.buttonAdmin} onClick={() => navigate('/admin/users')}>
            Пользователи
          </button>
        )}
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/news")}>Добавить новость</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/ads")}>Добавить объявления</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/galery")}>Добавить галерею</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/guide")}>Добавить руководство колледжа</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/document")}>Добавить документы</button>
      </div>
    </div>
  );
}

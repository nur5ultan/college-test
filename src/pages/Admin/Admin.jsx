import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
          <h2>{t('admin.login_title','Админ панель — вход')}</h2>
          <label>{t('admin.label_username','Имя администратора')}
            <input value={user} onChange={e => setUser(e.target.value)} />
          </label>
          <label>{t('admin.label_password','Пароль')}
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
          </label>
          <div className={styles.actions}>
            <button type="submit">{t('admin.login_button','Войти')}</button>
          </div>
          <p className={styles.foot}>
            {t('admin.hint','Используйте: admin / secret (Laravel API)')} <br />
            {t('admin.hint_super','или superuser / super12345 (Super User)')}
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
        <h2>{t('admin.panel_title','Админ панель')}</h2>
        <button onClick={handleLogout} className={styles.logout}>{t('admin.logout','Выйти')}</button>
      </div>

      <div className={styles.adminPanel}>
         {/* Доступ только суперюзеру */}
        {isSuperUser && (
          <button className={styles.buttonAdmin} onClick={() => navigate('/admin/users')}>
            {t('admin.users','Пользователи')}
          </button>
        )}
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/news")}>{t('admin.add_news','Добавить новость')}</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/ads")}>{t('admin.add_ads','Добавить объявления')}</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/galery")}>{t('admin.add_galery','Добавить галерею')}</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/guide")}>{t('admin.add_guide','Добавить руководство колледжа')}</button>
        <button className={styles.buttonAdmin} onClick={() => navigate("/admin/document")}>{t('admin.add_documents','Добавить документы')}</button>
      </div>
    </div>
  );
}

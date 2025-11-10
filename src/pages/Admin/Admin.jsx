import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../api/axios'; // если понадобится вызвать logout на бэке

export default function Admin() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem('admin_logged');
    if (token === '1') setIsLogged(true);
  }, []);

  async function handleLogout() {
    try {
      const token = localStorage.getItem('auth_token');
      if (token && token !== 'super_token') {
        // если не суперюзер — вызываем бэкенд logout
        await api.post('/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.warn('Logout API error:', err?.response?.data || err.message);
      // даже если ошибка — просто продолжаем локальный logout
    } finally {
      // очищаем всё
      localStorage.removeItem('admin_logged');
      localStorage.removeItem('admin_user');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('isAdmin');
      setIsLogged(false);
      navigate('/login', { replace: true }); // редирект на логин
    }
  }

  if (!isLogged) return null;

  const currentUser = JSON.parse(localStorage.getItem('admin_user') || "{}");
  const isSuperUser = currentUser.role === 'superuser' || currentUser.role === 'super';

  return (
    <div>
      <div className={styles.header}>
        <h2>{t('admin.panel_title','Админ панель')}</h2>
        <button onClick={handleLogout} className={styles.logout}>
          {t('admin.logout','Выйти')}
        </button>
      </div>

      <div className={styles.adminPanel}>
        {isSuperUser && (
          <button
            className={styles.buttonAdmin}
            onClick={() => navigate('/admin/users')}
          >
            {t('admin.users','Пользователи')}
          </button>
        )}
        <button
          className={styles.buttonAdmin}
          onClick={() => navigate("/admin/feedback")}
        >
          {t('admin.feedback','Обратная связь')}
        </button>
        <button
          className={styles.buttonAdmin}
          onClick={() => navigate("/admin/news")}
        >
          {t('admin.add_news','Добавить новость')}
        </button>
        <button
          className={styles.buttonAdmin}
          onClick={() => navigate("/admin/document")}
        >
          {t('admin.add_news','Добавить документ')}
        </button>
      </div>
    </div>
  );
}

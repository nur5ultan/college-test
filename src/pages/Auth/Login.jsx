import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../api/axios';
import styles from './Auth.module.css';

export default function Login() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const { state } = useLocation();
  const [login, setLogin] = useState(''); // email или username
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Пробуем несколько возможных путей авторизации (Laravel может иметь разный route)
  async function tryEndpoints(payload) {
    const endpoints = ['/auth/login', '/login'];
    for (const ep of endpoints) {
      try {
        const res = await api.post(ep, payload);
        return res;
      } catch (err) {
        if (err?.response?.status === 404) continue; // пробуем следующий
        throw err;
      }
    }
    throw new Error('Auth endpoint not found');
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      /** ---------- SUPER USER ВХОД (только фронт) ---------- **/
      if (login === 'superuser' && password === 'super12345') {
        const token = 'super_token_123';
        const user = {
          name: 'Super User',
          email: 'super@frontend.local',
          role: 'superuser',
        };

        localStorage.setItem('auth_token', token);
        localStorage.setItem('isSuperUser', 'true');
        localStorage.setItem('isAdmin', 'true'); // чтобы не ломались проверки на админа
        localStorage.setItem('admin_logged', '1');
        localStorage.setItem('admin_user', JSON.stringify(user));

        nav('/admin', { replace: true });
        return;
      }

      /** ---------- Обычный вход через Laravel ---------- **/
      const payload = { email: login, password };
      const res = await tryEndpoints(payload);
      const data = res?.data || {};
      const token = data.token || data.access_token || data?.data?.token;
      const user = data.user || data?.data?.user || { role: 'admin' };

      if (!token) throw new Error('Токен не получен от сервера');

      localStorage.setItem('auth_token', token);
      localStorage.setItem('admin_logged', '1');
      localStorage.setItem('isAdmin', String(user.role === 'admin' || user.role === 'super'));
      localStorage.setItem('admin_user', JSON.stringify(user));

      nav('/admin', { replace: true });
    } catch (err) {
      console.error('Login error', err?.response || err);
      setError(err?.response?.data?.message || 'Неверные данные или ошибка сервера');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.authWrap}>
      <div className={styles.box}>
        <h2 className={styles.title}>{t('auth.login_title', 'Вход в админ-панель')}</h2>
        {state?.message && <div className={styles.error}>{state.message}</div>}
        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            Email или имя пользователя
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className={styles.actions}>
            <button className={styles.primary} disabled={loading}>
              {loading ? t('auth.loading', 'Входим...') : t('auth.login_btn', 'Войти')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

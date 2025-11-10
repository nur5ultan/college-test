import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../api/axios';
import styles from './Auth.module.css';

export default function Register(){
  const { t } = useTranslation();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function tryEndpoints(payload){
    const endpoints = ['/auth/register', '/register'];
    for (const ep of endpoints){
      try{
        const res = await api.post(ep, payload);
        return res;
      }catch(err){
        if (err?.response?.status === 404) continue;
        throw err;
      }
    }
    throw new Error('Register endpoint not found');
  }

  async function onSubmit(e){
    e.preventDefault();
    setError('');
    if(password !== password2){
      setError('Пароли не совпадают');
      return;
    }
    setLoading(true);
    try{
      const res = await tryEndpoints({ name, email, password, password_confirmation: password2 });
      const data = res?.data || {};
      const token = data.token || data.access_token || data?.data?.token;
      const user = data.user || data?.data?.user;
      if (token){
        localStorage.setItem('auth_token', token);
        localStorage.setItem('admin_logged', '1');
        if (user?.role) localStorage.setItem('isAdmin', String(user.role === 'admin' || user.role === 'super'));
        localStorage.setItem('admin_user', JSON.stringify(user || {}));
        nav('/admin', { replace: true });
      } else {
        nav('/login', { replace: true, state: { message: t('auth.register_ok','Регистрация успешна, войдите') } });
      }
    }catch(err){
      console.error('Register error', err?.response || err);
      setError(err?.response?.data?.message || 'Ошибка регистрации');
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className={styles.authWrap}>
      <div className={styles.box}>
        <h2 className={styles.title}>{t('auth.register_title','Регистрация администратора')}</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            Имя
            <input value={name} onChange={e=>setName(e.target.value)} required />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </label>
          <label>
            Пароль
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} />
          </label>
          <label>
            Повторите пароль
            <input type="password" value={password2} onChange={e=>setPassword2(e.target.value)} required minLength={6} />
          </label>
          <div className={styles.actions}>
            <button className={styles.primary} disabled={loading}>
              {loading ? t('auth.loading','Отправка...') : t('auth.register_btn','Зарегистрироваться')}
            </button>
            <Link to="/login" className={styles.secondary}>{t('auth.to_login','Уже есть аккаунт? Войти')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

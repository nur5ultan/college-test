import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import styles from './Users.module.css';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useLocal, setUseLocal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'admin' });
  const navigate = useNavigate();

  // Проверка роли — только superuser может зайти
  useEffect(() => {
    try {
      const raw = localStorage.getItem('admin_user');
      const me = raw ? JSON.parse(raw) : null;
      if (!(me && (me.role === 'superuser' || me.role === 'super'))) {
        alert('Доступ только для Super User');
        window.location.href = '/admin';
      }
    } catch (e) {
      window.location.href = '/admin';
    }
  }, []);

  // Подгружаем пользователей
  useEffect(() => { fetchUsers(); }, []);

  async function fetchUsers() {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('auth_token');
      const res = await api.get('/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(res.data || []);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      setError(msg);
      // Если API недоступно или маршрут не реализован у бэкенда, перейти в локальный режим
      // (поддержка разработчика, у друга еще нет API для Super User)
      try {
        const raw = localStorage.getItem('local_users');
        const local = raw ? JSON.parse(raw) : [];
        setUsers(local);
        setUseLocal(true);
      } catch (e) {
        // не удалось прочитать localStorage — оставить ошибку
      }
    }
    setLoading(false);
  }

  function startCreate() {
    setEditing(null);
    setForm({ name: '', email: '', password: '', role: 'admin' });
  }

  function startEdit(user) {
    setEditing(user.id);
    setForm({
      name: user.name || '',
      email: user.email || '',
      password: '',
      role: user.role || 'admin'
    });
  }

  async function submit() {
    try {
      const token = localStorage.getItem('auth_token');
      if (!form.name || !form.email) {
        alert('Имя и Email обязательны');
        return;
      }

      if (useLocal) {
        // локальное создание/обновление
        if (editing) {
          setUsers(prev => {
            const next = prev.map(u => u.id === editing ? { ...u, name: form.name, email: form.email, role: form.role, ...(form.password ? { password: form.password } : {}) } : u);
            localStorage.setItem('local_users', JSON.stringify(next));
            return next;
          });
        } else {
          const newUser = { id: Date.now(), name: form.name, email: form.email, role: form.role, password: form.password };
          setUsers(prev => {
            const next = [...prev, newUser];
            localStorage.setItem('local_users', JSON.stringify(next));
            return next;
          });
        }
      } else {
        if (editing) {
          // обновление пользователя через API
          const payload = { name: form.name, email: form.email, role: form.role };
          if (form.password) payload.password = form.password;
          await api.put(`/users/${editing}`, payload, {
            headers: { Authorization: `Bearer ${token}` }
          });
        } else {
          // создание нового пользователя через API
          await api.post('/users', form, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }

        await fetchUsers();
      }

      setEditing(null);
      setForm({ name: '', email: '', password: '', role: 'admin' });
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  }

  async function remove(id) {
    if (!window.confirm('Удалить пользователя?')) return;
    try {
      if (useLocal) {
        setUsers(prev => {
          const next = prev.filter(x => x.id !== id);
          localStorage.setItem('local_users', JSON.stringify(next));
          return next;
        });
      } else {
        const token = localStorage.getItem('auth_token');
        await api.delete(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(u => u.filter(x => x.id !== id));
      }
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2>Пользователи</h2>
        <div className={styles.actionsTop}>
          <button onClick={() => navigate('/admin')} className={styles.btn}>Назад</button>
          <button onClick={startCreate} className={styles.btnPrimary}>Создать</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <h3>{editing ? 'Редактировать пользователя' : 'Новый пользователь'}</h3>
          <label className={styles.labelUser}>Имя
            <input className={styles.inputUser} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </label>
          <label className={styles.labelUser}>Email
            <input className={styles.inputUser} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </label>
          <label className={styles.labelUser}>Пароль {editing ? '(оставьте пустым, чтобы не менять)' : ''}
            <input className={styles.inputUser} type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
          </label>
          <label className={styles.labelUser}>Роль
            <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          </label>
          <div className={styles.formActions}>
            <button onClick={submit} className={styles.btnPrimary}>
              {editing ? 'Сохранить' : 'Создать'}
            </button>
            <button onClick={() => { setEditing(null); setForm({ name: '', email: '', password: '', role: 'admin' }); }} className={styles.btn}>
              Отмена
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <h3>Список пользователей</h3>
          {useLocal && <div style={{ color: '#5b3b7a', fontSize: 13, marginBottom: 8 }}>Работа в локальном режиме — данные берутся из localStorage</div>}
          {loading && <div>Загрузка...</div>}
          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.list}>
            {users.map(u => (
              <div key={u.id} className={styles.userRow}>
                <div>
                  <div className={styles.userName}>{u.name}</div>
                  <div className={styles.userEmail}>{u.email}</div>
                </div>
                <div className={styles.rowActions}>
                  <div className={styles.role}>{u.role}</div>
                  <button onClick={() => startEdit(u)} className={styles.btn}>Ред.</button>
                  <button onClick={() => remove(u.id)} className={styles.btnDanger}>Удал.</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

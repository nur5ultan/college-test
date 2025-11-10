import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import styles from './Users.module.css';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // === 1. Создаём Super User при первом запуске ===
  useEffect(() => {
    const superUser = {
      id: 1,
      email: 'superuser',
      password: 'super12345',
      role: 'superuser',
    };
    const raw = localStorage.getItem('local_users');
    const existing = raw ? JSON.parse(raw) : [];
    const found = existing.find((u) => u.email === 'superuser');
    if (!found) {
      localStorage.setItem('local_users', JSON.stringify([...existing, superUser]));
    }
  }, []);

  // === 2. Проверка роли при входе в компонент ===
  useEffect(() => {
    try {
      const raw = localStorage.getItem('admin_user');
      const me = raw ? JSON.parse(raw) : null;
      if (!(me && me.role === 'superuser')) {
        alert('Доступ только для Super User');
        window.location.href = '/admin';
      }
    } catch (e) {
      window.location.href = '/admin';
    }
  }, []);

  // === 3. Загружаем пользователей из localStorage ===
  useEffect(() => {
    const raw = localStorage.getItem('local_users');
    const data = raw ? JSON.parse(raw) : [];
    setUsers(data);
  }, []);

  // === 4. Создание или редактирование пользователя ===
  async function submit() {
    try {
      if (!form.email || !form.password) {
        alert('Email и пароль обязательны');
        return;
      }

      const newAdmin = {
        id: editing || Date.now(),
        email: form.email,
        password: form.password,
        role: 'admin',
      };

      if (editing) {
        // Обновление существующего админа
        setUsers((prev) => {
          const next = prev.map((u) =>
            u.id === editing ? { ...u, ...newAdmin } : u
          );
          localStorage.setItem('local_users', JSON.stringify(next));
          return next;
        });
      } else {
        // === 5. Отправляем регистрацию на backend ===
        await api.post('/register', {
          email: form.email,
          password: form.password,
        });

        // Добавляем в localStorage
        setUsers((prev) => {
          const next = [...prev, newAdmin];
          localStorage.setItem('local_users', JSON.stringify(next));
          return next;
        });
      }

      alert(editing ? 'Пользователь обновлён' : 'Админ успешно добавлен!');
      setEditing(null);
      setForm({ email: '', password: '' });
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  }

  // === 6. Начать редактирование ===
  function startEdit(user) {
    setEditing(user.id);
    setForm({
      email: user.email || '',
      password: '',
    });
  }

  // === 7. Удалить пользователя ===
  function remove(id) {
    if (!window.confirm('Удалить пользователя?')) return;
    setUsers((prev) => {
      const next = prev.filter((u) => u.id !== id);
      localStorage.setItem('local_users', JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2>Пользователи</h2>
        <div className={styles.actionsTop}>
          <button onClick={() => navigate('/admin')} className={styles.btn}>
            Назад
          </button>
          <button
            onClick={() => {
              setEditing(null);
              setForm({ email: '', password: '' });
            }}
            className={styles.btnPrimary}
          >
            Создать
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <h3>{editing ? 'Редактировать пользователя' : 'Новый пользователь'}</h3>
          <label className={styles.labelUser}>
            Email
            <input
              className={styles.inputUser}
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
            />
          </label>
          <label className={styles.labelUser}>
            Пароль {editing ? '(оставьте пустым, чтобы не менять)' : ''}
            <input
              className={styles.inputUser}
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((f) => ({ ...f, password: e.target.value }))
              }
            />
          </label>
          <div className={styles.formActions}>
            <button onClick={submit} className={styles.btnPrimary}>
              {editing ? 'Сохранить' : 'Создать'}
            </button>
            <button
              onClick={() => {
                setEditing(null);
                setForm({ email: '', password: '' });
              }}
              className={styles.btn}
            >
              Отмена
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <h3>Список пользователей</h3>
          <div
            style={{
              color: '#5b3b7a',
              fontSize: 13,
              marginBottom: 8,
            }}
          >
            Все пользователи хранятся в базе
          </div>

          <div className={styles.list}>
            {users.map((u) => (
              <div key={u.id} className={styles.userRow}>
                <div>
                  <div className={styles.userEmail}>{u.email}</div>
                </div>
                <div className={styles.rowActions}>
                  <div className={styles.role}>{u.role}</div>
                  {u.role !== 'superuser' && (
                    <>
                      <button
                        onClick={() => startEdit(u)}
                        className={styles.btn}
                      >
                        Ред.
                      </button>
                      <button
                        onClick={() => remove(u.id)}
                        className={styles.btnDanger}
                      >
                        Удал.
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

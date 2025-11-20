import React, { useEffect, useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Document.module.css";
import api from "../../api/axios";

export default function Document() {
  const [items, setItems] = useState([]); 
  const [title, setTitle] = useState("");
  const [document, setDocument] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false); 
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const API_ORIGIN = useMemo(() => {
    const base = api?.defaults?.baseURL || '';
    return base.replace(/\/?api\/?$/, '');
  }, []);

  const buildFileUrl = (path) => {
    if (!path) return null;
    if (/^https?:\/\//i.test(path)) return path;
    if (path.startsWith('/')) return API_ORIGIN + path;
    return API_ORIGIN + '/' + path;
  };

  const authHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    console.log('Токен авторизации:', token ? 'ЕСТЬ' : 'НЕТ');
    console.log('Полный токен:', token);
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchDocuments = async () => {
    setLoading(true); setError(null);
    try {
      console.log('Загрузка документов...');
      console.log('Базовый URL API:', api.defaults.baseURL);
      const res = await api.get('/documents', { headers: authHeaders() });
      console.log('Ответ сервера:', res);
      console.log('Данные документов:', res.data);
      
      const documents = Array.isArray(res.data) ? res.data : [];
      console.log('Обработанные документы:', documents);
      setItems(documents);
    } catch (e) {
      console.error('Ошибка загрузки документов:', e);
      console.error('Статус ошибки:', e.response?.status);
      console.error('Данные ошибки:', e.response?.data);
      setError('Не удалось загрузить документы');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchDocuments(); 
  }, []);

  function resetForm() {
    setTitle('');
    setDocument(null);
    setEditingId(null);
    setMessage(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null); setMessage(null);

  if (document) {
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(document.type)) {
      setError('Можно загрузить только PDF или Word');
      return;
    }
  }

  const formData = new FormData();
  formData.append('title', title);
  if (document) formData.append('document', document);

  setSaving(true);
  try {
    let url = '/documents';
    if (editingId) {
      url = `/documents/${editingId}?_method=PUT`; 
    }

    await api.post(url, formData, {
      headers: authHeaders() 
    });

    setMessage(editingId ? 'Документ обновлён' : 'Документ добавлен');
    resetForm();
    fetchDocuments();
  } catch (e) {
    console.error('Ошибка:', e.response || e);
    setError(e.response?.data?.message || 'Ошибка сохранения');
  } finally {
    setSaving(false);
  }
};
  const handleEdit = (doc) => {
    setEditingId(doc.id);
    setTitle(doc.title || '');
    setDocument(null);
    if (inputRef.current) inputRef.current.value = null;
    setMessage(null); setError(null);
  };

  
  const handleDelete = async (doc) => {  
  if (!window.confirm('Удалить документ?')) return;

  const formData = new FormData();
  formData.append('_method', 'DELETE');

  try {
    await api.post(`/documents/${doc.slug}`, formData, {  
      headers: {
        ...authHeaders(),
      },
    });

    setItems(prev => prev.filter(d => d.id !== doc.id));
    setMessage('Документ удалён');
  } catch (e) {
    console.error('Ошибка:', e.response || e);
    setError(e.response?.data?.message || 'Не удалось удалить');
  }
};

  return (
    <div className={styles.wrap}>
      <button onClick={() => navigate('/admin')} className={styles.buttonBack}>←</button>

      <div className={styles.left}>
        <h2>{editingId ? 'Редактировать документ' : 'Добавить документ'}</h2>

        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
          <label>
            Заголовок
            <input value={title} onChange={e => setTitle(e.target.value)} required />
          </label>

            <label>
              Файл документа (PDF / Word)
              <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" onChange={e => setDocument(e.target.files[0])} />
            </label>

            <div className={styles.actions}>
              <button type="submit" className={styles.save} disabled={saving}>{saving ? 'Сохранение...' : (editingId ? 'Сохранить' : 'Добавить')}</button>
              <button type="button" className={styles.cancel} onClick={resetForm} disabled={saving}>Очистить</button>
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {message && <div className={styles.success}>{message}</div>}
        </form>
      </div>

      <div className={styles.right}>
        <h2>Список документов</h2>
        {loading && <div>Загрузка...</div>}
        {!loading && items.length === 0 && <div>Документов пока нет</div>}

        <div className={styles.grid}>
          {items.map(doc => (
            <div key={doc.id} className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{doc.title}</h3>
                <p className={styles.itemExcerpt}>{doc.description}</p>
                {doc.document && (
                  <a href={buildFileUrl(doc.document)} target="_blank" rel="noopener noreferrer" className={styles.link}>📄 Открыть файл</a>
                )}
                <div className={styles.cardActions}>
                  <button onClick={() => handleEdit(doc)} className={styles.edit}>Редактировать</button>
                  <button onClick={() => handleDelete(doc)} className={styles.delete}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

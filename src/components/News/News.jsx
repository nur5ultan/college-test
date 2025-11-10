import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./News.module.css";
import api from "../../api/axios"; 

export default function News() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingSlug, setEditingSlug] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Получаем origin бекенда для картинок (из baseURL без "/api")
  const API_ORIGIN = useMemo(() => {
    const base = api?.defaults?.baseURL || '';
    return base.replace(/\/?api\/?$/, '');
  }, []);

  const buildImageUrl = (image) => {
    if (!image) return null;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith('/')) return `${API_ORIGIN}${image}`;
    return `${API_ORIGIN}/${image}`;
  };

  const fetchNews = async () => {
    try {
      const res = await api.get("/blogs");
      setItems(res.data);
    } catch (err) {
      console.error("Ошибка при получении новостей:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("text", text);
      if (imageFile) formData.append("image", imageFile);

      const token = localStorage.getItem('auth_token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      if (editingSlug) {
        await api.post(`/blogs/${editingSlug}?_method=PUT`, formData, {
          headers: { "Content-Type": "multipart/form-data", ...authHeaders },
        });
        alert("Новость обновлена!");
      } else {
        await api.post("/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data", ...authHeaders },
        });
        alert("Новость добавлена!");
      }

      resetForm();
      fetchNews();
    } catch (err) {
      console.error("Ошибка при отправке новости:", err.response || err);
      alert("Ошибка при сохранении новости!");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setText("");
    setImageFile(null);
    setEditingSlug(null);
    if (inputRef.current) inputRef.current.value = null;
  };

  //  Удаление
  const handleDelete = async (slug) => {
    if (!window.confirm("Удалить новость?")) return;
    try {
      const token = localStorage.getItem('auth_token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      await api.delete(`/blogs/${slug}`, { headers: authHeaders });
      setItems((prev) => prev.filter((it) => it.slug !== slug));
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  //  Редактирование
  const handleEdit = (item) => {
    setEditingSlug(item.slug);
    setTitle(item.title);
    setDescription(item.description);
    setText(item.text);
  };

  return (
    <div className={styles.wrap}>
      <button onClick={() => navigate("/admin")} className={styles.buttonBack}>
        ←
      </button>

      <div className={styles.left}>
        <h2>{editingSlug ? "Редактировать новость" : "Добавить новость"}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Заголовок
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>

          <label>
            Краткое описание
            <input value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>

          <label>
            Текст
            <textarea value={text} onChange={(e) => setText(e.target.value)} required />
          </label>

          <label>
            Изображение
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.save}>
              {editingSlug ? "Сохранить" : "Добавить"}
            </button>
            <button type="button" className={styles.cancel} onClick={resetForm}>
              Очистить
            </button>
          </div>
        </form>
      </div>

      <div className={styles.right}>
        <h2>Список новостей</h2>
        {items.length === 0 && <div>Новостей пока нет</div>}

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.slug} className={styles.card}>
              {it.image && (
                <div
                  className={styles.thumb}
                  style={{
                    backgroundImage: `url(${buildImageUrl(it.image)})`,
                  }}
                />
              )}
              <div className={styles.info}>
                <h3>{it.title}</h3>
                <p>{it.description}</p>
                <div className={styles.cardActions}>
                  <button onClick={() => handleEdit(it)} className={styles.edit}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDelete(it.slug)} className={styles.delete}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

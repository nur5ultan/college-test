import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Guide.module.css";

export default function Guide() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const inputRef = useRef(null);
    const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem("guide");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // --- 2. Сохраняем в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("guide", JSON.stringify(items));
  }, [items]);

  function resetForm() {
    setTitle("");
    setContent("");
    setImageFile(null);
    setEditingId(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // создаем превью изображения (base64)
    let imageUrl = null;
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newItem = {
          id: editingId || Date.now(),
          title,
          content,
          image: reader.result,
        };
        saveItem(newItem);
      };
      reader.readAsDataURL(imageFile);
    } else {
      const newItem = {
        id: editingId || Date.now(),
        title,
        content,
        image: null,
      };
      saveItem(newItem);
    }
  }

  function saveItem(newItem) {
    if (editingId) {
      setItems((prev) =>
        prev.map((it) => (it.id === editingId ? newItem : it))
      );
      alert("Руководство обновлена!");
    } else {
      setItems((prev) => [newItem, ...prev]);
      alert("Сотрудник добавлен!");
    }
    resetForm();
  }

  function handleEdit(item) {
    setEditingId(item.id);
    setTitle(item.title || "");
    setContent(item.content || "");
  }

  function handleDelete(id) {
    if (!window.confirm("Удалить сотрудника?")) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  return (
    <div className={styles.wrap}>
        <button
        onClick={() => navigate("/admin")}
        className={styles.buttonBack}>
        ←
        </button>
      <div className={styles.left}>
        <h2>{editingId ? "Редактировать сотрудника" : "Добавить сотрудника"}</h2>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          encType="multipart/form-data"
        >
          <label>
            Заголовок
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Текст
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
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
              {editingId ? "Сохранить" : "Добавить"}
            </button>
            <button
              type="button"
              className={styles.cancel}
              onClick={resetForm}
            >
              Очистить
            </button>
          </div>
        </form>
      </div>

      <div className={styles.right}>
        <h2>Список сотрудников</h2>
        {items.length === 0 && <div>Сотрудников пока нет</div>}

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.id} className={styles.card}>
              {it.image && (
                <div
                  className={styles.thumb}
                  style={{ backgroundImage: `url(${it.image})` }}
                />
              )}
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{it.title}</h3>
                <p className={styles.itemExcerpt}>{it.content}</p>
                <div className={styles.cardActions}>
                  <button
                    onClick={() => handleEdit(it)}
                    className={styles.edit}
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(it.id)}
                    className={styles.delete}
                  >
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

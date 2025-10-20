import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Document.module.css";

export default function Document() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Загружаем документы из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("documents");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Сохраняем документы в localStorage при изменениях
  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(items));
  }, [items]);

  function resetForm() {
    setTitle("");
    setContent("");
    setFile(null);
    setEditingId(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Проверка расширения файла
    if (file) {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(file.type)) {
        alert("Можно загрузить только PDF или Word документ (.doc, .docx, .pdf)");
        return;
      }
    }

    // Сохраняем как base64 для отображения или загрузки
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newItem = {
          id: editingId || Date.now(),
          title,
          content,
          fileName: file.name,
          fileUrl: reader.result,
          fileType: file.type,
        };
        saveItem(newItem);
      };
      reader.readAsDataURL(file);
    } else {
      const newItem = {
        id: editingId || Date.now(),
        title,
        content,
        fileName: null,
        fileUrl: null,
        fileType: null,
      };
      saveItem(newItem);
    }
  }

  function saveItem(newItem) {
    if (editingId) {
      setItems((prev) =>
        prev.map((it) => (it.id === editingId ? newItem : it))
      );
      alert("Документ обновлён!");
    } else {
      setItems((prev) => [newItem, ...prev]);
      alert("Документ добавлен!");
    }
    resetForm();
  }

  function handleEdit(item) {
    setEditingId(item.id);
    setTitle(item.title || "");
    setContent(item.content || "");
  }

  function handleDelete(id) {
    if (!window.confirm("Удалить документ?")) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  return (
    <div className={styles.wrap}>
      <button onClick={() => navigate("/admin")} className={styles.buttonBack}>
        ←
      </button>

      <div className={styles.left}>
        <h2>{editingId ? "Редактировать документ" : "Добавить документ"}</h2>

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
            Описание
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>

          <label>
            Файл документа (PDF / Word)
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.save}>
              {editingId ? "Сохранить" : "Добавить"}
            </button>
            <button type="button" className={styles.cancel} onClick={resetForm}>
              Очистить
            </button>
          </div>
        </form>
      </div>

      <div className={styles.right}>
        <h2>Список документов</h2>
        {items.length === 0 && <div>Документов пока нет</div>}

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.id} className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{it.title}</h3>
                <p className={styles.itemExcerpt}>{it.content}</p>

                {it.fileUrl && (
                  <a
                    href={it.fileUrl}
                    download={it.fileName}
                    className={styles.link}
                  >
                    📄 {it.fileName}
                  </a>
                )}

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

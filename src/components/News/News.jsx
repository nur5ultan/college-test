import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./News.module.css";
import api from "../../api/axios"; 

export default function News() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('ru'); // Активная вкладка языка
  
  // Поля для русского языка
  const [titleRu, setTitleRu] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [textRu, setTextRu] = useState("");
  const [imageFileRu, setImageFileRu] = useState(null);
  
  // Поля для казахского языка
  const [titleKz, setTitleKz] = useState("");
  const [descriptionKz, setDescriptionKz] = useState("");
  const [textKz, setTextKz] = useState("");
  const [imageFileKz, setImageFileKz] = useState(null);
  
  // Поля для английского языка
  const [titleEn, setTitleEn] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [textEn, setTextEn] = useState("");
  const [imageFileEn, setImageFileEn] = useState(null);
  
  const [editingSlug, setEditingSlug] = useState(null);
  const inputRefRu = useRef(null);
  const inputRefKz = useRef(null);
  const inputRefEn = useRef(null);
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
      
      // Собираем переводы в JSON формат
      const translations = {
        ru: {
          title: titleRu,
          description: descriptionRu,
          text: textRu
        },
        kz: {
          title: titleKz,
          description: descriptionKz,
          text: textKz
        },
        en: {
          title: titleEn,
          description: descriptionEn,
          text: textEn
        }
      };

      // Отправляем данные по умолчанию (русский) для обратной совместимости
      formData.append("title", titleRu);
      formData.append("description", descriptionRu);
      
      // Текст содержит JSON со всеми переводами
      formData.append("text", JSON.stringify(translations));
      
      // Изображение - берём первое доступное
      const mainImage = imageFileRu || imageFileKz || imageFileEn;
      if (mainImage) formData.append("image", mainImage);

      // Отладка: проверяем что отправляется
      console.log("📤 Отправляемые данные:");
      console.log("Переводы:", translations);
      for (let pair of formData.entries()) {
        console.log(pair[0], typeof pair[1] === 'object' ? pair[1].name || 'File' : pair[1]);
      }

      const token = localStorage.getItem('auth_token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      
      if (editingSlug) {
        await api.post(`/blogs/${editingSlug}?_method=PUT`, formData, {
          headers: { "Content-Type": "multipart/form-data", ...authHeaders },
        });
        alert("Новость обновлена на всех языках!");
      } else {
        await api.post("/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data", ...authHeaders },
        });
        alert("Новость добавлена на всех языках!");
      }

      resetForm();
      fetchNews();
    } catch (err) {
      console.error("❌ Ошибка при отправке новости:", err.response || err);
      alert("Ошибка при сохранении новости!");
    }
  };

  const resetForm = () => {
    // Русский
    setTitleRu("");
    setDescriptionRu("");
    setTextRu("");
    setImageFileRu(null);
    
    // Казахский
    setTitleKz("");
    setDescriptionKz("");
    setTextKz("");
    setImageFileKz(null);
    
    // Английский
    setTitleEn("");
    setDescriptionEn("");
    setTextEn("");
    setImageFileEn(null);
    
    setEditingSlug(null);
    setActiveTab('ru');
    
    if (inputRefRu.current) inputRefRu.current.value = null;
    if (inputRefKz.current) inputRefKz.current.value = null;
    if (inputRefEn.current) inputRefEn.current.value = null;
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
    try {
      // Парсим JSON из поля text
      const translations = typeof item.text === 'string' ? JSON.parse(item.text) : null;
      
      if (translations && translations.ru) {
        // Если есть структура с переводами
        setTitleRu(translations.ru.title || "");
        setDescriptionRu(translations.ru.description || "");
        setTextRu(translations.ru.text || "");
        
        setTitleKz(translations.kz?.title || "");
        setDescriptionKz(translations.kz?.description || "");
        setTextKz(translations.kz?.text || "");
        
        setTitleEn(translations.en?.title || "");
        setDescriptionEn(translations.en?.description || "");
        setTextEn(translations.en?.text || "");
      } else {
        // Старый формат или обычный текст
        setTitleRu(item.title || "");
        setDescriptionRu(item.description || "");
        setTextRu(item.text || "");
        
        setTitleKz("");
        setDescriptionKz("");
        setTextKz("");
        
        setTitleEn("");
        setDescriptionEn("");
        setTextEn("");
      }
    } catch (error) {
      console.error("Ошибка при парсинге переводов:", error);
      setTitleRu(item.title || "");
      setDescriptionRu(item.description || "");
      setTextRu(item.text || "");
    }
    
    setEditingSlug(item.slug);
  };

  return (
    <div className={styles.wrap}>
      <button onClick={() => navigate("/admin")} className={styles.buttonBack}>
        ←
      </button>

      <div className={styles.left}>
        <h2>{editingSlug ? "Редактировать новость" : "Добавить новость"}</h2>
        <div className={styles.languageTabs}>
          <button
            type="button"
            className={activeTab === 'ru' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('ru')}
          >
            🇷🇺 Русский
          </button>
          <button
            type="button"
            className={activeTab === 'kz' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('kz')}
          >
            🇰🇿 Қазақша
          </button>
          <button
            type="button"
            className={activeTab === 'en' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('en')}
          >
            en English
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {activeTab === 'ru' && (
            <>
              <label>
                Заголовок (Русский)
                <input value={titleRu} onChange={(e) => setTitleRu(e.target.value)} required />
              </label>

              <label>
                Краткое описание (Русский)
                <input value={descriptionRu} onChange={(e) => setDescriptionRu(e.target.value)} required />
              </label>

              <label>
                Текст (Русский)
                <textarea value={textRu} onChange={(e) => setTextRu(e.target.value)} required />
              </label>

              <label>
                Изображение (Русский)
                <input
                  key={`ru-${imageFileRu?.name || 'empty'}`}
                  ref={inputRefRu}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFileRu(file);
                    }
                  }}
                />
                {imageFileRu && (
                  <div className={styles.fileInfo}>
                    ✓ {imageFileRu.name}
                    <button 
                      type="button" 
                      onClick={() => {
                        setImageFileRu(null);
                        if (inputRefRu.current) inputRefRu.current.value = null;
                      }}
                      className={styles.removeFile}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </label>
            </>
          )}

          {/* Казахский язык */}
          {activeTab === 'kz' && (
            <>
              <label>
                Тақырып (Қазақша)
                <input value={titleKz} onChange={(e) => setTitleKz(e.target.value)} required />
              </label>

              <label>
                Қысқаша сипаттама (Қазақша)
                <input value={descriptionKz} onChange={(e) => setDescriptionKz(e.target.value)} required />
              </label>

              <label>
                Мәтін (Қазақша)
                <textarea value={textKz} onChange={(e) => setTextKz(e.target.value)} required />
              </label>

              <label>
                Сурет (Қазақша)
                <input
                  key={`kz-${imageFileKz?.name || 'empty'}`}
                  ref={inputRefKz}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFileKz(file);
                    }
                  }}
                />
                {imageFileKz && (
                  <div className={styles.fileInfo}>
                    ✓ {imageFileKz.name}
                    <button 
                      type="button" 
                      onClick={() => {
                        setImageFileKz(null);
                        if (inputRefKz.current) inputRefKz.current.value = null;
                      }}
                      className={styles.removeFile}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </label>
            </>
          )}

          {/* Английский язык */}
          {activeTab === 'en' && (
            <>
              <label>
                Title (English)
                <input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} required />
              </label>

              <label>
                Short description (English)
                <input value={descriptionEn} onChange={(e) => setDescriptionEn(e.target.value)} required />
              </label>

              <label>
                Text (English)
                <textarea value={textEn} onChange={(e) => setTextEn(e.target.value)} required />
              </label>

              <label>
                Image (English)
                <input
                  key={`en-${imageFileEn?.name || 'empty'}`}
                  ref={inputRefEn}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFileEn(file);
                    }
                  }}
                />
                {imageFileEn && (
                  <div className={styles.fileInfo}>
                    ✓ {imageFileEn.name}
                    <button 
                      type="button" 
                      onClick={() => {
                        setImageFileEn(null);
                        if (inputRefEn.current) inputRefEn.current.value = null;
                      }}
                      className={styles.removeFile}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </label>
            </>
          )}

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

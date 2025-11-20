import React, { useEffect, useState, useMemo } from 'react';
import styles from './DocumentGet.module.css';
import { useTranslation } from 'react-i18next';
import api from '../../api/axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function DocumentGet(){
    const { t } = useTranslation();
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const API_ORIGIN = useMemo(()=>{
        const base = api?.defaults?.baseURL || '';
        return base.replace(/\/?api\/?$/, '');
    },[]);

    const buildFileUrl = (path) => {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith('/')) return API_ORIGIN + path;
  return API_ORIGIN + '/' + path; // например: /documents/resume.pdf
};

    const getFileExtension = (filename) => {
        if (!filename) return '';
        return filename.split('.').pop().toLowerCase();
    };

    const downloadFile = async (fileUrl, filename) => {
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename || 'document';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ошибка при скачивании файла:', error);
        }
    };

    const filteredDocs = docs.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.description && doc.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const fetchDocs = React.useCallback(async () => {
        setLoading(true); setError(null);
        try {
            const res = await api.get('/documents');
            const payload = res?.data;
            const list = Array.isArray(payload)
                ? payload
                : (Array.isArray(payload?.data) ? payload.data : []);
            console.log('Загруженные документы:', list);
            setDocs(list);
        } catch(e){
            console.error('Ошибка загрузки документов', e);
            setError(t('document.get.error','Не удалось загрузить документы'));
        } finally {
            setLoading(false);
        }
    }, [t]);

    useEffect(()=>{ fetchDocs(); },[fetchDocs]);

    return (
        <div>
            <Header />
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>{t('document.get.title','Перечень документов')}</h1>
                    <p className={styles.pageDescription}>
                        {t('document.get.description', 'Здесь вы можете найти все необходимые документы колледжа')}
                    </p>
                </div>

                <div className={styles.searchSection}>
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder={t('document.get.search', 'Поиск документов...')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                        <span className={styles.searchIcon}></span>
                    </div>
                    <div className={styles.stats}>
                        {t('document.get.found', 'Найдено')}: {filteredDocs.length} {t('document.get.documents', 'документов')}
                    </div>
                </div>

                {loading && <div className={styles.status}>{t('common.loading','Загрузка...')}</div>}
                {error && <div className={styles.error}>{error}</div>}
                {!loading && !error && docs.length === 0 && (
                    <div className={styles.empty}>
                        <div className={styles.emptyIcon}>📂</div>
                        <h3>{t('document.get.empty','Документов пока нет')}</h3>
                        <p>{t('document.get.empty_desc', 'Документы появятся здесь после добавления администратором')}</p>
                    </div>
                )}

                <div className={styles.documentsList}>
                    {filteredDocs.map(d => (
                        <div key={d.id} className={styles.documentItem}>
                            <div className={styles.documentHeader}>
                                <div className={styles.documentInfo}>
                                    <h3 className={styles.title}>{d.title}</h3>
                                    {d.document && (
                                        <span className={styles.fileType}>
                                            {getFileExtension(d.document).toUpperCase()} файл
                                        </span>
                                    )}
                                    {d.description && (
                                        <p className={styles.desc}>{d.description}</p>
                                    )}
                                    {/* Отладочная информация */}
                                    {/* <div style={{fontSize: '12px', color: '#999', marginTop: '4px'}}>
                                        Debug: file = {d.document ? d.document : 'НЕТ ФАЙЛА'}
                                    </div> */}
                                </div>
                            </div>
                            
                            {/* Показываем кнопки всегда для отладки */}
                            <div className={styles.actions}>
                                {/* Показываем кнопку просмотра для PDF или всегда для отладки */}
                                {(d.document && getFileExtension(d.document) === 'pdf') || true ? (
                                    <a 
                                        className={styles.viewBtn} 
                                        href={d.document ? buildFileUrl(d.document) : '#'} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={!d.document ? (e) => e.preventDefault() : undefined}
                                    >
                                         {t('document.get.view','Просмотр')}
                                        {!d.document && ' (нет файла)'}
                                    </a>
                                ) : null}
                                {/* Кнопка скачивания всегда показываем для отладки */}
                                <button 
                                    className={styles.downloadBtn}
                                    onClick={() => {
                                        if (d.document) {
                                            downloadFile(buildFileUrl(d.document), d.title)
                                        } else {
                                            alert('У документа нет файла для скачивания')
                                        }
                                    }}
                                >
                                     {t('document.get.download','Скачать')}
                                    {!d.document && ' (нет файла)'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

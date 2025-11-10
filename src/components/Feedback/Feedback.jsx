import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFeedback } from '../../contexts/FeedbackContext';
import api from '../../api/axios';
import styles from './Feedback.module.css';

export default function Feedback() {
    const { t } = useTranslation();
    const { messages, addMessage, markAsRead, updateMessageStatus, deleteMessage } = useFeedback();
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');
    const [remoteMessages, setRemoteMessages] = useState([]);
    const [useRemote, setUseRemote] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    console.log('Feedback component: Сообщения в компоненте', messages);

    // Загружаем сообщения с бэкенда (GET /feedbacks) — если доступно, показываем их, иначе fallback на локальный контекст
    useEffect(() => {
        let mounted = true;
        (async () => {
            setLoading(true);
            setError('');
            try {
                const token = typeof window !== 'undefined' && localStorage.getItem('auth_token');
                const res = await api.get('/feedbacks', token ? { headers: { Authorization: `Bearer ${token}` } } : {});
                const list = Array.isArray(res.data) ? res.data : (res.data?.data || []);
                const mapped = list.map((b, idx) => ({
                    id: b.id ?? b._id ?? `fb_${idx}_${Date.now()}`,
                    name: b.full_name || b.name || '—',
                    email: b.email || '',
                    phone: b.phone || '',
                    subject: b.title || '',
                    message: b.text || '',
                    timestamp: new Date(b.created_at || b.updated_at || Date.now()).getTime(),
                    status: 'new',
                    isRead: false,
                }));
                if (!mounted) return;
                setRemoteMessages(mapped);
                setUseRemote(true);
            } catch (err) {
                console.warn('GET /feedbacks failed, fallback to local context', err?.response || err);
                if (!mounted) return;
                setUseRemote(false);
                setError('');
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false; };
    }, []);

    // Отслеживаем изменения сообщений локального контекста (для отладки)
    useEffect(() => {
        console.log('Feedback component: useEffect - изменения сообщений', messages);
    }, [messages]);

    const handleMessageClick = (message) => {
        if (!message.isRead) {
            if (useRemote) {
                setRemoteMessages(prev => prev.map(m => m.id === message.id ? { ...m, isRead: true } : m));
            } else {
                markAsRead(message.id);
            }
        }
        setSelectedMessage(message);
    };

    const handleStatusChange = (messageId, newStatus) => {
        if (useRemote) {
            setRemoteMessages(prev => prev.map(m => m.id === messageId ? { ...m, status: newStatus } : m));
            setSelectedMessage(s => s && s.id === messageId ? { ...s, status: newStatus } : s);
        } else {
            updateMessageStatus(messageId, newStatus);
        }
    };

    const handleDelete = (messageId) => {
        if (useRemote) {
            setRemoteMessages(prev => prev.filter(m => m.id !== messageId));
        } else {
            deleteMessage(messageId);
        }
        if (selectedMessage && selectedMessage.id === messageId) {
            setSelectedMessage(null);
        }
    };

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return '#e74c3c';
            case 'in-progress': return '#f39c12';
            case 'resolved': return '#27ae60';
            default: return '#95a5a6';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'new': return t('feedback.status.new', 'Новое');
            case 'in-progress': return t('feedback.status.inProgress', 'В работе');
            case 'resolved': return t('feedback.status.resolved', 'Решено');
            default: return status;
        }
    };

    const source = useRemote ? remoteMessages : messages;
    const filteredMessages = source.filter(message => {
        if (filterStatus === 'all') return true;
        if (filterStatus === 'unread') return !message.isRead;
        return message.status === filterStatus;
    });

    return (
        <div className={styles.feedback}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('feedback.title', 'Обратная связь')}</h2>
                <div className={styles.stats}>
                    <span className={styles.totalCount}>
                        {t('feedback.total', 'Всего')}: {source.length}
                    </span>
                    <span className={styles.unreadCount}>
                        {t('feedback.unread', 'Непрочитанных')}: {source.filter(m => !m.isRead).length}
                    </span>
                    {/* <button onClick={addTestMessage} className={styles.testBtn}>
                        Добавить тестовое сообщение
                    </button> */}
                    {loading && <span className={styles.loading}>Загрузка...</span>}
                    {error && <span className={styles.error}>{String(error)}</span>}
                    {useRemote && !loading && !error && <span className={styles.badge}>API</span>}
                </div>
            </div>

            <div className={styles.filters}>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'all' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('all')}
                >
                    {t('feedback.filter.all', 'Все')} ({source.length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'unread' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('unread')}
                >
                    {t('feedback.filter.unread', 'Непрочитанные')} ({source.filter(m => !m.isRead).length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'new' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('new')}
                >
                    {t('feedback.filter.new', 'Новые')} ({source.filter(m => m.status === 'new').length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'in-progress' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('in-progress')}
                >
                    {t('feedback.filter.inProgress', 'В работе')} ({source.filter(m => m.status === 'in-progress').length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'resolved' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('resolved')}
                >
                    {t('feedback.filter.resolved', 'Решено')} ({source.filter(m => m.status === 'resolved').length})
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.messagesList}>
                    {filteredMessages.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📝</div>
                            <h3>{t('feedback.empty.title', 'Нет сообщений')}</h3>
                            <p>{t('feedback.empty.description', 'Здесь будут отображаться сообщения от пользователей.')}</p>
                        </div>
                    ) : (
                        filteredMessages.map(message => (
                            <div 
                                key={message.id} 
                                className={`${styles.messageCard} ${!message.isRead ? styles.unread : ''} ${selectedMessage?.id === message.id ? styles.selected : ''}`}
                                onClick={() => handleMessageClick(message)}
                            >
                                <div className={styles.messageHeader}>
                                    <div className={styles.messageInfo}>
                                        <h4 className={styles.messageName}>{message.name}</h4>
                                        <span className={styles.messageEmail}>{message.email}</span>
                                    </div>
                                    <div className={styles.messageMetadata}>
                                        <span 
                                            className={styles.messageStatus}
                                            style={{ backgroundColor: getStatusColor(message.status) }}
                                        >
                                            {getStatusText(message.status)}
                                        </span>
                                        <span className={styles.messageTime}>
                                            {formatDate(message.timestamp)}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.messageSubject}>
                                    <strong>{message.subject}</strong>
                                </div>
                                <div className={styles.messagePreview}>
                                    {message.message.length > 100 
                                        ? `${message.message.substring(0, 100)}...` 
                                        : message.message
                                    }
                                </div>
                                {message.phone && (
                                    <div className={styles.messagePhone}>
                                        📞 {message.phone}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {selectedMessage && (
                    <div className={styles.messageDetail}>
                        <div className={styles.detailHeader}>
                            <h3>{selectedMessage.subject}</h3>
                            <button 
                                className={styles.closeBtn}
                                onClick={() => setSelectedMessage(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className={styles.detailContent}>
                            <div className={styles.detailInfo}>
                                <div className={styles.detailField}>
                                    <strong>{t('feedback.detail.name', 'Имя')}:</strong> {selectedMessage.name}
                                </div>
                                <div className={styles.detailField}>
                                    <strong>{t('feedback.detail.email', 'Email')}:</strong> {selectedMessage.email}
                                </div>
                                {selectedMessage.phone && (
                                    <div className={styles.detailField}>
                                        <strong>{t('feedback.detail.phone', 'Телефон')}:</strong> {selectedMessage.phone}
                                    </div>
                                )}
                                <div className={styles.detailField}>
                                    <strong>{t('feedback.detail.date', 'Дата')}:</strong> {formatDate(selectedMessage.timestamp)}
                                </div>
                            </div>

                            <div className={styles.detailMessage}>
                                <h4>{t('feedback.detail.message', 'Сообщение')}:</h4>
                                <p>{selectedMessage.message}</p>
                            </div>

                            <div className={styles.detailActions}>
                                <select 
                                    value={selectedMessage.status}
                                    onChange={(e) => handleStatusChange(selectedMessage.id, e.target.value)}
                                    className={styles.statusSelect}
                                >
                                    <option value="new">{t('feedback.status.new', 'Новое')}</option>
                                    <option value="in-progress">{t('feedback.status.inProgress', 'В работе')}</option>
                                    <option value="resolved">{t('feedback.status.resolved', 'Решено')}</option>
                                </select>

                                <button 
                                    className={styles.deleteBtn}
                                    onClick={() => handleDelete(selectedMessage.id)}
                                >
                                    {t('feedback.delete', 'Удалить')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
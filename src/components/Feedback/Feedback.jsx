import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFeedback } from '../../contexts/FeedbackContext';
import styles from './Feedback.module.css';

export default function Feedback() {
    const { t } = useTranslation();
    const { messages, addMessage, markAsRead, updateMessageStatus, deleteMessage } = useFeedback();
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');

    console.log('Feedback component: Сообщения в компоненте', messages);

    // Отслеживаем изменения сообщений
    useEffect(() => {
        console.log('Feedback component: useEffect - изменения сообщений', messages);
    }, [messages]);

    // Функция для добавления тестового сообщения
    const addTestMessage = () => {
        const testMessage = {
            name: 'Тестовый пользователь',
            email: 'test@example.com',
            phone: '+7 777 123 45 67',
            subject: 'Тестовое сообщение',
            message: 'Это тестовое сообщение для проверки работы системы обратной связи.'
        };
        addMessage(testMessage);
    };

    const handleMessageClick = (message) => {
        if (!message.isRead) {
            markAsRead(message.id);
        }
        setSelectedMessage(message);
    };

    const handleStatusChange = (messageId, newStatus) => {
        updateMessageStatus(messageId, newStatus);
    };

    const handleDelete = (messageId) => {
        deleteMessage(messageId);
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

    const filteredMessages = messages.filter(message => {
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
                        {t('feedback.total', 'Всего')}: {messages.length}
                    </span>
                    <span className={styles.unreadCount}>
                        {t('feedback.unread', 'Непрочитанных')}: {messages.filter(m => !m.isRead).length}
                    </span>
                    <button onClick={addTestMessage} className={styles.testBtn}>
                        Добавить тестовое сообщение
                    </button>
                </div>
            </div>

            <div className={styles.filters}>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'all' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('all')}
                >
                    {t('feedback.filter.all', 'Все')} ({messages.length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'unread' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('unread')}
                >
                    {t('feedback.filter.unread', 'Непрочитанные')} ({messages.filter(m => !m.isRead).length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'new' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('new')}
                >
                    {t('feedback.filter.new', 'Новые')} ({messages.filter(m => m.status === 'new').length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'in-progress' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('in-progress')}
                >
                    {t('feedback.filter.inProgress', 'В работе')} ({messages.filter(m => m.status === 'in-progress').length})
                </button>
                <button 
                    className={`${styles.filterBtn} ${filterStatus === 'resolved' ? styles.active : ''}`}
                    onClick={() => setFilterStatus('resolved')}
                >
                    {t('feedback.filter.resolved', 'Решено')} ({messages.filter(m => m.status === 'resolved').length})
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
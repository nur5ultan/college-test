import React, { createContext, useContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => {
    const context = useContext(FeedbackContext);
    console.log('useFeedback: Контекст получен', context);
    if (!context) {
        throw new Error('useFeedback must be used within a FeedbackProvider');
    }
    return context;
};

export const FeedbackProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    console.log('FeedbackProvider: Провайдер инициализирован');

    // Загрузка сообщений из localStorage при инициализации
    useEffect(() => {
        const savedMessages = localStorage.getItem('feedbackMessages');
        console.log('FeedbackContext: Загружаем из localStorage', savedMessages);
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                console.log('FeedbackContext: Загружено сообщений', parsed);
                setMessages(parsed);
            } catch (error) {
                console.error('Error loading feedback messages:', error);
                setMessages([]);
            }
        }
    }, []);

    // Сохранение сообщений в localStorage при изменении
    useEffect(() => {
        console.log('FeedbackContext: Сохраняем в localStorage', messages);
        localStorage.setItem('feedbackMessages', JSON.stringify(messages));
    }, [messages]);

    const addMessage = (messageData) => {
        console.log('FeedbackContext: Добавляем сообщение', messageData);
        const newMessage = {
            id: Date.now() + Math.random(),
            ...messageData,
            timestamp: new Date().toISOString(),
            isRead: false,
            status: 'new' // new, in-progress, resolved
        };
        
        console.log('FeedbackContext: Новое сообщение создано', newMessage);
        setMessages(prev => {
            const updated = [newMessage, ...prev];
            console.log('FeedbackContext: Обновленный список сообщений', updated);
            return updated;
        });
        return newMessage.id;
    };

    const markAsRead = (messageId) => {
        setMessages(prev => 
            prev.map(msg => 
                msg.id === messageId 
                    ? { ...msg, isRead: true }
                    : msg
            )
        );
    };

    const updateMessageStatus = (messageId, status) => {
        setMessages(prev => 
            prev.map(msg => 
                msg.id === messageId 
                    ? { ...msg, status }
                    : msg
            )
        );
    };

    const deleteMessage = (messageId) => {
        setMessages(prev => prev.filter(msg => msg.id !== messageId));
    };

    const getUnreadCount = () => {
        return messages.filter(msg => !msg.isRead).length;
    };

    const value = {
        messages,
        addMessage,
        markAsRead,
        updateMessageStatus,
        deleteMessage,
        getUnreadCount
    };

    return (
        <FeedbackContext.Provider value={value}>
            {children}
        </FeedbackContext.Provider>
    );
};
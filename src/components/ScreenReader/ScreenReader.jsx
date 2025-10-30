import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import styles from './ScreenReader.module.css';

export default function ScreenReader() {
  const [isReaderActive, setIsReaderActive] = useState(false);
  const [isHighContrastMode, setIsHighContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  // Восстанавливаем настройки из localStorage
  useEffect(() => {
    const savedReader = localStorage.getItem('screenReader') === 'true';
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';

    setIsReaderActive(savedReader);
    setIsHighContrastMode(savedContrast);
    setFontSize(savedFontSize);

    // Применяем настройки к документу
    if (savedContrast) {
      document.body.classList.add('high-contrast');
    }
    document.body.classList.add(`font-size-${savedFontSize}`);
  }, []);

  // Управление экранным диктором
  useEffect(() => {
    if (isReaderActive) {
      document.addEventListener("click", handleSpeak);
    } else {
      document.removeEventListener("click", handleSpeak);
      speechSynthesis.cancel();
    }

    localStorage.setItem('screenReader', isReaderActive);
    return () => document.removeEventListener("click", handleSpeak);
  }, [isReaderActive]);

  // Управление контрастностью
  useEffect(() => {
    if (isHighContrastMode) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', isHighContrastMode);
  }, [isHighContrastMode]);

  // Управление размером шрифта
  useEffect(() => {
    document.body.classList.remove('font-size-small', 'font-size-normal', 'font-size-large', 'font-size-extra-large');
    document.body.classList.add(`font-size-${fontSize}`);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const handleSpeak = (e) => {
    if (e.target.closest(`.${styles.accessibilityPanel}`)) return;

    const text = e.target.innerText || e.target.alt || e.target.getAttribute("aria-label") || e.target.title;
    if (!text || text.trim() === '') return;

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru-RU";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  const resetSettings = () => {
    setIsReaderActive(false);
    setIsHighContrastMode(false);
    setFontSize('normal');
    speechSynthesis.cancel();
  };

  return (
    <div className={styles.accessibilityPanel}>
      <button 
        className={styles.accessibilityToggle}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label={t('accessibility.toggle', 'Настройки доступности')}
      >
        <span className={styles.accessibilityIcon}>👁</span>
        <span className={styles.accessibilityText}>
          {t('accessibility.title', 'Версия для слабовидящих')}
        </span>
        <span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.open : ''}`}>▼</span>
      </button>

      {isDropdownOpen && (
        <div className={styles.accessibilityDropdown}>
          <div className={styles.dropdownHeader}>
            <h3>{t('accessibility.settings', 'Настройки доступности')}</h3>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsDropdownOpen(false)}
              aria-label={t('accessibility.close', 'Закрыть')}
            >
              ✕
            </button>
          </div>

          <div className={styles.settingsGroup}>
            <label className={styles.settingItem}>
              <input
                type="checkbox"
                checked={isReaderActive}
                onChange={(e) => setIsReaderActive(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>
                <span className={styles.checkmark}>✓</span>
                {t('accessibility.screenReader', 'Экранный диктор')}
              </span>
              {isReaderActive && (
                <span className={styles.status}>{t('accessibility.active', 'Активен')}</span>
              )}
            </label>

            <label className={styles.settingItem}>
              <input
                type="checkbox"
                checked={isHighContrastMode}
                onChange={(e) => setIsHighContrastMode(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>
                <span className={styles.checkmark}>✓</span>
                {t('accessibility.highContrast', 'Высокий контраст')}
              </span>
            </label>
          </div>

          <div className={styles.settingsGroup}>
            <label className={styles.fontSizeLabel}>
              {t('accessibility.fontSize', 'Размер шрифта')}:
            </label>
            <div className={styles.fontSizeButtons}>
              <button
                className={`${styles.fontSizeBtn} ${fontSize === 'small' ? styles.active : ''}`}
                onClick={() => setFontSize('small')}
              >
                A-
              </button>
              <button
                className={`${styles.fontSizeBtn} ${fontSize === 'normal' ? styles.active : ''}`}
                onClick={() => setFontSize('normal')}
              >
                A
              </button>
              <button
                className={`${styles.fontSizeBtn} ${fontSize === 'large' ? styles.active : ''}`}
                onClick={() => setFontSize('large')}
              >
                A+
              </button>
              <button
                className={`${styles.fontSizeBtn} ${fontSize === 'extra-large' ? styles.active : ''}`}
                onClick={() => setFontSize('extra-large')}
              >
                A++
              </button>
            </div>
          </div>

          <div className={styles.resetSection}>
            <button 
              className={styles.resetBtn}
              onClick={resetSettings}
            >
              {t('accessibility.reset', 'Сбросить настройки')}
            </button>
          </div>

          <div className={styles.description}>
            <p>{t('accessibility.description', 'Настройки сохраняются автоматически и применяются ко всем страницам сайта.')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [q, setQ] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    useEffect(()=>{ if(open && inputRef.current) inputRef.current.focus() },[open]);

        function submitSearch(e){
        e && e.preventDefault();
        if(!q || q.trim() === '') return setOpen(false);
        navigate(`/search?q=${encodeURIComponent(q.trim())}`);
        setOpen(false);
        setQ('');
    }

            function changeLang(l){
                try{ i18n.changeLanguage(l); localStorage.setItem('app_lang', l); }catch(e){/*ignore*/}
            }

    return (
        <header>
            <div className={styles.headerLogo}>
                <a href="/"><img src="/images/logo.png" className={styles.logoImg} alt="Логотип"/></a>
            </div>

            <div className={styles.headerCenter}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <p>{t('lang.label','Язык:')}</p>
                        <button type="button" onClick={()=>changeLang('kz')} className={`${styles.language} ${i18n.language === 'kz' ? styles.activeLang : ''}`}>KZ</button>
                        <button type="button" onClick={()=>changeLang('en')} className={`${styles.language} ${i18n.language === 'en' ? styles.activeLang : ''}`}>EN</button>
                        <button type="button" onClick={()=>changeLang('ru')} className={`${styles.language} ${i18n.language === 'ru' ? styles.activeLang : ''}`}>RU</button>
                    </div>
                    <div className={styles.headerTopRight}>
                        <Link to={'https://www.facebook.com/mkt.aktau/'}><img src="/images/facebook.png" className={styles.socialImg} alt="facebook"/></Link>
                        <Link to={'https://www.youtube.com/'}><img src="/images/youtube.png" className={styles.socialImg} alt="youtube"/></Link>
                        <Link to={'https://www.instagram.com/mangistau_college_tourism/'}><img src="/images/insta.png" className={styles.socialImg} alt="instagram"/></Link>
                    </div>
                </div>

                <div className={styles.headerBottom}>
                    <Link to={'/about'} className={styles.language}>{t('menu.about','О нас')}</Link>
                    <Link to={'/specialties'} className={styles.language}>{t('menu.spec','Специальности')}</Link>
                    <Link to={'/applicants'} className={styles.language}>{t('menu.applicants','Абитуриентам')}</Link>
                    <Link to={'/students'} className={styles.language}>Студентам</Link>
                    <Link to={'#'} className={styles.language}>Преподавателям</Link>
                    <Link to={'/contacts'} className={styles.language}>{t('menu.contacts','Контакты')}</Link>
                </div>
            </div>

            <div className={styles.headerRight}>
                <button className={styles.button} aria-label="Открыть поиск" onClick={()=>setOpen(s=>!s)}>
                    <img src="/images/search.png" className={styles.instrumentImg} alt="Поиск" />
                </button>
                <button className={styles.button}>
                    <img src="/images/burger.png" className={styles.instrumentImg} alt="Меню" />
                </button>
            </div>

            {open && (
                <div className={styles.searchOverlay} onKeyDown={(e)=>{ if(e.key === 'Escape') setOpen(false) }}>
                  <form className={styles.searchForm} onSubmit={submitSearch}>
                    <input ref={inputRef} className={styles.searchInput} value={q} onChange={e=>setQ(e.target.value)} placeholder={t('search.placeholder','Поиск по сайту...')} />
                    <button type="submit" className={styles.searchBtn}>{t('search.find','Найти')}</button>
                  </form>
                </div>
            )}
        </header>
    )
}


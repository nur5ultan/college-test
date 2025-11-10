import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScreenReader from '../ScreenReader/ScreenReader';
import styles from './Header.module.css';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [q, setQ] = useState('');
    const [sidebar, setSidebar] = useState(false);
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
                        <div className={styles.screenReader}>
                            <ScreenReader />
                        </div>
                        <Link to={'https://www.facebook.com/mkt.aktau/'}><img src="/images/facebook.png" className={styles.socialImg} alt="facebook"/></Link>
                        <Link to={'https://www.youtube.com/'}><img src="/images/youtube.png" className={styles.socialImg} alt="youtube"/></Link>
                        <Link to={'https://www.instagram.com/mangistau_college_tourism/'}><img src="/images/insta.png" className={styles.socialImg} alt="instagram"/></Link>
                    </div>
                </div>

                <div className={styles.headerBottom}>
                    <Link to={'/about'} className={styles.language}>{t('menu.about','О нас')}</Link>
                    <Link to={'/specialties'} className={styles.language}>{t('menu.spec','Специальности')}</Link>
                    <Link to={'/applicants'} className={styles.language}>{t('menu.applicants','Абитуриентам')}</Link>
                    <Link to={'/students'} className={styles.language}>{t('menu.students','Студентам')}</Link>
                    <Link to={'/teachers'} className={styles.language}>{t('menu.teachers','Преподавателям')}</Link>
                    <Link to={'/contacts'} className={styles.language}>{t('menu.contacts','Контакты')}</Link>
                </div>
            </div>

            <div className={styles.headerRight}>
                <button className={styles.button} aria-label={t('search.open')} onClick={()=>setOpen(s=>!s)}>
                    <img src="/images/search.png" className={styles.instrumentImg} alt={t('search.icon_alt','Поиск')} />
                </button>
                <button className={styles.button} aria-label={t('menu.open_sidebar')} onClick={()=>setSidebar(s=>!s)}>
                    <img src="/images/burger.png" className={styles.instrumentImg} alt={t('menu.burger_alt','Меню')} />
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
                        {typeof window !== 'undefined' && (
                            <Sidebar isOpen={sidebar} onClose={()=>setSidebar(false)} links={[
                                { to: '/news', label: t('menu.news','Новости') },
                                { to: '/document', label: t('menu.document','Перечень документов') },
                                { to: '/about', label: t('menu.about','О нас') },
                                { to: '/projects', label: t('menu.project','Наши проекты') },
                                { to: '/specialties', label: t('menu.spec','Специальности') },
                                // { to: '/applicants', label: t('menu.applicants','Абитуриентам') },
                                { to: '/students', label: t('menu.students','Студентам') },
                                { to: '/contacts', label: t('menu.contacts','Контакты') },
                                { to: '/applicants', label: t('menu.rules','Правила приема') },
                                { to: '/director', label: t('menu.director','Директор колледжа') },
                            ]} />
                        )}
        </header>
    )
}

function Sidebar({ isOpen, onClose, links=[] }){
        const { t } = useTranslation();
        if(!isOpen) return null;
        return (
            <div className={styles.sidebarOverlay} onClick={onClose} onKeyDown={(e)=>{ if(e.key==='Escape') onClose(); }}>
                <aside className={styles.sidebar} role="dialog" aria-label={t('menu.sidebar_label','Меню')} onClick={e=>e.stopPropagation()}>
                    <button className={styles.sidebarClose} aria-label={t('menu.close','Закрыть')} onClick={onClose}>×</button>
                    <nav className={styles.sidebarNav}>
                        {links.map((l, idx)=> (
                            <Link key={l.to} to={l.to} className={styles.sidebarLink} onClick={onClose} style={{ '--i': idx }}>
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
            </div>
        );
}


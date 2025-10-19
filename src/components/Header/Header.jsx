import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles.headerLogo}>
                <img src="/images/logo.png" className={styles.logoImg}/>
            </div>

            <div className={styles.headerCenter}>

                <div className={styles.headerTop}>

                    <div className={styles.headerTopLeft}>
                        <p>Язык:</p>
                        <a href="#" className={styles.language}>KZ</a>
                        <a href="#" className={styles.language}>EN</a>
                        <a href="#" className={styles.language}>RU</a>
                    </div>
                    <div className={styles.headerTopRight}>
                        <img src="/images/facebook.png" className={styles.socialImg} />
                        <img src="/images/youtube.png" className={styles.socialImg} />
                        <img src="/images/insta.png" className={styles.socialImg} />
                    </div>

                </div>

                <div className={styles.headerBottom}>
                    <a href="#" className={styles.language}>О нас</a>
                    <a href="#" className={styles.language}>Специальности</a>
                    <a href="#" className={styles.language}>Абитуриентам</a>
                    <a href="#" className={styles.language}>Студентам</a>
                    <a href="#" className={styles.language}>Преподавателям</a>
                    <a href="#" className={styles.language}>Контакты</a>
                </div>

            </div>

            <div className={styles.headerRight}>
                <button className={styles.button}>
                    <img src="/images/search.png" className={styles.instrumentImg} />
                </button>
                <button className={styles.button}>
                    <img src="/images/burger.png" className={styles.instrumentImg} />
                </button>
            </div>
        </header>
    )
}



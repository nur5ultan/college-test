import styles from './Footer.module.css';
export default function Footer(){
    return (
        <div>
            <div className={styles.footerSeparator}>
                <div className={styles.footer1}>
                    <h1>Полезные ссылки</h1>
                    <a href="">Контакты</a>
                    <a href="">Специальности</a>
                    <a href="">Отделения</a>
                    <a href="">Экранный диктор</a>
                </div>

                <div className={styles.footer2}>
                    <h1>Поступление</h1>
                    <a href="">Правила приема</a>
                    <a href="">Стоимость обучения</a>
                    <a href="/director">Блог директора</a>
                    <a href="">Вопрос-ответ</a>     
                </div>
                </div>

                <footer>
                    <img src="/images/logo.png" className={styles.footerLogo}/>
                    <p className={styles.footerP}>Мангыстауский колледж туризма</p>
                    <p className={styles.footerRight}>© 2025</p>
                </footer>
        </div>
    );
}
import styles from './DirectorBlog.module.css';
import { Link } from 'react-router-dom';
export default function DirectorBlog(){
    return(
        <aside className={styles.profile}>
            <div className={styles.avatarWrap}>
              <img className={styles.avatar} src="/images/director.jpg" alt="Директор колледжа" />
            </div>
            <h2 className={styles.name}>ФИО Директора</h2>
            <p className={styles.position}>Директор Карагандинского высшего политехнического колледжа</p>

            <div className={styles.contacts}>
              <a href="tel:+77000000000">+7 (700) 000-00-00</a>
              <a href="mailto:director@college.kz">director@college.kz</a>
              <Link to="/director">Блог директора</Link>
            </div>
        </aside>
    )
}
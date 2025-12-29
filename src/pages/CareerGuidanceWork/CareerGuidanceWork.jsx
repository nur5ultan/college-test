import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './CareerGuidanceWork.module.css';
export default function CareerGuidanceWork() {
    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>Проф ориентированная работа</h1>
                </div>
            </div>
            <div className={styles.container}>
                <p>Проф ориентированная работа</p>
                <iframe src="https://drive.google.com/file/d/1OfCu7I3wgoBV2KqJO8ZL2BqwtZnCgYI1/preview" width="900" height="600"></iframe>
            </div>
        </div>
    )
}
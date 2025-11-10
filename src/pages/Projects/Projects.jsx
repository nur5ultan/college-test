import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';
export default function Teachers() {
    const { t } = useTranslation();

    return (
      <div>
        <Header />
        <div className={styles.directorBlog}>
          <DirectorBlog />
        </div>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <h1 className={styles.title}>
              {t("projects.title", "Наши проекты")}
            </h1>
            <p className={styles.subtitle}>
              {t("projects.subtitle", "Информация о проектах колледжа")}
            </p>
          </div>
        </div>

       <div className={styles.content}>
         <h2 className={styles.contentTitle}>
           {t("projects.content.title", "Список проектов")}
         </h2>
            <iframe src="https://drive.google.com/file/d/1n6KI2nb1WJ4-s_AzEyfT61aeb-DNvCJZ/preview" frameborder="0" width="900" height="600"></iframe> <br /><br /> <br /><br />
            <iframe src="https://drive.google.com/file/d/1zi0WmKZwI8sm6AnZ_XHbYIayvHHf7qc0/preview" frameborder="0" width="900" height="600"></iframe><br /><br /><br /><br />
            <iframe src="https://drive.google.com/file/d/1bNP7ZMf-5KvScbkeTCw0Ru9M4G6vsJ01/preview" frameborder="0" width="900" height="600"></iframe>
         {/* <ul className={styles.projectList}>
           <li className={styles.projectItem}>
             {t("projects.content.item1", "Проект 1")}
           </li>
           <li className={styles.projectItem}>
             {t("projects.content.item2", "Проект 2")}
           </li>
           <li className={styles.projectItem}>
             {t("projects.content.item3", "Проект 3")}
           </li>
         </ul> */}
       </div>
        <Footer />
      </div>
    );
}
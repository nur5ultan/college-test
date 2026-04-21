import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewsList from '../../components/News/NewsList';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './NewsIndex.module.css';
import { useTranslation } from 'react-i18next';

export default function NewsIndex(){
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className={styles.directorBlog}>
          <DirectorBlog />
      </div>
      <main className={styles.wrap}>
        <h1 className={styles.title}>{t('home.news', 'Новости')}</h1>
        <NewsList limit={0} />
      </main>
      <Footer />
    </div>
  );
}

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewsList from '../../components/News/NewsList';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './NewsIndex.module.css';

export default function NewsIndex(){
  return (
    <div>
      <Header />
      <div className={styles.directorBlog}>
          <DirectorBlog />
      </div>
      <main className={styles.wrap}>
        <h1 className={styles.title}>Новости</h1>
        <NewsList limit={0} />
      </main>
      <Footer />
    </div>
  );
}

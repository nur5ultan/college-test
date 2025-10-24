import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Teachers.module.css';
export default function Teachers() {
    return (
        <div>
            <Header />
            <h1 className={styles.title}>Учителям</h1>
            <Footer />
        </div>
    );
}
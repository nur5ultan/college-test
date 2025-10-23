import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Students.module.css';
export default function Students(){
    return(
        <div>
            <Header />
               <h1 className={styles.title}>Студентам</h1>
               <p className={styles.p}>Колледжге қабылданған кезде&nbsp; студенттерге арналған жол сілтеуші көмек көрсетеді.</p>
                <p className={styles.p}>2019-2020 оқу жылының топ жетекшілері:</p>
                <p className={styles.p}>қоңырау кестесі</p>
                <p>&nbsp;</p>
                <p>1 ауысым</p>
                <table border="1px">
                <tbody>
                <tr>
                <td width="159">Қос сабақ</td>
                <td width="160">Сабақ реті</td>
                <td width="160">уақыты</td>
                <td width="160">үзіліс</td>
                </tr>
                <tr>
                <td width="159">1</td>
                <td width="160">1</td>
                <td width="160">8.15-8.55</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">2</td>
                <td width="160">9.00-9.40</td>
                <td width="160">15</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">3</td>
                <td width="160">9.55-10.35</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">4</td>
                <td width="160">10.40-11.20</td>
                <td width="160">15</td>
                </tr>
                <tr>
                <td width="159">3</td>
                <td width="160">5</td>
                <td width="160">11.35-12.20</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">6</td>
                <td width="160">12.20-13.00</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">4</td>
                <td width="160">7</td>
                <td width="160">13.05-13.45</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">8</td>
                <td width="160">13.50-14.30</td>
                <td width="160">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                <p>&nbsp;</p>
                <p>2 ауысым</p>
                <table border="1px">
                <tbody>
                <tr>
                <td width="159">қоссабақ</td>
                <td width="160">Сабақ реті</td>
                <td width="160">уақыты</td>
                <td width="160">үзіліс</td>
                </tr>
                <tr>
                <td width="159">0</td>
                <td width="160">&nbsp;</td>
                <td width="160">12.00-12.40</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">&nbsp;</td>
                <td width="160">12.45-13.25</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">1</td>
                <td width="160">1</td>
                <td width="160">13.30-14.10</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">2</td>
                <td width="160">14.15-14.55</td>
                <td width="160">10</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">3</td>
                <td width="160">15.05-15.45</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">4</td>
                <td width="160">15.50-16.30</td>
                <td width="160">10</td>
                </tr>
                <tr>
                <td width="159">2</td>
                <td width="160">5</td>
                <td width="160">16.40-17.20</td>
                <td width="160">5</td>
                </tr>
                <tr>
                <td width="159">&nbsp;</td>
                <td width="160">6</td>
                <td width="160">17.25-18.05</td>
                <td width="160">&nbsp;</td>
                </tr>
                </tbody>
                </table>
            <Footer />
        </div>
    )
}
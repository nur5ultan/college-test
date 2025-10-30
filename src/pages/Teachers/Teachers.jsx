import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Teachers.module.css';
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
              {t("students.title", "Преподаватели")}
            </h1>
            <p className={styles.subtitle}>
              {t("students.subtitle", "Информация про преподавателей")}
            </p>
          </div>
        </div>

        <main className={styles.container}>
          <p className={styles.p}>
            {t(
              "teachers.intro",
              "Наши преподаватели - это высококвалифицированные специалисты с богатым опытом работы в своих областях. Они стремятся передать свои знания и навыки студентам, обеспечивая качественное образование и поддержку на протяжении всего учебного процесса."
            )}
          </p>
          <div id="content" class="site-content">
            <div class="container">
              <div class="inner-wrapper">
                <div id="primary" class="content-area">
                  <article
                    id="post-67"
                    class="post-67 page type-page status-publish hentry"
                  >
                    <div class="entry-content">
                      <h3>&nbsp;Педагогический состав колледжа</h3>
                      <table width="949" border="1px">
                        <tbody>
                          <tr>
                            <td width="33">
                              <strong>№</strong>
                            </td>
                            <td width="175">
                              <strong>Аты-жөні</strong>
                            </td>
                            <td width="103">
                              <strong>Туған жылы</strong>
                            </td>
                            <td width="164">
                              <strong>Қызметі</strong>
                            </td>
                            <td width="51">
                              <strong>Пед.стаж</strong>
                            </td>
                            <td width="51">
                              <strong>&nbsp;</strong>
                            </td>
                            <td width="113">
                              <strong>Санаты</strong>
                            </td>
                            <td width="82">
                              <strong>Білімі</strong>
                            </td>
                            <td width="113">
                              <strong>Тұрақты/штат тыс /бала күтімінде</strong>
                            </td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 1.</td>
                            <td width="175">Абдирахманова Айнур Далабаевна</td>
                            <td width="103">25.01.1984</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Информатика пәні
                              оқытушысы
                            </td>
                            <td width="51">9ж</td>
                            <td width="51">9ай</td>
                            <td width="113">ІІ санат,</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 2.</td>
                            <td width="175">Айткожина Карлыгаш Казбековна</td>
                            <td width="103">10.03.1985</td>
                            <td width="164">
                              Басшының оқу әдістемелік жөніндегі орынбасары
                            </td>
                            <td width="51">15ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-сарапшы, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 3.</td>
                            <td width="175">Алибекова Айна Алпысбаевна</td>
                            <td width="103">21.04.1972</td>
                            <td width="164">
                              <em>Өндірістік оқыту аға шебері</em>
                            </td>
                            <td width="51">10ж</td>
                            <td width="51">8ай</td>
                            <td width="113">педагог-сарапшы, 2020</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 4.</td>
                            <td width="175">
                              Алкувадова Тилектес Гуралбековна
                            </td>
                            <td width="103">24.07.1996</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">5ж</td>
                            <td width="51">2ай</td>
                            <td width="113">педагог-сарапшы, 2022</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 5.</td>
                            <td width="175">Арсланбаев Аяпберген Айтбаевич</td>
                            <td width="103">18.02.1999</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;дене шынықтыру пәні
                              мұғалімі
                            </td>
                            <td width="51">1ж</td>
                            <td width="51">11ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 6.</td>
                            <td width="175">
                              Аскармахмудова Любовь Амангалиевна (совместитель)
                            </td>
                            <td width="103">27.12.1967</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;француз тілінін
                              оқытушысы
                            </td>
                            <td width="51">28ж</td>
                            <td width="51">3ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 7.</td>
                            <td width="175">Аубекерова Ляззат Ермеккалиевна</td>
                            <td width="103">02.10.1980</td>
                            <td width="164">
                              <strong>АБП.&raquo;</strong>Аударма ісі&raquo;
                              мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">20ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-зерттеуші, 2020</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 8.</td>
                            <td width="175">Базарова Гүлнұр Ерлановна</td>
                            <td width="103">30.03.1987</td>
                            <td width="164">
                              <strong>АБП</strong>.&raquo;Туризм&raquo;
                              мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">12ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">ІІ санат, 2014</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;&nbsp;&nbsp; 9.</td>
                            <td width="175">Байтуякова Мадина Акимбековна</td>
                            <td width="103">09.05.1990</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Ағылшын тілі пәні
                              оқытушысы
                            </td>
                            <td width="51">6ж</td>
                            <td width="51">5ай</td>
                            <td width="113">педагог-модератор, 2020</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">10.</td>
                            <td width="175">Басшиева Гаухар Буркитовна</td>
                            <td width="103">23.03.1991</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Ағылшын тілі пәні
                              оқытушысы
                            </td>
                            <td width="51">10ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">11.</td>
                            <td width="175">Беисекова Меирамхан Алибековна</td>
                            <td width="103">10.02.1963</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Химия пәні оқытушысы
                            </td>
                            <td width="51">34ж</td>
                            <td width="51">11ай</td>
                            <td width="113">Жоғары, 2019</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">12.</td>
                            <td width="175">Бекбаева Арай Жанатовна</td>
                            <td width="103">29.08.1980</td>
                            <td width="164">
                              Басшының оқу әдістемелік жөніндегі орынбасары
                            </td>
                            <td width="51">13ж</td>
                            <td width="51">2ай</td>
                            <td width="113">педагог-зертеуші, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">13.</td>
                            <td width="175">
                              Бердіханова Бағылан Бердіханқызы
                            </td>
                            <td width="103">12.03.1993</td>
                            <td width="164">
                              <strong>ЖБП.&nbsp;</strong>Химия пәні оқытушысы
                            </td>
                            <td width="51">6ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">ІІ санат, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">14.</td>
                            <td width="175">Бесбаева Аружан Саматқызы</td>
                            <td width="103">16.11.1998</td>
                            <td width="164">
                              <strong>ЖБП</strong>. Қазақ тілі және әдебиеті
                              пәні оқытушысы.
                            </td>
                            <td width="51">1ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">15.</td>
                            <td width="175">Бисембайқызы Эльмира</td>
                            <td width="103">03.01.1986</td>
                            <td width="164">
                              <strong>АБП</strong>.&raquo;Туризм&raquo;
                              мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">10ж</td>
                            <td width="51">10ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">16.</td>
                            <td width="175">Бисенова Ажар Ходжабердыевна</td>
                            <td width="103">23.04.1962</td>
                            <td width="164">
                              <strong>ЖБП</strong>. орыс тілі және әдебиеті пәні
                              оқытушысы
                            </td>
                            <td width="51">42ж</td>
                            <td width="51">7ай</td>
                            <td width="113">педагог-зертеуші, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">17.</td>
                            <td width="175">Бисенова Асем Саиновна</td>
                            <td width="103">07.08.1991</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">3ж</td>
                            <td width="51">8ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">18.</td>
                            <td width="175">Дәрменбаев Нурлыбек Қобдабайұлы</td>
                            <td width="103">17.04.1993</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Дене тәрбиесі оқытушысы
                            </td>
                            <td width="51">6ж</td>
                            <td width="51">9ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">19.</td>
                            <td width="175">Дәулетбаева Гауһар Төлемісқызы</td>
                            <td width="103">27.05.1982</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Информатика пәні
                              оқытушысы.
                            </td>
                            <td width="51">20ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">Жоғары, 2016</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">20.</td>
                            <td width="175">Демегенова Гүлмаржан Нұржанқызы</td>
                            <td width="103">18.02.1996</td>
                            <td width="164">психолог</td>
                            <td width="51">&nbsp;</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">педагог-сарапшы,2019</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">21.</td>
                            <td width="175">Джумашев Мухтар Каримбердиевич</td>
                            <td width="103">17.02.1980</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Дене тәрбиесі оқытушысы
                            </td>
                            <td width="51">19ж</td>
                            <td width="51">63ай</td>
                            <td width="113">педагог-сарапшы, 2019</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">22.</td>
                            <td width="175">Епенова&nbsp; Лимон Бисенқызы</td>
                            <td width="103">25.01.1974</td>
                            <td width="164">
                              <strong>ЖБП</strong>. Қазақ тілі және әдебиеті
                              пәні оқытушысы.
                            </td>
                            <td width="51">25ж</td>
                            <td width="51">10ай</td>
                            <td width="113">педагог-зерттеуші, 2020</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">
                              23.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              41
                            </td>
                            <td width="175">Есен Елдана Ерболатқызы</td>
                            <td width="103">29.01.2000</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">6ай</td>
                            <td width="113">&nbsp;санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">24.</td>
                            <td width="175">Жамаш Таңшолпан Жомартқызы</td>
                            <td width="103">08.07.1993</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;информатика, математика
                              пәні оқытушысы
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">1ай</td>
                            <td width="113">&nbsp;санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">25.</td>
                            <td width="175">
                              Жанабаева Айгуль Мухамбетияровна
                            </td>
                            <td width="103">10.01.1968</td>
                            <td width="164">
                              басшының өндірістік оқыту ісі жөніндегі орынбасары
                            </td>
                            <td width="51">26ж</td>
                            <td width="51">10ай</td>
                            <td width="113">педагог-зертеуші, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">26.</td>
                            <td width="175">Жапанова Майгул</td>
                            <td width="103">12.05.1970</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;арнайы пән оқытушысы
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">1ай</td>
                            <td width="113">&nbsp;санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">27.</td>
                            <td width="175">Идекешова Маржан Гинаятовна</td>
                            <td width="103">10.01.1965</td>
                            <td width="164">
                              <strong>АБП</strong>. Кәсіби орыс тілі пәнінің
                              оқытушысы
                            </td>
                            <td width="51">35ж</td>
                            <td width="51">9ай</td>
                            <td width="113">Жоғары, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">28.</td>
                            <td width="175">Иманғалиева Улпан Илесқызы</td>
                            <td width="103">11.11.1996</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">4ж</td>
                            <td width="51">6ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">29.</td>
                            <td width="175">Исамбаева Жансұлу Азаматовна</td>
                            <td width="103">03.10.1990</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Туризм&raquo;
                              арнайы пән оқытушысы
                            </td>
                            <td width="51">9ж</td>
                            <td width="51">7ай</td>
                            <td width="113">педагог-сарапшы, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">30.</td>
                            <td width="175">Калиева Баянслу Шаяхметовна</td>
                            <td width="103">04.02.1977</td>
                            <td width="164">
                              <strong>ЖБП</strong>. Физика және математика пәні
                              оқытушысы
                            </td>
                            <td width="51">20ж</td>
                            <td width="51">8ай</td>
                            <td width="113">Жоғары, 2017</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">31.</td>
                            <td width="175">Киргинцева Наталья Николаевна</td>
                            <td width="103">22.08.1960</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">12ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-сарапшы, 2020</td>
                            <td width="82">Арнайы орта</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">32.</td>
                            <td width="175">Кобланова Айман Нурмухановна</td>
                            <td width="103">01.03.1966</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Тарих және қоғамдық
                              пәндер оқытушысы
                            </td>
                            <td width="51">16ж</td>
                            <td width="51">9ай</td>
                            <td width="113">Жоғары, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">33.</td>
                            <td width="175">Коптлеуова Жайна Юсупқызы</td>
                            <td width="103">23.08.1999</td>
                            <td width="164">&nbsp;педагог-ұйымдастырушы</td>
                            <td width="51">&nbsp;</td>
                            <td width="51">11ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">34.</td>
                            <td width="175">Кушанова Гулнур Джексембаевна</td>
                            <td width="103">28.01.1990</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;Экономикалық пәндер
                              оқытушысы
                            </td>
                            <td width="51">8ж</td>
                            <td width="51">8ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;</td>
                            <td width="175">Канлыбаева Салтанат Ерғалиқызы</td>
                            <td width="103">24.01.1997</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Қазақ тілі және
                              әдебиеті пәні оқытушысы
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">5ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;</td>
                            <td width="175">Қойшиева Жансая Жұмасұлтанқызы</td>
                            <td width="103">06.11.1997</td>
                            <td width="164">
                              <strong>АБП</strong>
                              <p>&nbsp;</p>
                              <p>
                                &laquo;Тамақатнуды ұйымдастыру&raquo; арнайы пән
                                оқытушысы
                              </p>
                            </td>
                            <td width="51">3ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">
                              37.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              45
                            </td>
                            <td width="175">Латышева Оксана Геннадиевна</td>
                            <td width="103">11.06.1972</td>
                            <td width="164">
                              <strong>АБП&nbsp;</strong>Қонақ үй шаруашылығы
                              пәні оқытушысы
                            </td>
                            <td width="51">29ж</td>
                            <td width="51">9ай</td>
                            <td width="113">педагог-сарапшы, 2020</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">38.</td>
                            <td width="175">Мармуз Валентин Михайлович</td>
                            <td width="103">13.06.1985</td>
                            <td width="164">
                              <strong>ЖБП&nbsp;</strong>Информатика пәні
                              оқытушысы
                            </td>
                            <td width="51">13ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">
                              39.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              46
                            </td>
                            <td width="175">Мукантаева Гулзада Нурлановна</td>
                            <td width="103">14.02.1979</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">21ж</td>
                            <td width="51">9ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">40.</td>
                            <td width="175">Муратова Батис Альписбаевна</td>
                            <td width="103">16.01.1964</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Тамақтандыруды
                              ұйымдастыру&raquo; мамандығы бойынша арнайы пән
                              оқытушысы
                            </td>
                            <td width="51">11ж</td>
                            <td width="51">11</td>
                            <td width="113">І санат, 2019</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">41.</td>
                            <td width="175">Мухан Азиз Оразмбетұлы</td>
                            <td width="103">03.06.1996</td>
                            <td width="164">
                              &nbsp;<em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">1ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">Арнайы орта</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">42.</td>
                            <td width="175">Нсанов Сарсенбай Даулеткалиевич</td>
                            <td width="103">16.12.1970</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Дене тәрбиесі оқытушысы
                            </td>
                            <td width="51">31ж</td>
                            <td width="51">9ай</td>
                            <td width="113">педагог-зерттеуші</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">43.</td>
                            <td width="175">Нугманова Диляра</td>
                            <td width="103">13.01.1986</td>
                            <td width="164">
                              <strong>ЖБП.</strong>Информатика пәні оқытушысы
                            </td>
                            <td width="51">12ж</td>
                            <td width="51">11ай</td>
                            <td width="113">І санат, 2016</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">
                              44.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              50
                            </td>
                            <td width="175">Нуржанова Сымбат Мирғалиқызы</td>
                            <td width="103">07.08.1995</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">4ж</td>
                            <td width="51">1ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">45.</td>
                            <td width="175">Нуржигитова Жанат Жубатхановна</td>
                            <td width="103">04.08.1991</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">10ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">46.</td>
                            <td width="175">Нұрай Еламан Фараббайұлы</td>
                            <td width="103">06.11.1996</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">
                              8ай
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                            </td>
                            <td width="113">санатсыз</td>
                            <td width="82">Арнайы орта</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">47.</td>
                            <td width="175">Орунбасарова Қамажай</td>
                            <td width="103">13.12.1974</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Аударма
                              ісі&raquo; мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">26ж</td>
                            <td width="51">3ай</td>
                            <td width="113">ІІ санат, 2017</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">48.</td>
                            <td width="175">
                              Орынғалиева Айдана Алдабергенқызы
                            </td>
                            <td width="103">03.07.1997</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Қазақ тілі және
                              әдебиеті пәні оқытушысы.
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">
                              <strong>бала күтімінде</strong>
                            </td>
                          </tr>
                          <tr>
                            <td width="33">49.</td>
                            <td width="175">Өмірзақова Иба Ізімбергенқызы</td>
                            <td width="103">22.06.1962</td>
                            <td width="164">Бөлім меңгерушісі</td>
                            <td width="51">39ж</td>
                            <td width="51">7ай</td>
                            <td width="113">жоғары, 2016</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">50.</td>
                            <td width="175">Пироженко Виктория Андреевна</td>
                            <td width="103">12.06.1963</td>
                            <td width="164">
                              Директордың тәрбие жұмысы жөнінде орынбасары
                            </td>
                            <td width="51">36ж</td>
                            <td width="51">8ай</td>
                            <td width="113">Жоғары, 2017</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">51.</td>
                            <td width="175">
                              Ретбаева Альбина&nbsp; Догдырбаевна
                            </td>
                            <td width="103">05.08.1997</td>
                            <td width="164">
                              <em>өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">11ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">52.</td>
                            <td width="175">Саматова Гүлзада Нұғыметқызы</td>
                            <td width="103">12.01.1991</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Аударма
                              ісі&raquo; мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">9ж</td>
                            <td width="51">6ай</td>
                            <td width="113">ІІ санат, 2015</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">53.</td>
                            <td width="175">
                              Сәрсенгулова Қырмызы Қдырбайқызы
                            </td>
                            <td width="103">23.04.1992</td>
                            <td width="164">Педагог-психолог</td>
                            <td width="51">&nbsp;</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">&nbsp;</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">54.</td>
                            <td width="175">Сәрсенова Мереке Берікқызы</td>
                            <td width="103">05.10.1991</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">9ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-сарапшы, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">55.</td>
                            <td width="175">Субботина Людмила Александровна</td>
                            <td width="103">25.11.1964</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Тамақтандыруды
                              ұйымдастыру&raquo; мамандығы бойынша арнайы пән
                              оқытушысы
                            </td>
                            <td width="51">20ж</td>
                            <td width="51">2ай</td>
                            <td width="113">педагог-сарапшы, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">56.</td>
                            <td width="175">Тәжмағанбетова Нұргүл Сәбитқызы</td>
                            <td width="103">01.03.1992</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Қазақ тілі және
                              әдебиеті пәні оқытушысы.
                            </td>
                            <td width="51">6ж</td>
                            <td width="51">8ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">57.</td>
                            <td width="175">Тохтахунов Алмаз Амутович</td>
                            <td width="103">07.06.1963</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Алғашқы әскери дайындық
                              ұйымдастырушыс, оқытушысы
                            </td>
                            <td width="51">35ж</td>
                            <td width="51">1ай</td>
                            <td width="113">жоғары, 2018</td>
                            <td width="82">Арнайы орта</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">58.</td>
                            <td width="175">Умбетова Раушан Орусбаевна</td>
                            <td width="103">18.02.1969</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">25ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-зертеуші, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">59.</td>
                            <td width="175">Утебаев Мазилбек Нурбосинович</td>
                            <td width="103">11.01.1969</td>
                            <td width="164">Басшы</td>
                            <td width="51">28ж</td>
                            <td width="51">9ай</td>
                            <td width="113">жоғары; екінші санатты басшы</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">60.</td>
                            <td width="175">
                              Чекрыжова Светлана Александровна
                            </td>
                            <td width="103">05.02.1975</td>
                            <td width="164">
                              Басшының оқу ісі жөніндегі орынбасары
                            </td>
                            <td width="51">21ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-сарапшы, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">61.</td>
                            <td width="175">Черипова Шынар Сырымбековна</td>
                            <td width="103">25.03.1991</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;Аударма ісі мамандығы
                              бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">9ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">ІІ санат, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">62.</td>
                            <td width="175">Шадиярқызы Гүлназия</td>
                            <td width="103">12.12.1990</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;арнайы пән оқытушысы
                            </td>
                            <td width="51">10ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">ІІ санат, 2017</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">63.</td>
                            <td width="175">Шайрова Гульнар Султансиыковна</td>
                            <td width="103">24.02.1991</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;&laquo;Аударма
                              ісі&raquo; мамандығы бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">8ж</td>
                            <td width="51">10ай</td>
                            <td width="113">ІІ санат, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">бала күтімінде</td>
                          </tr>
                          <tr>
                            <td width="33">64.</td>
                            <td width="175">Шопанов Сәрсен Қожабергенұлы</td>
                            <td width="103">14.02.1996</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;Туризм&nbsp; мамандығы
                              бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">4ж</td>
                            <td width="51">11ай</td>
                            <td width="113">педагог-модератор, 2021</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">65.</td>
                            <td width="175">Шошанов Даниел Оразбаевич</td>
                            <td width="103">05.01.1989</td>
                            <td width="164">
                              <strong>ЖБП</strong>. Дене тәрбиесі оқытушысы
                            </td>
                            <td width="51">5ж</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">&nbsp;</td>
                            <td width="175">Ысқақова Аружан Набиқызы</td>
                            <td width="103">30.11.1998</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">2ж</td>
                            <td width="51">8ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">
                              67.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              53
                            </td>
                            <td width="175">Бекжанов Азат Нургельдиевич</td>
                            <td width="103">19.02.1968</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Тарих пәні оқытушысы
                            </td>
                            <td width="51">18ж</td>
                            <td width="51">5ай</td>
                            <td width="113">&nbsp;санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">68.</td>
                            <td width="175">
                              Тутин Азамат Токенович
                              <p>&nbsp;</p>
                              <p>(совместитель)</p>
                            </td>
                            <td width="103">
                              03.01.1983
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                            </td>
                            <td width="164">
                              <strong>ЖБП.&nbsp;</strong>Тарих пәні оқытушысы
                            </td>
                            <td width="51">11ж</td>
                            <td width="51">8ай</td>
                            <td width="113">педагог-модератор, 2018</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">69.</td>
                            <td width="175">
                              Тлеуов Қайрат Кипчакбаевич (совместитель)
                            </td>
                            <td width="103">23.08.1979</td>
                            <td width="164">
                              <strong>ЖБП.</strong>&nbsp;Информатика пәні
                              оқытушысы
                            </td>
                            <td width="51">19ж</td>
                            <td width="51">5ай</td>
                            <td width="113">&nbsp;</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">70.</td>
                            <td width="175">Изтурган Диляра Амантаевна</td>
                            <td width="103">17.08.2002</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">11ай</td>
                            <td width="113">санатсыз</td>
                            <td width="82">Арнайы орта</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">71.</td>
                            <td width="175">Джусупов Оркен Муратович</td>
                            <td width="103">09.04.1976</td>
                            <td width="164">
                              <strong>АБП.</strong>&nbsp;Туризм&nbsp; мамандығы
                              бойынша арнайы пән оқытушысы
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">
                              &nbsp;
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                            </td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">72.</td>
                            <td width="175">Абишев Аскар Жумаканович</td>
                            <td width="103">10.02.1992</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">73.</td>
                            <td width="175">Жалгасбаев Айбат Муратулы</td>
                            <td width="103">07.04.1998</td>
                            <td width="164">
                              <em>Өндірістік оқыту шебері</em>
                            </td>
                            <td width="51">&nbsp;</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">Арнайы орта білім</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="33">74.</td>
                            <td width="175">Сайлауова Әлия Нурланқызы</td>
                            <td width="103">09.12.1998</td>
                            <td width="164">педагог-ұйымдастырушы</td>
                            <td width="51">&nbsp;</td>
                            <td width="51">&nbsp;</td>
                            <td width="113">санатсыз</td>
                            <td width="82">жоғары</td>
                            <td width="113">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>&nbsp;</p>
                    </div>
                    <footer class="entry-footer"></footer>
                  </article>
                </div>
                <div
                  id="sidebar-primary"
                  class="widget-area"
                  role="complementary"
                >
                  <aside id="text-5" class="widget widget_text">
                    <div class="textwidget">
                      <p class="font_8">
                        <strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong>
                      </p>
                      <p class="font_8">&nbsp;</p>
                    </div>
                  </aside>
                  <aside id="text-4" class="widget widget_text">
                    <div class="textwidget">
                      <p>&nbsp;</p>
                      <div id="vk_groups">&nbsp;</div>
                      <p>&nbsp;</p>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <footer id="colophon" class="site-footer" role="contentinfo">
            <div class="container">&nbsp;</div>
          </footer>
        </main>

        <Footer />
      </div>
    );
}
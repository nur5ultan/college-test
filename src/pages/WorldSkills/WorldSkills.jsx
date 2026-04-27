import Header from '../../components/Header/Header';
import DirectorBlog from '../../components/DirectorBlog/DirectorBlog';
import styles from './WorldSkills.module.css';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';

export default function WorldSkills() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div>
            <Header />
            <div className={styles.directorBlog}>
                <DirectorBlog />
            </div>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <h1 className={styles.title}>WorldSkills</h1>
                </div>
            </div>
            <div className={styles.container}>

                {/* KAZAKH */}
                {lang === 'kz' && (
                    <>
                        <p><strong><em>МАҢҒЫСТАУ ТУРИЗМ КОЛЛЕДЖІ</em></strong></p>
                        <p>MasterSkills Облыстық кәсіби шеберлік байқауы 2023 жылы Техникалық және кәсіптік, орта білімнен кейінгі білім беру ұйымдарының педагогтері арасындағы сервис және қызмет көрсету саласы бойынша кәсіби шеберліктің республикалық конкурсының облыстық кезеңіне 5 құзіреттілік бойынша қатысуға 9 оқытушы өтінім білдірді. Конкурс қорытындысы бойынша жүлделі орындарға ие болып, республикалық кезеңге жолдама алды.</p>
                        <p>- «Кондитер» құзіреттілігі – Бибіайша Кайырбаева I орын;</p>
                        <p>- «Мейрамхана ісі» құзіреттілігі – Қойшиева Жансая I орын;</p>
                        <p>- «Наубайшы ісі» құзіреттілігі – Иманғалиева Ұлпан I орын;</p>
                        <p>- «Қонақ үй әкімшілігі» құзіреттілігі – Бисембайқызы Эльвира I орын;</p>
                        <p>- «Аспаз ісі» құзіреттілігі бойынша: Нұрай Еламан II орын;</p>
                        <p><strong><em>MasterSkills Республикалық конкурс 2023</em></strong></p>
                        <p>Техникалық және кәсіптік, орта білімнен кейінгі білім беру ұйымдарының педагогтері арасындағы сервис және қызмет көрсету саласы бойынша кәсіби шеберліктің республикалық конкурсына 55 педагог 18 облыстан бақ сынады. Қорытындысы бойынша:</p>
                        <ul>
                            <li>«Мейрамхана ісі» құзіреттілігі – Қойшиева Жансая I орын;</li>
                            <li>«Наубайшы ісі» құзіреттілігі – Иманғалиева Ұлпан I орын;</li>
                            <li>«Қонақ үй әкімшілігі» құзіреттілігі – Черипова Шынар III орын;</li>
                            <li>«Кондитер» құзіреттілігі – Кайырбаева Бибі-Айша III орын;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2023</em></strong></p>
                        <p>17-21 сәуір аралығында WorldSkills Aktau-2023 өңірлік кәсіптік шеберлік чемпионаты өткізілді. Маңғыстау туризм колледжі студенттері 9 құзіреттілік бойынша 17 студент бақ сынап, 7 алтын, 4 күміс медаль еншілеп, 2 студент «Үздік маман» атанды.</p>
                        <ul>
                            <li>«Наубайшы ісі» – I орын Байаманов Тимур;</li>
                            <li>«Кондитер ісі» – I орын Савтаева Асем;</li>
                            <li>«Мейрамхана ісі» – I орын Молдаш Нұрперзент;</li>
                            <li>«Мейрамхана ісі» «Үздік маман» Карабасова Рысгул;</li>
                            <li>«Қонақүй әкімшісі» I орын Джосабай Молдир;</li>
                            <li>«Қонақүй әкімшісі» II орын Ниязбекова Аида;</li>
                            <li>«Аспаз ісі» I орын Алдаяров Асанали;</li>
                            <li>«Визуалды мерчендайзинг және витринистика» I орын Қалымжан Жадыра;</li>
                            <li>«Визуалды мерчендайзинг және витринистика» II орын Ислах Әлия;</li>
                            <li>«Туризм» I орын Баржикова Гульхат;</li>
                            <li>«Туризм» – «Үздік маман» Аманжолқызы Дильназ;</li>
                            <li>«Аударма ісі» II орын Кемалова Алина;</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2023</em></strong></p>
                        <p>23.11-27.11.2023 ж. аралығында «WorldSkills Kazakhstan 2023» VIII Республикалық кәсіби шеберлік чемпионаты өткізілді. Маңғыстау туризм колледжі 5 құзіреттілік бойынша бақ сынап, 1 күміс, 1 қола жүлделі орынға ие болды.</p>
                        <ul>
                            <li>«Наубайшы ісі» – Байаманов Тимур II орын;</li>
                            <li>«Мейрамхана ісі» – Узбекова Арайлым III орын;</li>
                        </ul>
                        <p><strong>«BabySkills» № 46 «Балбұлақ» бөбекжайында</strong></p>
                        <p>Алғаш рет Маңғыстау облысында «Кім болғым келеді?» мамандық фестивалінің облыстық «BabySkills» жобасы жүргізіліп келеді. Бұл жобада әр құзіреттілік бойынша 2 ай бойы дайындық жұмыстары жүргізіледі.</p>
                        <p><strong><em>WorldSkills-2024 колледжішілік</em></strong></p>
                        <p><strong><em>26-28 ақпан аралығында WorldSkills-2024</em></strong> колледжішілік кәсіптік шеберлік чемпионаты өткізілді. Маңғыстау туризм колледжі студенттері 13 құзіреттілік бойынша 14 алтын, 12 күміс, 15 қола және 2 «Үздік маман» атанды.</p>
                        <ul>
                            <li>«Наубайшы ісі» – I орын Байгараева Алма;</li>
                            <li>«Кондитер ісі» – I орын Русланкызы Айбопе;</li>
                            <li>«Қазақтың ұлттық тағамы» – I орын Даулетбаев Рамазан;</li>
                            <li>«Интернет маркетинг» – I орын Болат Жансерік;</li>
                            <li>«Экскурсовод» – I орын Тулешова Даяна;</li>
                            <li>«Графикалық дизайн» – I орын Кәдір Оразгүл;</li>
                            <li>«Аударма ісі» – I орын Нурберген Динара;</li>
                            <li>«Мейрамхана ісі» – I орын Сарбалиева Орынбасар;</li>
                            <li>«Қонақүй әкімшісі» I орын Малюгин Иван;</li>
                            <li>«Аспаз ісі» I орын Койшыбаев Азамат;</li>
                            <li>«Визуалды мерчендайзинг және витринистика» I орын Айкерім Культөре;</li>
                            <li>«Саудалық есептеу» I орын Карасаева Балауса;</li>
                            <li>«Туризм» I орын Абылхан Жанылсын;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2024 20.05-24.05</em></strong></p>
                        <ul>
                            <li>«Аспаз ісі» – Ташкалов Султан – I орын (алтын медаль);</li>
                            <li>«Наубайшы ісі» – Байгараева Алма – I орын (алтын медаль);</li>
                            <li>«Кондитерлік іс» – Ақат Сафарина – I орын (алтын медаль);</li>
                            <li>«Мейрамхана ісі» – Цыцарев Михаил – «Үздік маман»;</li>
                            <li>«Мейрамхана ісі» – Коломиець Александр I орын (алтын медаль);</li>
                            <li>«Қонақ үй әкімшілігі» – Утенов Алпамыс – «Үздік маман»;</li>
                            <li>«Қонақ үй әкімшілігі» – Ниязбекова Аида – I орын (алтын медаль);</li>
                            <li>«Визуалды мерчендайзинг және витринистика» – Палуанов Бекзат – «Үздік маман»;</li>
                            <li>«Визуалды мерчендайзинг және витринистика» – Айкерім Культөре – I орын (алтын медаль);</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2024</em></strong></p>
                        <ul>
                            <li>«Аспаз ісі» – Ташкалов Султан – III орын (қола медаль);</li>
                            <li>«Мейрамхана ісі» – Сарбалиев Орынбасар – «Үздік маман»;</li>
                            <li>«Визуалды мерчендайзинг және витринистика» – Айкерім Культөре – «Үздік маман»;</li>
                        </ul>
                        <p><strong>MasterSkills 5.05-7.05 2024</strong></p>
                        <ul>
                            <li>«Аспаз ісі» – Нуржигитова Жанат – I орын;</li>
                            <li>«Наубайшы ісі» – Ысқақова Аружан – I орын;</li>
                            <li>«Кондитер іс» – Мажитов Мадияр – I орын;</li>
                            <li>«Мейрамхана ісі» – Қайырбаева Бибі-Айша – I орын;</li>
                            <li>«Қонақ үй әкімшілігі» – Базарова Гүлнұр – I орын;</li>
                            <li>«Графикалық дизайн» – Нугманова Диляра – II орын;</li>
                        </ul>
                        <p><strong>MasterSkills республика 14.10-18.10.2024</strong></p>
                        <ul>
                            <li>«Аспаз ісі» – Нуржигитова Жанат – II орын;</li>
                            <li>«Қонақ үй әкімшілігі» – Базарова Гүлнұр – III орын;</li>
                            <li>«Наубайшы ісі» – Ысқақова Аружан – II орын;</li>
                        </ul>
                        <p>WorldSkills стандарттары бойынша демонстрациялық емтиханды 12 бітіруші топ тапсырды (кондитер; аспаз; маркетолог; аудармашы; турист).</p>
                        <p><strong><em>WorldSkills Aktau-2025</em></strong></p>
                    </>
                )}

                {/* RUSSIAN */}
                {lang === 'ru' && (
                    <>
                        <p><strong><em>МАҢҒЫСТАУ ТУРИЗМ КОЛЛЕДЖІ</em></strong></p>
                        <p>В 2023 году на Областной конкурс профессионального мастерства MasterSkills среди педагогов организаций ТиПО в сфере сервиса и обслуживания подали заявки 9 преподавателей по 5 компетенциям. По итогам конкурса призёры получили путёвки на республиканский этап. Результаты областного этапа:</p>
                        <p>- Компетенция «Кондитер» – Кайырбаева Бибіайша — 1-е место;</p>
                        <p>- Компетенция «Ресторанное дело» – Қойшиева Жансая — 1-е место;</p>
                        <p>- Компетенция «Хлебопекарное дело» – Иманғалиева Ұлпан — 1-е место;</p>
                        <p>- Компетенция «Администратор отеля» – Бисембайқызы Эльвира — 1-е место;</p>
                        <p>- Компетенция «Поварское дело»: Нұрай Еламан — 2-е место;</p>
                        <p><strong><em>MasterSkills — Республиканский конкурс 2023</em></strong></p>
                        <p>В республиканском конкурсе профессионального мастерства приняли участие 55 педагогов из 18 областей. Результаты:</p>
                        <ul>
                            <li>Компетенция «Ресторанное дело» – Қойшиева Жансая — 1-е место;</li>
                            <li>Компетенция «Хлебопекарное дело» – Иманғалиева Ұлпан — 1-е место;</li>
                            <li>Компетенция «Администратор отеля» – Черипова Шынар — 3-е место;</li>
                            <li>Компетенция «Кондитер» – Кайырбаева Бибі-Айша — 3-е место;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2023</em></strong></p>
                        <p>С 17 по 21 апреля прошёл региональный чемпионат WorldSkills Aktau-2023. Студенты Мангистауского колледжа туризма выступили по 9 компетенциям (17 студентов) и завоевали 7 золотых, 4 серебряных медали, 2 студента удостоены звания «Лучший специалист».</p>
                        <ul>
                            <li>«Хлебопекарное дело» – 1-е место Байаманов Тимур;</li>
                            <li>«Кондитерское дело» – 1-е место Савтаева Асем;</li>
                            <li>«Ресторанное дело» – 1-е место Молдаш Нұрперзент;</li>
                            <li>«Ресторанное дело» — «Лучший специалист» Карабасова Рысгул;</li>
                            <li>«Администратор отеля» — 1-е место Джосабай Молдир;</li>
                            <li>«Администратор отеля» — 2-е место Ниязбекова Аида;</li>
                            <li>«Поварское дело» — 1-е место Алдаяров Асанали;</li>
                            <li>«Визуальный мерчендайзинг» — 1-е место Қалымжан Жадыра;</li>
                            <li>«Визуальный мерчендайзинг» — 2-е место Ислах Әлия;</li>
                            <li>«Туризм» — 1-е место Баржикова Гульхат;</li>
                            <li>«Туризм» — «Лучший специалист» Аманжолқызы Дильназ;</li>
                            <li>«Переводческое дело» — 2-е место Кемалова Алина;</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2023</em></strong></p>
                        <p>С 23 по 27 ноября 2023 г. прошёл VIII Республиканский чемпионат WorldSkills Kazakhstan 2023. Колледж выступил по 5 компетенциям и завоевал 1 серебряную и 1 бронзовую медаль.</p>
                        <ul>
                            <li>«Хлебопекарное дело» – Байаманов Тимур — 2-е место;</li>
                            <li>«Ресторанное дело» – Узбекова Арайлым — 3-е место;</li>
                        </ul>
                        <p><strong>WorldSkills-2024 — внутриколледжный чемпионат</strong></p>
                        <p>С 26 по 28 февраля прошёл внутриколледжный чемпионат WorldSkills-2024. Студенты выступили по 13 компетенциям и завоевали 14 золотых, 12 серебряных, 15 бронзовых медалей, 2 студента получили звание «Лучший специалист».</p>
                        <ul>
                            <li>«Хлебопекарное дело» – 1-е место Байгараева Алма;</li>
                            <li>«Кондитерское дело» – 1-е место Русланкызы Айбопе;</li>
                            <li>«Казахская национальная кухня» – 1-е место Даулетбаев Рамазан;</li>
                            <li>«Интернет-маркетинг» – 1-е место Болат Жансерік;</li>
                            <li>«Экскурсовод» – 1-е место Тулешова Даяна;</li>
                            <li>«Графический дизайн» – 1-е место Кәдір Оразгүл;</li>
                            <li>«Переводческое дело» – 1-е место Нурберген Динара;</li>
                            <li>«Ресторанное дело» – 1-е место Сарбалиева Орынбасар;</li>
                            <li>«Администратор отеля» — 1-е место Малюгин Иван;</li>
                            <li>«Поварское дело» — 1-е место Койшыбаев Азамат;</li>
                            <li>«Визуальный мерчендайзинг» — 1-е место Айкерім Культөре;</li>
                            <li>«Торговый учёт» — 1-е место Карасаева Балауса;</li>
                            <li>«Туризм» — 1-е место Абылхан Жанылсын;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2024 (20–24 мая)</em></strong></p>
                        <ul>
                            <li>«Поварское дело» – Ташкалов Султан – 1-е место (золотая медаль);</li>
                            <li>«Хлебопекарное дело» – Байгараева Алма – 1-е место (золотая медаль);</li>
                            <li>«Кондитерское дело» – Ақат Сафарина – 1-е место (золотая медаль);</li>
                            <li>«Ресторанное дело» – Цыцарев Михаил – «Лучший специалист»;</li>
                            <li>«Ресторанное дело» – Коломиець Александр — 1-е место (золотая медаль);</li>
                            <li>«Администратор отеля» – Утенов Алпамыс – «Лучший специалист»;</li>
                            <li>«Администратор отеля» – Ниязбекова Аида – 1-е место (золотая медаль);</li>
                            <li>«Визуальный мерчендайзинг» – Палуанов Бекзат – «Лучший специалист»;</li>
                            <li>«Визуальный мерчендайзинг» – Айкерім Культөре – 1-е место (золотая медаль);</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2024</em></strong></p>
                        <ul>
                            <li>«Поварское дело» – Ташкалов Султан – 3-е место (бронзовая медаль);</li>
                            <li>«Ресторанное дело» – Сарбалиев Орынбасар – «Лучший специалист»;</li>
                            <li>«Визуальный мерчендайзинг» – Айкерім Культөре – «Лучший специалист»;</li>
                        </ul>
                        <p><strong>MasterSkills 5–7 мая 2024</strong></p>
                        <ul>
                            <li>«Поварское дело» – Нуржигитова Жанат – 1-е место;</li>
                            <li>«Хлебопекарное дело» – Ысқақова Аружан – 1-е место;</li>
                            <li>«Кондитерское дело» – Мажитов Мадияр – 1-е место;</li>
                            <li>«Ресторанное дело» – Қайырбаева Бибі-Айша – 1-е место;</li>
                            <li>«Администратор отеля» – Базарова Гүлнұр – 1-е место;</li>
                            <li>«Графический дизайн» – Нугманова Диляра – 2-е место;</li>
                        </ul>
                        <p><strong>MasterSkills — Республика 14–18 октября 2024</strong></p>
                        <ul>
                            <li>«Поварское дело» – Нуржигитова Жанат – 2-е место;</li>
                            <li>«Администратор отеля» – Базарова Гүлнұр – 3-е место;</li>
                            <li>«Хлебопекарное дело» – Ысқақова Аружан – 2-е место;</li>
                        </ul>
                        <p>Демонстрационный экзамен по стандартам WorldSkills прошли 12 выпускных групп (кондитер; повар; маркетолог; переводчик; туризм).</p>
                        <p><strong><em>WorldSkills Aktau-2025</em></strong></p>
                    </>
                )}

                {/* ENGLISH */}
                {lang === 'en' && (
                    <>
                        <p><strong><em>MANGISTAU COLLEGE OF TOURISM</em></strong></p>
                        <p>In 2023, 9 teachers applied to participate in the regional MasterSkills competition in 5 competencies among TVE teachers in the service sector. The winners advanced to the republican stage. Regional results:</p>
                        <p>- "Pastry" competency – Kayyrbayeva Bibiaysha — 1st place;</p>
                        <p>- "Restaurant service" competency – Qoyshiyeva Zhansaya — 1st place;</p>
                        <p>- "Bakery" competency – Imangaliyeva Ulpan — 1st place;</p>
                        <p>- "Hotel administration" competency – Bisembaykyzy Elvira — 1st place;</p>
                        <p>- "Cooking" competency: Nuray Elaman — 2nd place;</p>
                        <p><strong><em>MasterSkills — Republican Competition 2023</em></strong></p>
                        <p>55 teachers from 18 regions competed in the republican competition. Results:</p>
                        <ul>
                            <li>"Restaurant service" competency – Qoyshiyeva Zhansaya — 1st place;</li>
                            <li>"Bakery" competency – Imangaliyeva Ulpan — 1st place;</li>
                            <li>"Hotel administration" competency – Cheripova Shynar — 3rd place;</li>
                            <li>"Pastry" competency – Kayyrbayeva Bibi-Aysha — 3rd place;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2023</em></strong></p>
                        <p>The regional WorldSkills Aktau-2023 championship was held April 17–21. Mangistau College of Tourism students competed in 9 competencies (17 students), winning 7 gold and 4 silver medals; 2 students received "Best Expert" titles.</p>
                        <ul>
                            <li>"Bakery" – 1st place Bayamanov Timur;</li>
                            <li>"Pastry" – 1st place Savtayeva Asem;</li>
                            <li>"Restaurant service" – 1st place Moldash Nurperzent;</li>
                            <li>"Restaurant service" – "Best Expert" Karabasova Rysgul;</li>
                            <li>"Hotel administration" – 1st place Dzhosabay Moldir;</li>
                            <li>"Hotel administration" – 2nd place Niyazbekova Aida;</li>
                            <li>"Cooking" – 1st place Aldayarov Asanali;</li>
                            <li>"Visual merchandising" – 1st place Qalymzhan Zhadyra;</li>
                            <li>"Visual merchandising" – 2nd place Islakh Aliya;</li>
                            <li>"Tourism" – 1st place Barzhikova Gulkhat;</li>
                            <li>"Tourism" – "Best Expert" Amanzholkyzy Dilnaz;</li>
                            <li>"Translation" – 2nd place Kemalova Alina;</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2023</em></strong></p>
                        <p>The VIII Republican Championship WorldSkills Kazakhstan 2023 was held November 23–27, 2023. The college competed in 5 competencies, winning 1 silver and 1 bronze medal.</p>
                        <ul>
                            <li>"Bakery" – Bayamanov Timur — 2nd place;</li>
                            <li>"Restaurant service" – Uzbekova Araylyn — 3rd place;</li>
                        </ul>
                        <p><strong>WorldSkills-2024 — In-College Championship</strong></p>
                        <p>The in-college WorldSkills-2024 championship was held February 26–28. Students competed in 13 competencies, winning 14 gold, 12 silver, 15 bronze medals; 2 students received "Best Expert" titles.</p>
                        <ul>
                            <li>"Bakery" – 1st place Baygrayeva Alma;</li>
                            <li>"Pastry" – 1st place Ruslankyzy Aybope;</li>
                            <li>"Kazakh national cuisine" – 1st place Dauletbayev Ramazan;</li>
                            <li>"Internet marketing" – 1st place Bolat Zhanserik;</li>
                            <li>"Tourism guide" – 1st place Tuleshova Dayana;</li>
                            <li>"Graphic design" – 1st place Kadir Orazgul;</li>
                            <li>"Translation" – 1st place Nurbergen Dinara;</li>
                            <li>"Restaurant service" – 1st place Sarbaliyeva Orynbasar;</li>
                            <li>"Hotel administration" – 1st place Malyugin Ivan;</li>
                            <li>"Cooking" – 1st place Koishybayev Azamat;</li>
                            <li>"Visual merchandising" – 1st place Aykerim Kultore;</li>
                            <li>"Trade accounting" – 1st place Karasayeva Balauса;</li>
                            <li>"Tourism" – 1st place Abylkhan Zhanylsyn;</li>
                        </ul>
                        <p><strong><em>WorldSkills Aktau-2024 (May 20–24)</em></strong></p>
                        <ul>
                            <li>"Cooking" – Tashkalov Sultan – 1st place (gold medal);</li>
                            <li>"Bakery" – Baygrayeva Alma – 1st place (gold medal);</li>
                            <li>"Pastry" – Aqat Safarina – 1st place (gold medal);</li>
                            <li>"Restaurant service" – Tsytsarev Mikhail – "Best Expert";</li>
                            <li>"Restaurant service" – Kolomiyets Alexander — 1st place (gold medal);</li>
                            <li>"Hotel administration" – Utenov Alpamys – "Best Expert";</li>
                            <li>"Hotel administration" – Niyazbekova Aida – 1st place (gold medal);</li>
                            <li>"Visual merchandising" – Paluanov Bekzat – "Best Expert";</li>
                            <li>"Visual merchandising" – Aykerim Kultore – 1st place (gold medal);</li>
                        </ul>
                        <p><strong><em>WorldSkills Kazakhstan 2024</em></strong></p>
                        <ul>
                            <li>"Cooking" – Tashkalov Sultan – 3rd place (bronze medal);</li>
                            <li>"Restaurant service" – Sarbaliyev Orynbasar – "Best Expert";</li>
                            <li>"Visual merchandising" – Aykerim Kultore – "Best Expert";</li>
                        </ul>
                        <p><strong>MasterSkills May 5–7, 2024</strong></p>
                        <ul>
                            <li>"Cooking" – Nurzhigitova Zhanat – 1st place;</li>
                            <li>"Bakery" – Yskaqova Aruzhаn – 1st place;</li>
                            <li>"Pastry" – Mazhitov Madiyar – 1st place;</li>
                            <li>"Restaurant service" – Qayyrbayeva Bibi-Aysha – 1st place;</li>
                            <li>"Hotel administration" – Bazarova Gulnur – 1st place;</li>
                            <li>"Graphic design" – Nugmanova Dilyara – 2nd place;</li>
                        </ul>
                        <p><strong>MasterSkills Republican — October 14–18, 2024</strong></p>
                        <ul>
                            <li>"Cooking" – Nurzhigitova Zhanat – 2nd place;</li>
                            <li>"Hotel administration" – Bazarova Gulnur – 3rd place;</li>
                            <li>"Bakery" – Yskaqova Aruzhаn – 2nd place;</li>
                        </ul>
                        <p>Demonstration exams per WorldSkills standards were passed by 12 graduating groups (pastry; cooking; marketing; translation; tourism).</p>
                        <p><strong><em>WorldSkills Aktau-2025</em></strong></p>
                    </>
                )}

            </div>
            <Footer />
        </div>
    );
}

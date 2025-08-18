export const menuFoodCategories = [
  {
    title: 'Завтраки',
    img: '/menu-food/breakfasts/англиийский 2.webp',
  },
  {
    title: 'Холодные закуски',
    img: '/menu-food/food/вителло тоннато.webp',
  },
  {
    title: 'Салаты',
    img: '/menu-food/food/теплый картофельный салат.webp',
  },
  {
    title: 'Горячие закуски',
    img: '/menu-food/food/жареные острые креветки.webp',
  },
  {
    title: 'Супы',
    img: '/menu-food/food/морской чаудер.webp',
  },
  {
    title: 'Горячие блюда',
    img: '/menu-food/food/бургер.webp',
  },
  {
    title: 'Гарниры',
    img: '/menu-food/food/запеченые шампиньоны.webp',
  },
  {
    title: 'На компанию',
    img: '/menu-food/food/пивной сет.webp',
  },
  {
    title: 'Десерты',
    img: '/menu-food/food/кукис.webp',
  },
  {
    title: 'Карта бара',
  },
];

export const sortedMenuFoodCategories = [...menuFoodCategories].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export const menuFoodPositionsByCategory = [
  {
    category: 'Завтраки',
    positions: [
      {
        title: 'Английский завтрак',
        img: '/menu-food/breakfasts/англиийский 2.webp',
        weight: '460г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с беконом',
        img: '/menu-food/breakfasts/пермский с беконом.webp',
        weight: '336г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с лососем',
        img: '/menu-food/breakfasts/пермский с лососем.webp',
        weight: '286г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с пастрами',
        img: '/menu-food/breakfasts/пермский с пастрами.webp',
        weight: '326г',
        price: '1000 ₽',
      },
      {
        title: 'Фитнес завтрак',
        img: '/menu-food/breakfasts/фитнес.webp',
        weight: '302г',
        price: '1000 ₽',
      },
      {
        title: 'Французский завтрак',
        img: '/menu-food/breakfasts/французский.webp',
        weight: '580г',
        price: '1000 ₽',
      },
    ],
  },
  {
    category: 'Холодные закуски',
    positions: [
      {
        title: 'Вителло тоннато',
        img: '/menu-food/food/вителло тоннато.webp',
        weight: '200г',
        price: '1100 ₽',
      },
      {
        title: 'Домашнее сало',
        img: '/menu-food/food/домашнее сало.webp',
        weight: '302г',
        price: '820 ₽',
      },
      {
        title: 'Закуска из щучьей икры',
        img: '/menu-food/food/закуска из щучьей икры.webp',
        weight: '303г',
        price: '3850 ₽',
      },
      {
        title: 'Карпаччо',
        img: '/menu-food/food/Карпаччо из телятины.webp',
        weight: '119г',
        price: '920 ₽',
      },
      {
        title: 'Сельдь с картофелем',
        img: '/menu-food/food/сельдь с картофелем.webp',
        weight: '303г',
        price: '450 ₽',
      },
      {
        title: 'Соленые рыжики со сметаной и луком',
        img: '/menu-food/food/соленые рыжики.webp',
        weight: '202г',
        price: '730 ₽',
      },
      {
        title: 'Тартар из телятины',
        img: '/menu-food/food/тар тар.webp',
        weight: '192г',
        price: '920 ₽',
      },
      {
        title: 'Яблочный лосось',
        img: '/menu-food/food/Яблочный лосось слабой соли.webp',
        weight: '152г',
        price: '1260 ₽',
      },
    ],
  },
  {
    category: 'Салаты',
    positions: [
      {
        title: 'Салат Греческий',
        img: '/menu-food/food/греческий.webp',
        weight: '252г',
        price: '750 ₽',
      },
      {
        title: 'Салат с лососем',
        img: '/menu-food/food/салат с лососем.webp',
        weight: '193г',
        price: '1550 ₽',
      },
      {
        title: 'Салат с морскими гадами и манго',
        img: '/menu-food/food/салат с морскими гадами.webp',
        weight: '308г',
        price: '1720 ₽',
      },
      {
        title: 'Салат с подкопченой уткой и инжирным вареньем',
        img: '/menu-food/food/салат с подкопченой уткой.webp',
        weight: '198г',
        price: '950 ₽',
      },
      {
        title: 'Салат с ростбифом',
        img: '/menu-food/food/салат с ростбифом.webp',
        weight: '240г',
        price: '1220 ₽',
      },
      {
        title: 'Стейк салат',
        img: '/menu-food/food/стейк салат.webp',
        weight: '234г',
        price: '1300 ₽',
      },
      {
        title: 'Теплый салат с курицей и беконом',
        img: '/menu-food/food/теплый салат с курицей и беконом.webp',
        weight: '262г',
        price: '850 ₽',
      },
    ],
  },
  {
    category: 'Горячие закуски',
    positions: [
      {
        title: 'Жареные острые креветки с клубникой',
        img: '/menu-food/food/жареные острые креветки.webp',
        weight: '235г',
        price: '1350 ₽',
      },
      {
        title: 'Закуска из телятины',
        img: '/menu-food/food/закуска из телятины.webp',
        weight: '155г',
        price: '1390 ₽',
      },
      {
        title: 'Запеченые мидии с беконом',
        img: '/menu-food/food/запеченые мидии.webp',
        weight: '311г',
        price: '990 ₽',
      },
      {
        title: 'Корюшка жареная',
        img: '/menu-food/food/корюшка жареная.webp',
        weight: '441г',
        price: '1290 ₽',
      },
      {
        title: 'Мидии Блю чиз',
        img: '/menu-food/food/мидии блю чиз.webp',
        weight: '493г',
        price: '1450 ₽',
      },
      {
        title: 'Морской гребешок с клубникой и копченой сметаной',
        img: '/menu-food/food/морской гребешок с клубникой.webp',
        weight: '204г',
        price: '1630 ₽',
      },
      {
        title: 'Посикунчики',
        img: '/menu-food/food/посикунчики.webp',
        weight: '234г',
        price: '730 ₽',
      },
      {
        title: 'Свиные ребрышки с халапенью',
        img: '/menu-food/food/свинные ребрышки.webp',
        weight: '420г',
        price: '1150 ₽',
      },
    ],
  },
  {
    category: 'Супы',
    positions: [
      {
        title: 'Грибной капучино',
        img: '/menu-food/food/грибной капучино.webp',
        weight: '448г',
        price: '720 ₽',
      },
      {
        title: 'Уха',
        img: '/menu-food/food/уха -обрезать водку и крутон.webp',
        weight: '386г',
        price: '1450 ₽',
      },
      {
        title: 'Морской чаудер',
        img: '/menu-food/food/морской чаудер.webp',
        weight: '379г',
        price: '1450 ₽',
      },
      {
        title: 'Мясной чаудер',
        img: '/menu-food/food/мясной чаудер.webp',
        weight: '383г',
        price: '850 ₽',
      },
    ],
  },
  {
    category: 'Горячие блюда',
    positions: [
      {
        title: 'Голяшка барана',
        img: '/menu-food/food/голяшка барана.webp',
        weight: '454г',
        price: '1650 ₽',
      },
      {
        title: 'Оссобуко',
        img: '/menu-food/food/оссобуко.webp',
        weight: '409г',
        price: '1330 ₽',
      },
      {
        title: 'Филе Дорада с пряными черри',
        img: '/menu-food/food/дорадо.webp',
        weight: '295',
        price: '1660 ₽',
      },
      {
        title: 'Стейк лосося',
        img: '/menu-food/food/стейк лосося.webp',
        weight: '199г',
        price: '2350 ₽',
      },
      {
        title: 'Свинной рябчик',
        img: '/menu-food/food/свинной рябчик.webp',
        weight: '358г',
        price: '850 ₽',
      },
      {
        title: 'Томленые телячьи щечки',
        img: '/menu-food/food/томленые телячьи щечки.webp',
        weight: '183г',
        price: '1250 ₽',
      },
      {
        title: 'Филе судака с корнеплодом и сливочным цитрусом',
        img: '/menu-food/food/филе судака.webp',
        weight: '229г',
        price: '990 ₽',
      },
      {
        title: 'Цыпленок табака',
        img: '/menu-food/food/цыпленок табака.webp',
        weight: '467г',
        price: '1250 ₽',
      },
      {
        title: 'Бургер',
        img: '/menu-food/food/бургер.webp',
        weight: '542г',
        price: '1700 ₽',
      },
    ],
  },
  {
    category: 'Гарниры',
    positions: [
      {
        title: 'Запеченые шампиньоны',
        img: '/menu-food/food/запеченые шампиньоны.webp',
        weight: '184г',
        price: '490 ₽',
      },
      {
        title: 'Картофель жареный с белыми грибами',
        img: '/menu-food/food/картофель жаренный.webp',
        weight: '287г',
        price: '670 ₽',
      },
      {
        title: 'Овощи на гриле',
        img: '/menu-food/food/овощи на гриле.webp',
        weight: '156г',
        price: '340 ₽',
      },
      {
        title: 'Теплый картофельный салат',
        img: '/menu-food/food/теплый картофельный салат.webp',
        weight: '202г',
        price: '320 ₽',
      },
    ],
  },
  {
    category: 'На компанию',
    positions: [
      {
        title: 'Пивной сет',
        img: '/menu-food/food/пивной сет.webp',
        weight: '934г',
        price: '2720 ₽',
      },
      {
        title: 'Плато гриль',
        img: '/menu-food/food/плато гриль.webp',
        weight: '1 185г',
        price: '8500 ₽',
      },
      {
        title: 'Плато креветок',
        img: '/menu-food/food/плато креветок.webp',
        weight: '1 065г',
        price: '6700 ₽',
      },
    ],
  },
  {
    category: 'Десерты',
    positions: [
      {
        title: 'Печенье Брауни',
        img: '/menu-food/food/печенье брауни.webp',
        weight: '150г',
        price: '630 ₽',
      },
      {
        title: 'Кукис "Орео"',
        img: '/menu-food/food/кукис.webp',
        weight: '151г',
        price: '820 ₽',
      },
      {
        title: 'Мадлены',
        img: '/menu-food/food/мадлены.webp',
        weight: '140г',
        price: '650 ₽',
      },
      {
        title: 'Трюфельные конфеты',
        img: '/menu-food/food/трюфельные конфеты.webp',
        weight: '74г',
        price: '610 ₽',
      },
      {
        title: 'Чизкейк с карамелью и пломбиром',
        img: '/menu-food/food/чизкейк.webp',
        weight: '220г',
        price: '650 ₽',
      },
    ],
  },
  {
    category: 'Карта бара',
    positions: [
      {
        type: 'subcategory',
        title: 'ВЕРМУТ',
        items: [
          { title: 'Мартини Бьянко', weight: '100 мл', price: '490 ₽' },
          { title: 'Мартини Россо', weight: '100 мл', price: '490 ₽' },
          { title: 'Мартини Фиеро', weight: '100 мл', price: '490 ₽' },
          { title: 'Мартини Экстра Драй', weight: '100 мл', price: '490 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ИГРИСТОЕ',
        items: [
          {
            title: 'Асти Фестозо (Италия, Пьемонт-Белое, сладкое)',
            weight: '750 мл',
            price: '4 500 ₽',
          },
          { title: 'Кава Розе (Испания, Кава-Игристое, брют)', weight: '750 мл', price: '4 500 ₽' },
          {
            title: 'Лунетта Просекко (Италия, Венето-Белое, брют)',
            weight: '750 мл',
            price: '4 900 ₽',
          },
          {
            title: 'Лунетта Просекко Розе Миллезимато (Италия, Венето-Розовое, сухое)',
            weight: '750 мл',
            price: '4 600 ₽',
          },
          { title: 'Артис (Франция-белое, полусладкое, Б/А)', weight: '750 мл', price: '3 100 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ВИНО РОЗОВОЕ',
        items: [
          {
            title: 'Вилла Парад Прованс Кото д’Эк-ан-Прованс (Франция, Прованс-Сухое)',
            weight: '750 мл',
            price: '6 100 ₽',
          },
          { title: 'Домен Ля Софрен (Франция, Прованс-Сухое)', weight: '750 мл', price: '7 700 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'БЕЛОЕ ВИНО',
        items: [
          {
            title: 'Зельбах Рислинг Инклайд (Германия, Мозель-Сухое)',
            weight: '150 мл',
            price: '1 200 ₽',
          },
          {
            title: 'Лаки Лизард (Австралия, Аделаидские холмы-Сухое)',
            weight: '750 мл',
            price: '8 600 ₽',
          },
          {
            title: 'Тинфенбрюнер Фельдшплат Мюллер Тургау (Италия, Альта-Адидже-Сухое)',
            weight: '750 мл',
            price: '24 150 ₽',
          },
          { title: 'Шабли Савари (Франция, Бургундия-Сухое)', weight: '750 мл', price: '12 000 ₽' },
          {
            title: 'Штадльман Грюнер Ветлинер (Австрия, нижняя Австрия-Сухое)',
            weight: '750 мл',
            price: '5 880 ₽',
          },
          {
            title: 'Штадльман Рислинг (Австрия, нижняя Австрия-Полусухое)',
            weight: '750 мл',
            price: '6 100 ₽',
          },
          { title: 'Ханс Байер (Германия, Рейнессен, Б/А)', weight: '750 мл', price: '3 500 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ВИНО КРАСНОЕ',
        items: [
          {
            title: 'Рамон Бильбао Эдисон Лимитада (Испания, Риоха - Сухое)',
            weight: '150 мл',
            price: '1 200 ₽',
          },
          {
            title: 'Альта Виста Мальбек Терруар Селексьон (Аргентина, Мендоса-Сухое)',
            weight: '750 мл',
            price: '8 700 ₽',
          },
          {
            title: 'Бароло Ревераско (Италия, Пьемонт-Сухое)',
            weight: '750 мл',
            price: '12 990 ₽',
          },
          {
            title: 'Домен Филипп Жирар Савинь-Ле-Бон Годо (Франция, Бургундия-Сухое)',
            weight: '750 мл',
            price: '17 100 ₽',
          },
          {
            title: 'Примат Кел Розе (Италия, Примит-Розе-Сухое)',
            weight: '750 мл',
            price: '6 400 ₽',
          },
          { title: 'Лавель Лилли (Германия, Баден-Сухое)', weight: '751 мл', price: '5 200 ₽' },
          { title: 'Таскана (Италия, Тоскана-Сухое)', weight: '750 мл', price: '12 500 ₽' },
          { title: 'Штутенбургер (Германия, Баден-Сухое)', weight: '750 мл', price: '8 500 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ПОРТВЕЙН',
        items: [
          { title: 'Черчилль Резерв Порт', weight: '50 мл', price: '550 ₽' },
          { title: 'Черчилль Крастед Порт', weight: '750 мл', price: '14 200 ₽' },
          { title: 'Черчилль Лейт Боттлед Винтаж Порт', weight: '750 мл', price: '52 110 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ВОДКА, ПОЛУГАР',
        items: [
          { title: 'Французская водка', weight: '50 мл', price: '690 ₽' },
          { title: 'Абсолют', weight: '50 мл', price: '350 ₽' },
          { title: 'Абсолют Курант', weight: '50 мл', price: '350 ₽' },
          { title: 'Абсолют манго', weight: '50 мл', price: '350 ₽' },
          { title: 'Адмирал Хвоссо Пшеничный', weight: '50 мл', price: '250 ₽' },
          { title: 'Адмирал Хвоссо Ржаной', weight: '50 мл', price: '250 ₽' },
          { title: 'Белуга Селебрейшн', weight: '50 мл', price: '350 ₽' },
          { title: 'Белуга Трансантлантик', weight: '50 мл', price: '350 ₽' },
          { title: 'Полугар (дистиллят на рыжиках)', weight: '50 мл', price: '350 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'РОМ',
        items: [
          { title: 'Кариббиан Соул', weight: '50 мл', price: '1 900 ₽' },
          { title: 'XO Резерв', weight: '50 мл', price: '1 800 ₽' },
          { title: 'Легендарио Элексир де Куба', weight: '50 мл', price: '700 ₽' },
          { title: 'Легендарио Аньехо', weight: '50 мл', price: '590 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ТЕКИЛА',
        items: [
          { title: 'Эсполон Бланко', weight: '50 мл', price: '690 ₽' },
          { title: 'Эсполон Репосадо', weight: '50 мл', price: '600 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ДЖИН',
        items: [
          { title: 'Баррекстер Ботаникал', weight: '50 мл', price: '1 400 ₽' },
          { title: 'Мартин Миллерс ориджинал', weight: '50 мл', price: '850 ₽' },
          { title: 'Року', weight: '50 мл', price: '610 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ВИСКИ',
        items: [
          { title: 'Феттеркерн 12 лет', weight: '50 мл', price: '2 300 ₽' },
          { title: 'Макмира Свеник Эк Сведиш Сингл Молт', weight: '50 мл', price: '1 800 ₽' },
          { title: 'Блекаддер Блэк Снейк Сингл Молт Скотч', weight: '50 мл', price: '1 650 ₽' },
          { title: 'Синглтон односолодовый 12 лет', weight: '50 мл', price: '750 ₽' },
          { title: 'Бушмилс Американ Оак Каск Финиш', weight: '50 мл', price: '450 ₽' },
          { title: 'Бушмилс Блэк Буш', weight: '50 мл', price: '950 ₽' },
          { title: 'Инглиш Ориджинал', weight: '50 мл', price: '750 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'БУРБОН',
        items: [
          { title: 'Джек Дениелс Хани', weight: '50 мл', price: '550 ₽' },
          { title: 'Мэйкерс Марк 45%', weight: '50 мл', price: '5 000 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'КОНЬЯК',
        items: [
          { title: 'Курвуазье VSOP', weight: '50 мл', price: '1 250 ₽' },
          { title: 'Курвуазье XO', weight: '50 мл', price: '4 300 ₽' },
          { title: 'Менар VSOP', weight: '50 мл', price: '1 260 ₽' },
          { title: 'Менар Селексьон', weight: '50 мл', price: '850 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ЛИКЕРЫ',
        items: [
          { title: 'Апероль', weight: '50 мл', price: '290 ₽' },
          { title: 'Бехеровка', weight: '50 мл', price: '350 ₽' },
          { title: 'Бэйлиз', weight: '50 мл', price: '480 ₽' },
          { title: 'Кампари', weight: '50 мл', price: '420 ₽' },
          { title: 'Куантро', weight: '50 мл', price: '420 ₽' },
          { title: 'Ягермейстер', weight: '50 мл', price: '380 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'КОКТЕЙЛИ',
        items: [
          { title: 'Адора', weight: '50 мл', price: '750 ₽' },
          { title: 'Базиликовый', weight: '50 мл', price: '750 ₽' },
          { title: 'Майя', weight: '50 мл', price: '750 ₽' },
          { title: 'Маноа', weight: '50 мл', price: '750 ₽' },
          { title: 'Ми Вонт Банан', weight: '50 мл', price: '750 ₽' },
          { title: 'Негрони барбарис', weight: '50 мл', price: '750 ₽' },
          { title: 'Палома', weight: '50 мл', price: '750 ₽' },
          { title: 'Порнстар Тини', weight: '50 мл', price: '750 ₽' },
          { title: 'Рэд Безил смеш', weight: '50 мл', price: '750 ₽' },
          { title: 'Санни', weight: '50 мл', price: '750 ₽' },
          { title: 'Хайки', weight: '50 мл', price: '750 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ПИВО',
        items: [
          { title: 'Аркоброй Вайсбир Хель', weight: '500 мл', price: '990 ₽' },
          { title: 'Аркоброй Мозер Лизель', weight: '500 мл', price: '1 100 ₽' },
          { title: 'Бакалар холодного охмеления алк 5,2%', weight: '330 мл', price: '450 ₽' },
          { title: 'Бакалар холодного охмеления алк 5,2%', weight: '500 мл', price: '750 ₽' },
          { title: 'Бланш де Брюс', weight: '330 мл', price: '675 ₽' },
          { title: 'Лиманье Фрутее', weight: '250 мл', price: '600 ₽' },
          { title: 'Хофброй Оригинальное Светлое 5,1%', weight: '330 мл', price: '640 ₽' },
          { title: 'Хофброй Оригинальное Светлое 5,1%', weight: '500 мл', price: '1 060 ₽' },
          { title: 'Энаме Дюббель', weight: '330 мл', price: '830 ₽' },
          { title: 'Эстрелла Дамм/Лагер', weight: '330 мл', price: '650 ₽' },
          { title: 'Клаусталер б/а', weight: '330 мл', price: '590 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ',
        items: [
          { title: 'Вода Сан Бенедетто газ.', weight: '250 мл', price: '490 ₽' },
          { title: 'Вода Сан Бенедетто негаз.', weight: '250 мл', price: '490 ₽' },
          { title: 'Кока кола', weight: '330 мл', price: '360 ₽' },
          { title: 'Лимонад Байкал', weight: '300 мл', price: '300 ₽' },
          { title: 'Лимонад Малиновый', weight: '300 мл', price: '300 ₽' },
          { title: 'Лимонад Манго', weight: '300 мл', price: '300 ₽' },
          { title: 'Сок ананасовый', weight: '250 мл', price: '240 ₽' },
          { title: 'Сок вишневый', weight: '250 мл', price: '240 ₽' },
          { title: 'Сок яблочный', weight: '250 мл', price: '240 ₽' },
          { title: 'Сок томатный', weight: '250 мл', price: '240 ₽' },
          { title: 'Ред булл', weight: '330 мл', price: '340 ₽' },
          { title: 'Байкал', weight: '300 мл', price: '300 ₽' },
          { title: 'Тархун', weight: '300 мл', price: '300 ₽' },
          { title: 'Дюшес', weight: '300 мл', price: '300 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'НАСТОЙКИ',
        items: [
          { title: 'Луговая', weight: '50 мл', price: '320 ₽' },
          { title: 'Лимончелло', weight: '50 мл', price: '320 ₽' },
          { title: 'Черничная', weight: '50 мл', price: '260 ₽' },
          { title: 'Вишня-Лаванда', weight: '50 мл', price: '320 ₽' },
          { title: 'Краковская', weight: '50 мл', price: '690 ₽' },
          { title: 'Брусничная', weight: '50 мл', price: '320 ₽' },
          { title: 'Ирис', weight: '50 мл', price: '320 ₽' },
          { title: 'Шарлотка', weight: '50 мл', price: '320 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ФРЕШ',
        items: [
          { title: 'Апельсиновый фреш', weight: '200 мл', price: '420 ₽' },
          { title: 'Грейпфрутовый фреш', weight: '200 мл', price: '420 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'ЧАЙ',
        items: [
          { title: 'Ассам', weight: '400 мл', price: '250 ₽' },
          { title: 'Горные травы', weight: '400 мл', price: '250 ₽' },
          { title: 'Жасмин', weight: '400 мл', price: '250 ₽' },
          { title: 'Женьшенёвая долина', weight: '400 мл', price: '250 ₽' },
          { title: 'Молочный Улун', weight: '400 мл', price: '250 ₽' },
          { title: 'Ройбуш', weight: '400 мл', price: '250 ₽' },
          { title: 'Сенча', weight: '400 мл', price: '250 ₽' },
          { title: 'Хербал Темптейшн', weight: '400 мл', price: '250 ₽' },
          { title: 'Эрл Грей', weight: '400 мл', price: '250 ₽' },
          { title: 'Облепиховый сбитень', weight: '300 мл', price: '270 ₽' },
          { title: 'Чай малиновый', weight: '300 мл', price: '270 ₽' },
          { title: 'Чай на цветах анчана', weight: '300 мл', price: '270 ₽' },
        ],
      },
      {
        type: 'subcategory',
        title: 'КОФЕ',
        items: [
          { title: 'Американо', weight: '', price: '250 ₽' },
          { title: 'Капучино', weight: '', price: '300 ₽' },
          { title: 'Латте', weight: '', price: '350 ₽' },
          { title: 'Эспрессо', weight: '', price: '250 ₽' },
        ],
      },
    ],
  },
];

export function renderAllMenuFoodPositions() {
  const wrapper = document.querySelector('.menu_food__wrapper.food');
  if (!wrapper) return;

  const currentCategory = wrapper.getAttribute('data-category');

  if (currentCategory === 'Карта бара') {
    const barCategory = menuFoodPositionsByCategory.find((cat) => cat.category === 'Карта бара');
    if (barCategory) {
      let barHTML = '';

      barCategory.positions.forEach((subcat) => {
        if (subcat.type === 'subcategory' && Array.isArray(subcat.items)) {
          barHTML += `<div class="menu_food__subcategory-title">${subcat.title}</div>`;

          subcat.items.forEach((pos) => {
            barHTML += `
              <div class="menu_food__item menu_food__item--Карта_бара" style="max-width: none; height: 190px; display: flex; flex-direction: column; justify-content: space-between;">
                <div class="menu_food__item-price menu_food__item-price--center" style="text-align: center; margin-bottom: 0;">
                  <p class="menu_food__item-price-text" style="font-size: 1.5em;">${
                    pos.price || ''
                  }</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-start;">
                  <p class="menu_food__item-title" style="text-align: left;">${pos.title}</p>
                  <p class="menu_food__item-weight" style="text-align: left;">${
                    pos.weight || ''
                  }</p>
                </div>
              </div>
            `;
          });
        }
      });

      wrapper.innerHTML = barHTML;
      return;
    }
  }

  wrapper.innerHTML = menuFoodPositionsByCategory
    .map((cat) => {
      if (cat.category === 'Карта бара') return '';
      return cat.positions
        .filter((pos) => pos.img && pos.img.trim() !== '')
        .map(
          (pos) => `
          <div class="menu_food__item menu_food__item--${cat.category.replace(
            /\s/g,
            '_',
          )}" data-category="${cat.category}" style="display: none; min-width:320px;">
            <img class="menu_food__item-img" src="${pos.img}" alt="${pos.title}" loading="lazy" />
            <p class="menu_food__item-title">${pos.title}</p>
            <p class="menu_food__item-weight">${pos.weight}</p>
            <div class="menu_food__item-price">
              <p class="menu_food__item-price-text">${pos.price}</p>
            </div>
          </div>
        `,
        )
        .join('');
    })
    .join('');
}

export function showMenuCategory(categoryTitle) {
  const wrapper = document.querySelector('.menu_food__wrapper.food');
  if (wrapper) {
    wrapper.setAttribute('data-category', categoryTitle);
    renderAllMenuFoodPositions();
    const allItems = document.querySelectorAll('.menu_food__item');
    allItems.forEach((item) => {
      if (item.dataset.category === categoryTitle || categoryTitle === 'Карта бара') {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

export function renderMenuFoodCategories() {
  const container = document.querySelector('.menu_food__category');
  if (!container) return;

  container.innerHTML = menuFoodCategories
    .map((category) => {
      if (category.title.trim().toLowerCase() === 'карта бара') {
        return `
            <div class="menu_food__category-item" data-category="${category.title}" style="display: flex; align-items: center; justify-content: center; min-width: 320px; min-height: 190px;">
              <p class="menu_food__category-title" style="width: 100%; text-align: center;">${category.title}</p>
            </div>
          `;
      } else {
        return `
            <div class="menu_food__category-item" data-category="${category.title}">
              <img class="menu_food__category-img" src="${category.img}" alt="${category.title}" loading="lazy" />
              <p class="menu_food__category-title">${category.title}</p>
            </div>
          `;
      }
    })
    .join('');

  const categoryItems = container.querySelectorAll('.menu_food__category-item');

  if (categoryItems.length > 0) {
    categoryItems[0].classList.add('active');
  }

  categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
      categoryItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
      const categoryTitle = item.dataset.category;
      showMenuCategory(categoryTitle);
    });
  });
}

// Асинхронная предзагрузка всех изображений меню
export function preloadAllMenuImages() {
  const allImages = menuFoodPositionsByCategory.flatMap((cat) =>
    cat.positions.map((pos) => pos.img),
  );
  return Promise.all(
    allImages.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        }),
    ),
  );
}

export function showDefaultMenuCategory() {
  if (menuFoodCategories.length > 0) {
    showMenuCategory(menuFoodCategories[0].title);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenuFoodCategories();
  renderAllMenuFoodPositions();
  showDefaultMenuCategory();
});

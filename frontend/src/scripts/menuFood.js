export const menuFoodCategories = [
  {
    title: 'Завтраки',
    img: './assets/images/menu-food/breakfasts/англиийский 2.jpg',
  },
  {
    title: 'Холодные закуски',
    img: './assets/images/menu-food/food/вителло тоннато.jpg',
  },
  {
    title: 'Салаты',
    img: './assets/images/menu-food/food/теплый картофельный салат.jpg',
  },
  {
    title: 'Горячие закуски',
    img: './assets/images/menu-food/food/жареные острые креветки.jpg',
  },
  {
    title: 'Супы',
    img: './assets/images/menu-food/food/морской чаудер.jpg',
  },
  {
    title: 'Горячие блюда',
    img: './assets/images/menu-food/food/бургер.jpg',
  },
  {
    title: 'Гарниры',
    img: './assets/images/menu-food/food/запеченые шампиньоны.jpg',
  },
  {
    title: 'На компанию',
    img: './assets/images/menu-food/food/пивной сет.jpg',
  },
  {
    title: 'Десерты',
    img: './assets/images/menu-food/food/кукис.jpg',
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
        img: './assets/images/menu-food/breakfasts/англиийский 2.jpg',
        weight: '460г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с беконом',
        img: './assets/images/menu-food/breakfasts/пермский с беконом.jpg',
        weight: '336г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с лососем',
        img: './assets/images/menu-food/breakfasts/пермский с лососем.jpg',
        weight: '286г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с пастрами',
        img: './assets/images/menu-food/breakfasts/пермский с пастрами.jpg',
        weight: '326г',
        price: '1000 ₽',
      },
      {
        title: 'Фитнес завтрак',
        img: './assets/images/menu-food/breakfasts/фитнес.jpg',
        weight: '302г',
        price: '1000 ₽',
      },
      {
        title: 'Французский завтрак',
        img: './assets/images/menu-food/breakfasts/французский.jpg',
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
        img: './assets/images/menu-food/food/вителло тоннато.jpg',
        weight: '200г',
        price: '1100 ₽',
      },
      {
        title: 'Домашнее сало',
        img: './assets/images/menu-food/food/домашнее сало.jpg',
        weight: '302г',
        price: '820 ₽',
      },
      {
        title: 'Закуска из щучьей икры',
        img: './assets/images/menu-food/food/закуска из щучьей икры.jpg',
        weight: '303г',
        price: '3850 ₽',
      },
      {
        title: 'Карпаччо',
        img: './assets/images/menu-food/food/Карпаччо из телятины.jpg',
        weight: '119г',
        price: '920 ₽',
      },
      {
        title: 'Сельдь с картофелем',
        img: './assets/images/menu-food/food/сельдь с картофелем.jpg',
        weight: '303г',
        price: '450 ₽',
      },
      {
        title: 'Соленые рыжики со сметаной и луком',
        img: './assets/images/menu-food/food/соленые рыжики.jpg',
        weight: '202г',
        price: '730 ₽',
      },
      {
        title: 'Тартар из телятины',
        img: './assets/images/menu-food/food/тар тар.jpg',
        weight: '192г',
        price: '920 ₽',
      },
      {
        title: 'Яблочный лосось',
        img: './assets/images/menu-food/food/Яблочный лосось слабой соли.jpg',
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
        img: './assets/images/menu-food/food/греческий.jpg',
        weight: '252г',
        price: '750 ₽',
      },
      {
        title: 'Салат с лососем',
        img: './assets/images/menu-food/food/салат с лососем.jpg',
        weight: '193г',
        price: '1550 ₽',
      },
      {
        title: 'Салат с морскими гадами и манго',
        img: './assets/images/menu-food/food/салат с морскими гадами.jpg',
        weight: '308г',
        price: '1720 ₽',
      },
      {
        title: 'Салат с подкопченой уткой и инжирным вареньем',
        img: './assets/images/menu-food/food/салат с подкопченой уткой.jpg',
        weight: '198г',
        price: '950 ₽',
      },
      {
        title: 'Салат с ростбифом',
        img: './assets/images/menu-food/food/салат с ростбифом.jpg',
        weight: '240г',
        price: '1220 ₽',
      },
      {
        title: 'Стейк салат',
        img: './assets/images/menu-food/food/стейк салат.jpg',
        weight: '234г',
        price: '1300 ₽',
      },
      {
        title: 'Теплый салат с курицей и беконом',
        img: './assets/images/menu-food/food/теплый салат с курицей и беконом.jpg',
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
        img: './assets/images/menu-food/food/жареные острые креветки.jpg',
        weight: '235г',
        price: '1350 ₽',
      },
      {
        title: 'Закуска из телятины',
        img: './assets/images/menu-food/food/закуска из телятины.jpg',
        weight: '155г',
        price: '1390 ₽',
      },
      {
        title: 'Запеченые мидии с беконом',
        img: './assets/images/menu-food/food/запеченые мидии.jpg',
        weight: '311г',
        price: '990 ₽',
      },
      {
        title: 'Корюшка жареная',
        img: './assets/images/menu-food/food/корюшка жареная.jpg',
        weight: '441г',
        price: '1290 ₽',
      },
      {
        title: 'Мидии Блю чиз',
        img: './assets/images/menu-food/food/мидии блю чиз.jpg',
        weight: '493г',
        price: '1450 ₽',
      },
      {
        title: 'Морской гребешок с клубникой и копченой сметаной',
        img: './assets/images/menu-food/food/морской гребешок с клубникой.jpg',
        weight: '204г',
        price: '1630 ₽',
      },
      {
        title: 'Посикунчики',
        img: './assets/images/menu-food/food/посикунчики.jpg',
        weight: '234г',
        price: '730 ₽',
      },
      {
        title: 'Свиные ребрышки с халапенью',
        img: './assets/images/menu-food/food/свинные ребрышки.jpg',
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
        img: './assets/images/menu-food/food/грибной капучино.jpg',
        weight: '448г',
        price: '720 ₽',
      },
      {
        title: 'Уха',
        img: './assets/images/menu-food/food/уха -обрезать водку и крутон.jpg',
        weight: '386г',
        price: '1450 ₽',
      },
      {
        title: 'Морской чаудер',
        img: './assets/images/menu-food/food/морской чаудер.jpg',
        weight: '379г',
        price: '1450 ₽',
      },
      {
        title: 'Мясной чаудер',
        img: './assets/images/menu-food/food/мясной чаудер.jpg',
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
        img: './assets/images/menu-food/food/голяшка барана.jpg',
        weight: '454г',
        price: '1650 ₽',
      },
      {
        title: 'Оссобуко',
        img: './assets/images/menu-food/food/оссобуко.jpg',
        weight: '409г',
        price: '1330 ₽',
      },
      {
        title: 'Филе Дорада с пряными черри',
        img: './assets/images/menu-food/food/дорадо.jpg',
        weight: '295',
        price: '1660 ₽',
      },
      {
        title: 'Стейк лосося',
        img: './assets/images/menu-food/food/стейк лосося.jpg',
        weight: '199г',
        price: '2350 ₽',
      },
      {
        title: 'Свинной рябчик',
        img: './assets/images/menu-food/food/свинной рябчик.jpg',
        weight: '358г',
        price: '850 ₽',
      },
      {
        title: 'Томленые телячьи щечки',
        img: './assets/images/menu-food/food/томленые телячьи щечки.jpg',
        weight: '183г',
        price: '1250 ₽',
      },
      {
        title: 'Филе судака с корнеплодом и сливочным цитрусом',
        img: './assets/images/menu-food/food/филе судака.jpg',
        weight: '229г',
        price: '990 ₽',
      },
      {
        title: 'Цыпленок табака',
        img: './assets/images/menu-food/food/цыпленок табака.jpg',
        weight: '467г',
        price: '1250 ₽',
      },
      {
        title: 'Бургер',
        img: './assets/images/menu-food/food/бургер.jpg',
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
        img: './assets/images/menu-food/food/запеченые шампиньоны.jpg',
        weight: '184г',
        price: '490 ₽',
      },
      {
        title: 'Картофель жареный с белыми грибами',
        img: './assets/images/menu-food/food/картофель жаренный.jpg',
        weight: '287г',
        price: '670 ₽',
      },
      {
        title: 'Овощи на гриле',
        img: './assets/images/menu-food/food/овощи на гриле.jpg',
        weight: '156г',
        price: '340 ₽',
      },
      {
        title: 'Теплый картофельный салат',
        img: './assets/images/menu-food/food/теплый картофельный салат.jpg',
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
        img: './assets/images/menu-food/food/пивной сет.jpg',
        weight: '934г',
        price: '2720 ₽',
      },
      {
        title: 'Плато гриль',
        img: './assets/images/menu-food/food/плато гриль.jpg',
        weight: '1 185г',
        price: '8500 ₽',
      },
      {
        title: 'Плато креветок',
        img: './assets/images/menu-food/food/плато креветок.jpg',
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
        img: './assets/images/menu-food/food/печенье брауни.jpg',
        weight: '150г',
        price: '630 ₽',
      },
      {
        title: 'Кукис "Орео"',
        img: './assets/images/menu-food/food/кукис.jpg',
        weight: '151г',
        price: '820 ₽',
      },
      {
        title: 'Мадлены',
        img: './assets/images/menu-food/food/мадлены.jpg',
        weight: '140г',
        price: '650 ₽',
      },
      {
        title: 'Трюфельные конфеты',
        img: './assets/images/menu-food/food/трюфельные конфеты.jpg',
        weight: '74г',
        price: '610 ₽',
      },
      {
        title: 'Чизкейк с карамелью и пломбиром',
        img: './assets/images/menu-food/food/чизкейк.jpg',
        weight: '220г',
        price: '650 ₽',
      },
    ],
  },
];

// Функция рендера блюд для конкретной категории
export function renderMenuFoodPositions(categoryTitle) {
  const wrapper = document.querySelector('.menu_food__wrapper.food');
  if (!wrapper) return;

  const categoryToRender =
    menuFoodPositionsByCategory.find((cat) => cat.category === categoryTitle) ||
    menuFoodPositionsByCategory[0];

  if (!categoryToRender) {
    wrapper.innerHTML = '<p>Блюда не найдены.</p>';
    return;
  }

  wrapper.innerHTML = categoryToRender.positions
    .map(
      (pos) => `
        <div class="menu_food__item">
          <img class="menu_food__item-img" src="${pos.img}" alt="${pos.title}" />
          <p class="menu_food__item-title">${pos.title}</p>
          <p class="menu_food__item-weight">${pos.weight}</p>
          <div class="menu_food__item-price">
            <p class="menu_food__item-price-text">${pos.price}</p>
          </div>
        </div>
      `,
    )
    .join('');
}

// Функция рендера категорий и добавления обработчиков кликов
export function renderMenuFoodCategories() {
  const container = document.querySelector('.menu_food__category');
  if (!container) return;

  container.innerHTML = menuFoodCategories
    .map(
      (category) => `
    <div class="menu_food__category-item" data-category="${category.title}">
      <img class="menu_food__category-img" src="${category.img}" alt="${category.title}" />
      <p class="menu_food__category-title">${category.title}</p>
    </div>
  `,
    )
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
      renderMenuFoodPositions(categoryTitle);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenuFoodCategories();
  renderMenuFoodPositions(); // Рендерим блюда первой категории по умолчанию
});

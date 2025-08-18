export const menuFoodCategories = [
  {
    title: 'Римская парная',
    img: '/spa/rim.webp',
  },
  {
    title: 'Русская парная',
    img: '/spa/russian.webp',
  },
];

export const sortedMenuFoodCategories = [...menuFoodCategories].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export const menuFoodPositionsByCategory = [
  {
    category: 'Римская парная',
    positions: [
      {
        title: 'Аренда СПА (2 часа)',
        img: '/spa/rim01.webp',
        desc: 'Аренда спа пространства на 1 гостя',
        price: '15 000 ₽',
      },
      {
        title: 'Аренда СПА (3 часа)',
        img: '/spa/rim02.webp',
        desc: 'Аренда спа пространства до 6 гостей',
        price: '21 000 ₽',
      },
      {
        title: 'Аренда СПА (4 часа)',
        img: '/spa/rim03.webp',
        desc: 'Аренда спа пространства до 6 гостей',
        price: '28 000 ₽',
      },
      {
        type: 'subcategory',
        title: 'Дополнительно к аренде СПА',
        items: [
          {
            title: 'Морской бриз',
            desc: 'Скрабирование морской солью с маслами',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '20 минут',
          },
          {
            title: 'Восточный',
            desc: 'мыльно-пенный массаж с укрыванием мыльной пеной',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '20 минут',
          },
          {
            title: 'Русский',
            desc: 'Пилинг-гоммаж с березовым пеплом',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '20 минут',
          },
          {
            title: 'Райское наслаждение',
            desc: 'Скрабирование морской солью, кокосовой стружкой с кокосовым маслом, прогрев в хамаме, пенно-мыльный массаж',
            price: '6000 ₽',
            img: '/spa/rim01.webp',
            time: '40 минут',
          },
          {
            title: 'Клеопатра',
            desc: 'Включает в себя прогрев в хамаме, гоммаж кофейный, гоммаж с березовым пеплом, мыльно-пенный массаж',
            price: '7500 ₽',
            img: '/spa/rim01.webp',
            time: '40 минут',
          },
          {
            title: 'Черное и белое',
            desc: 'Включает в себя прогрев в хамаме, кофейный пиллинг-гоммаж, массаж сливками',
            price: '7500 ₽',
            img: '/spa/rim01.webp',
            time: '40 минут',
          },
          {
            title: 'Спина-ноги',
            desc: '',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '30 минут',
          },
          {
            title: 'Все тело',
            desc: '',
            price: '4000 ₽',
            img: '/spa/rim01.webp',
            time: '45 минут',
          },
        ],
      },
    ],
  },
  {
    category: 'Русская парная',
    positions: [
      {
        title: 'Аренда СПА (2 часа)',
        img: '/spa/rim01.webp',
        desc: 'Аренда спа пространства на 1 гостя',
        price: '15 000 ₽',
      },
      {
        title: 'Аренда СПА (3 часа)',
        img: '/spa/rim02.webp',
        desc: 'Аренда спа пространства до 6 гостей',
        price: '21 000 ₽',
      },
      {
        title: 'Аренда СПА (4 часа)',
        img: '/spa/rim03.webp',
        desc: 'Аренда спа пространства до 6 гостей',
        price: '28 000 ₽',
      },
      {
        type: 'subcategory',
        title: 'Дополнительно к аренде СПА',
        items: [
          {
            title: 'Классическое парение',
            desc: 'Круговое парение дубовым либо березовым веником',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Парение Сила леса',
            desc: 'Круговое парение дубовым либо березовым веником, парение ног и ступней еловым веником',
            price: '5000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Парение в 4 руки',
            desc: 'Круговое парение дубовым либо березовым веником, два пар-мастера',
            price: '7000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Пригласить второго банщика',
            desc: 'Скрабирование морской солью, кокосовой стружкой с кокосовым маслом, прогрев в хамаме, пенно-мыльный массаж',
            price: '4000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Парение массаж бамбуковыми вениками',
            desc: 'Массирующее пробивание плеч, спины, ягодиц и бёдер бамбуковым веником - снятие зажимов в вашем теле, расслабление мышц.',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Арома-массаж "Облака"',
            desc: 'Мыльно-пенный массаж с укрыванием мыльной пеной',
            price: '4000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Арома-массаж "Соль моря"',
            desc: 'Массаж с морской солью и эфирными маслами ',
            price: '4000 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Настил из пихтового лапника',
            desc: 'Полог застелается хвойным настилом',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '',
          },
          {
            title: 'Криотерапия',
            desc: 'Круговое обтирание льдом',
            price: '1500 ₽',
            img: '/spa/rim01.webp',
            time: '15 минут',
          },
          {
            title: 'Облив минеральной водой',
            desc: 'После прогрева мастер «проливает» тело прохладной газировнной минеральной водой, что приводит мышцы в тонус, а голова становится ясной.',
            price: '500 ₽',
            img: '/spa/rim01.webp',
            time: '',
          },
          {
            title: 'Спина-ноги',
            desc: '',
            price: '3000 ₽',
            img: '/spa/rim01.webp',
            time: '30 минут',
          },
          {
            title: 'Все тело',
            desc: '',
            price: '4000 ₽',
            img: '/spa/rim01.webp',
            time: '45 минут',
          },
        ],
      },
    ],
  },
];

export function renderAllMenuFoodPositions() {
  const wrapper = document.querySelector('.spa__wrapper.spa');
  if (!wrapper) return;

  wrapper.innerHTML = menuFoodPositionsByCategory
    .map((cat) => {
      const parts = [];
      cat.positions.forEach((pos) => {
        if (pos && pos.type === 'subcategory' && Array.isArray(pos.items)) {
          parts.push(
            `<div class="spa__subcategory-title" data-category="${cat.category}" style="display: none;">${pos.title}</div>`,
          );
          parts.push(
            `<div class="spa__subcategory-items" data-category="${cat.category}" style="display: none;">`,
          );
          pos.items.forEach((item) => {
            parts.push(`
              <div class="spa__item spa__item--${cat.category.replace(
                /\s/g,
                '_',
              )}" data-category="${cat.category}" style="display: none; min-width:320px;">
                <img class="spa__item-img" src="${item.img}" alt="${item.title}" loading="lazy" />
                <p class="spa__item-title">${item.title}</p>
                <p class="spa__item-desc">${item.desc}</p>
                <p class="spa__item-time">${item.time}</p>
                <div class="spa__item-price">
                  <p class="spa__item-price-text">${item.price}</p>
                </div>
              </div>
            `);
          });
          parts.push('</div>');
        } else if (pos && pos.img) {
          parts.push(`
            <div class="spa__item spa__item--${cat.category.replace(/\s/g, '_')}" data-category="${
            cat.category
          }" style="display: none; min-width:320px;">
              <img class="spa__item-img" src="${pos.img}" alt="${pos.title}" loading="lazy" />
              <p class="spa__item-title">${pos.title}</p>
              <p class="spa__item-desc">${pos.desc}</p>
              <div class="spa__item-price">
                <p class="spa__item-price-text">${pos.price}</p>
              </div>
            </div>
          `);
        }
      });
      return parts.join('');
    })
    .join('');
}

export function showMenuCategory(categoryTitle) {
  const wrapper = document.querySelector('.spa__wrapper.spa');
  if (wrapper) {
    wrapper.setAttribute('data-category', categoryTitle);
    renderAllMenuFoodPositions();

    const cards = document.querySelectorAll('.spa__item');
    const subTitles = document.querySelectorAll('.spa__subcategory-title');
    const subBlocks = document.querySelectorAll('.spa__subcategory-items');

    cards.forEach((item) => {
      item.style.display = item.dataset.category === categoryTitle ? 'flex' : 'none';
    });

    subTitles.forEach((el) => {
      el.style.display = el.getAttribute('data-category') === categoryTitle ? 'block' : 'none';
    });

    subBlocks.forEach((el) => {
      el.style.display = el.getAttribute('data-category') === categoryTitle ? 'grid' : 'none';
    });
  }
}

export function renderMenuFoodCategories() {
  const container = document.querySelector('.spa__category');
  if (!container) return;

  container.innerHTML = menuFoodCategories
    .map((category) => {
      return `
            <div class="spa__category-item" data-category="${category.title}">
              <img class="spa__category-img" src="${category.img}" alt="${category.title}" loading="lazy" />
              <p class="spa__category-title">${category.title}</p>
            </div>
          `;
    })
    .join('');

  const categoryItems = container.querySelectorAll('.spa__category-item');

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

export function preloadAllMenuImages() {
  const allImages = menuFoodPositionsByCategory.flatMap((cat) =>
    cat.positions.filter((pos) => pos && pos.img).map((pos) => pos.img),
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

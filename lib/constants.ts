export const CMS_NAME = 'Shareuhack'
export const HOME_OG_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_URL + '/assets/share-you-hack.png'

export const HERO_POST_SLUG = 'about-us'

export const Routes = {
  home: '/',
  latest: '/latest',
  knowledge: '/categories/knowledge',
  health: '/categories/health',
  money: '/categories/money',
  work: '/categories/work',
  about: '/about',
  life: '/categories/life',
}

export const NavLinks = [
  {
    title: '學習',
    link: Routes.knowledge,
  },
  {
    title: '生活',
    link: Routes.life,
  },
  {
    title: '健康',
    link: Routes.health,
  },
  {
    title: '金錢',
    link: Routes.money,
  },
  {
    title: '工作',
    link: Routes.work,
  },
]

export const Category = {
  knowledge: '學習',
  life: '生活',
  health: '健康',
  money: '金錢',
  work: '工作',
}

export const SubCategory = {
  // ['frontend-dev']: '前端開發',
  // ['backend-dev']: '後端開發',
  // ['product-management']: '產品管理',
}

export const Categories = [
  {
    title: Category.knowledge,
    description: '高效率的學習非常的重要，尤其是你想做的事特別多時，不要自己造輪子，直接站在巨人的肩膀上吧！',
    link: Routes.knowledge,
  },
  {
    title: Category.life,
    description: '人類活著的期間所做的一切行為皆是生活。勇於改善、優化生活，發現你從未想到的新鮮事！',
    link: Routes.life,
  },
  {
    title: Category.health,
    description: '健康是一切的基礎，分享如何擁有更好的體態、保持健康，以及如何更了解你的身體和心靈。',
    link: Routes.health,
  },
  {
    title: Category.money,
    description: '沒有錢萬萬不能，分享如何根據自身條件做適合的投資，以及如何實現財務獨立和提早退休。',
    link: Routes.money,
  },
  {
    title: Category.work,
    description:
      '大部分的人，每週工作至少40小時，無論是要找工作、轉職、提升工作效率、向上或向下管理，任何良好的改變，影響都非常巨大！',
    link: Routes.health,
  },
]

export const SubCategories = [
  // {
  //   title: SubCategory['frontend-dev'],
  //   description:
  //     'Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.',
  //   category: Category.knowledge,
  // },
  // {
  //   title: SubCategory['backend-dev'],
  //   description:
  //     'Back end Development refers to the server side of development where you are primarily focused on how the site works. Making updates and changes in addition to monitoring functionality of the site will be your primary responsibility.',
  //   category: Category.knowledge,
  // },
  // {
  //   title: SubCategory['product-management'],
  //   description:
  //     'Product management is an organisational function within a company dealing with new product development, business justification, planning, verification, forecasting, pricing, product launch, and marketing of a product or products at all stages of the product lifecycle',
  //   category: Category.knowledge,
  // },
]

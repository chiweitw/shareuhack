export const CMS_NAME = 'Shareuhack'
export const OG_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_URL + '/assets/brand/shareuhack.jpg'
const categoryPath = '/categories/'
const subcategoryPath = '/subcategories/'

export const Routes = {
  home: '/',
  about: '/about',
  category: '/categories/:category',
  subCategory: '/subcategories/:subCategory',
  instahack: '/instahack',
  crypto: '/crypto',
}

export const Category = {
  life: 'life',
  knowledge: 'knowledge',
  work: 'work',
  money: 'money',
}

export const SubCategory = {
  softwareDevelopment: 'softwareDevelopment',
  projectManagement: 'projectManagement',
  investment: 'investment',
  entrepreneurship: 'entrepreneurship',
  travel: 'travel',
  lifePhilosophy: 'lifePhilosophy',
  education: 'education',
  managementAndLeadership: 'managementAndLeadership',
  mindfulness: 'mindfulness',
}

const CategoryMap = {
  [SubCategory.softwareDevelopment]: Category.work,
  [SubCategory.projectManagement]: Category.work,
  [SubCategory.managementAndLeadership]: Category.work,
  [SubCategory.investment]: Category.money,
  [SubCategory.entrepreneurship]: Category.money,
  [SubCategory.travel]: Category.life,
  [SubCategory.lifePhilosophy]: Category.life,
  [SubCategory.education]: Category.knowledge,
  [SubCategory.mindfulness]: Category.life,
}

export const Categories = Object.keys(Category).map((key) => {
  return {
    key,
    link: categoryPath + key,
  }
})

export const SubCategories = Object.keys(SubCategory).map((key) => {
  return {
    key,
    link: subcategoryPath + key,
    category: CategoryMap[key],
  }
})

export const Locales = [
  {
    key: 'zh-TW',
    language: '繁體中文',
    // region: '台灣',
  },
  {
    key: 'en',
    language: 'English',
  // region: 'United State',
  },
  {
    key: 'ja',
    language: '日本語',
    // region: '日本',
  },
  // {
  //   key: 'en-GB',
  //   language: 'English',
  //   region: 'United Kingdom',
  // },
  // {
  //   key: 'en-SG',
  //   language: 'English',
  //   region: 'Singapore',
  // },

  // {
  //   key: 'zh-MO',
  //   language: '繁體中文',
  //   region: '澳門',
  // },
  // {
  //   key: 'zh-HK',
  //   language: '繁體中文',
  //   region: '香港',
  // },
  // {
  //   key: 'zh-CN',
  //   language: '简体中文',
  // region: '中国',
  // },
]

export const HotPostSlugs = [
  'how-to-get-agoda-transaction-fee-back',
  'meditation-101',
  'how-to-get-pmp-2021',
  'sense-of-ritual-best-practice',
  'how-to-become-a-frontend-engineer',
  'best-resources-to-learn-negotiation',
]

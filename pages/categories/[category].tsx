import { Grid, Box, Typography, useTheme, Button } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Category, Categories, Routes, SubCategories, CMS_NAME, OG_IMAGE_URL } from '../../lib/constants'
import { getCategoryPosts, getAllCategoryPaths } from '../../lib/api'
import InfoCard from '../../src/components/InfoCard/InfoCard'
import Link from '../../src/components/Link/Link'
import PreviewRow from '../../src/components/Post/PreviewRow'
import Divider from '../../src/components/Divider/Divider'
import { useTranslation } from 'next-i18next'

export default function CategoryPage({ category, subCategories }) {
  const { t } = useTranslation('common')
  const canonicalUrl = process.env.NEXT_PUBLIC_BASE_URL + '/categories/' + category.key

  const getSubCategoryStr = () =>
    subCategories.map((subCategory) => t(`subCategories.${subCategory.key}.title`)).join(', ')

  return (
    <>
      <Head>
        <title>
          {CMS_NAME} | {t(`categories.${category.key}.title`)}
        </title>
        <meta name="description" content={t(`categories.${category.key}.description`)} />
        <meta property="og:title" content={`${CMS_NAME}-${t(`categories.${category.key}.title`)}`} />
        <meta property="og:description" content={t(`categories.${category.key}.description`)} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="keywords" content={t(`categories.${category.key}.title`) + ', ' + getSubCategoryStr()} />
        <meta property="twitter:title" content={`${CMS_NAME}-${t(`categories.${category.key}.title`)}`} />
        <meta property="twitter:description" content={t(`categories.${category.key}.description`)} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content={OG_IMAGE_URL} />
        <meta property="twitter:image:alt" content={t(`categories.${category.key}.description`)} />
        <link rel="canonical" href={canonicalUrl} />
        {/* <link rel="amphtml" href={amphtmlUrl} /> */}
        <meta property="og:url" content={canonicalUrl} />
      </Head>
      {/* <Disclosure /> */}
      <Grid container spacing={30} pt={30}>
        <Grid item sm={9}>
          <Typography fontSize={36} fontWeight={700} component="h1">
            {t(`categories.${category.key}.title`)}
          </Typography>
          <Typography mt={12} fontSize={16}>
            {t(`categories.${category.key}.description`)}
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <InfoCard title={t('whatWeDo')} link={Routes.about} linkText={`${t('learnMore')}`}>
            {t('whatWeDoDescript')}
          </InfoCard>
        </Grid>
        <Grid item xs={12} md={9}>
          {subCategories.map((subCategory, idx) => (
            <Box key={idx} mb="15px">
              <Divider primary />
              <PreviewRow
                category={t(`subCategories.${subCategory.key}.title`)}
                description={t(`subCategories.${subCategory.key}.description`)}
                posts={subCategory.posts}
              />
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={3}>
          <Divider primary />
          <Typography mb="15px" variant="h6" mt={30}>
            Discover More
          </Typography>
          <Grid spacing={24} container>
            {Categories.filter((el) => el.key !== category.key).map((link, idx) => (
              <Grid item key={idx} xs={12}>
                <Link href={link.link} title={t(`categories.${link.key}.title`)} type="nav">
                  <Typography variant="h6">{t(`categories.${link.key}.title`)}</Typography>
                </Link>
                <Typography mt={6} variant="body1">
                  {t(`categories.${link.key}.description`)}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export async function getStaticProps({ params, locale }) {
  const category = Categories.find((category) => category.key === Category[params.category])
  const categoryPosts = getCategoryPosts(
    params.category,
    ['title', 'coverImage', 'updatedAt', 'excerpt', 'slug', 'subCategory'],
    locale
  )

  const subCategories = SubCategories.filter((el) => el.category === category.key).map(({ key }) => {
    const posts = categoryPosts.filter((post) => post.subCategory === key)
    const link = `/subcategories/${key}`
    return {
      key,
      posts,
      link,
    }
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      category,
      subCategories,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const paths = getAllCategoryPaths(locales)

  return {
    paths: paths,
    fallback: false,
  }
}

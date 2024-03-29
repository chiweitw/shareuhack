import { Grid, Box, Typography } from '@mui/material'
import PostPreview from './PostPreview'
import Link from '../Link/Link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function CategorySection({
  category,
  description,
  posts,
  link,
  simple,
}: {
  category: string
  description: string
  posts: {
    title: string
    coverImage: string
    updatedAt: string
    excerpt: string
    slug: string
  }[]
  link?: string
  simple?: boolean
}) {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" mt="15px" component="h2" color="primary">
          {category}
        </Typography>
        {link && (
          <Link href={link} locale={locale} title={t('showAll')} type="nav">
            <Typography variant="h6" fontSize="12px">
              {t('showAll')}
            </Typography>
          </Link>
        )}
      </Box>
      <Typography mt={6}>{description}</Typography>
      <Box mt="30px">
        <Grid spacing={30} container>
          {posts &&
            posts.map((post) => (
              <Grid key={post.title} item xs={12} sm={4}>
                <PostPreview {...post} simple={simple} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

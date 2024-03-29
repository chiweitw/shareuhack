import React, { useCallback } from 'react'
import NextLink from 'next/link'
import { Link as MuiLink, useTheme } from '@mui/material'
import { event } from '../../../lib/gtag'

interface Props {
  href: string
  target?: string
  children: React.ReactNode
  rel?: string
  color?: string
  locale?: string
  onClick?: () => void
  title: string
  disableUnderline?: boolean
  disableHover?: boolean
  type: 'affiliate' | 'external' | 'internal' | 'nav'
  fontSize?: number | string
}

export default function Link(props: Props) {
  const { href, target, children, rel, locale, onClick, color, title, disableUnderline, disableHover, type, fontSize } =
    props
  const theme = useTheme()

  const handleClick = useCallback(() => {
    onClick && onClick()
    event({
      action: 'click',
      category: type,
      label: title,
    })
  }, [])

  return (
    <NextLink href={href} locale={locale} passHref>
      <MuiLink
        target={target}
        rel={rel}
        onClick={handleClick}
        title={title}
        sx={{
          color: color || theme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            color: disableHover ? color || theme.palette.text.primary : theme.palette.primary.main,
            textDecoration: disableUnderline ? 'none' : 'underline',
          },
          fontSize: fontSize || '14px',
        }}
      >
        {children}
      </MuiLink>
    </NextLink>
  )
}

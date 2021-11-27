import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
// import theme from '../../theme/index'

interface Props {
  href?: string
  target?: string
  children: React.ReactNode
  rel?: string
  color?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: (props: Props) => (props.color ? props.color : theme.palette.primary.main),
    textDecoration: 'none',
    '&:hover *': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}))

const Link = React.forwardRef((props: Props, ref) => {
  const { href, target, children, rel } = props
  const classes = useStyles(props)
  return (
    <a className={classes.link} href={href} target={target} rel={rel}>
      {children}
    </a>
  )
})

export default Link

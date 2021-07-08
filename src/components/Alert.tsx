import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert as MuiAlert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function Alert() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <MuiAlert severity="info">
          Shareuhack是仰賴用戶支持而持續產生內容的，當您透過網站內的連結購買商品，我們可能因此收益。
          <Link href="#">了解更多</Link>
        </MuiAlert>
      </div>
    </>
  )
}
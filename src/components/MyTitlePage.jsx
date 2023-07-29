import { Typography } from '@mui/material'

const MyTitlePage = () => {
    return <Typography variant="h4" align="center">{localStorage.getItem('titlePage')}</Typography>
}

export default MyTitlePage
import {Grid,Typography,Stack,TextField,Button,Divider,Link} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useNavigate} from 'react-router-dom'

const Login = ()=>{
    const navigate= useNavigate()
    const handleNavigateToSignup = ()=> navigate('/signup')

    return(
        <>
            <Grid container>
                <Grid item xs={6}> </Grid>
                <Grid item xs={6}>
                    <Stack spacing={3} sx={{mx:'12%',mt:'30%', border:'1px solid rgb(229,229,229)',padding:'4%'}}>
                        <Typography align='center' variant='h2'sx={{my:'10%'}}> Meeting Slaves </Typography>
                        <TextField label="Username" variant="outlined" />
                        <TextField label="Password" variant="outlined" />
                        <Button variant='contained'> Log in</Button>
                        <Divider>or</Divider>
                        <Button startIcon={<FacebookIcon />}>Log in with Facebook </Button>
                        <Link align='center'> Forgot Password</Link>
                    </Stack>
                    <Stack spacing={2} sx={{mx:'12%',mt:'5%', border:'1px solid rgb(229,229,229)',padding:'4%'}}>
                        <Typography align='center' variant='h4'>
                            Don't have an account?
                            <Link onClick={handleNavigateToSignup}> Sign up</Link>
                        </Typography>

                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
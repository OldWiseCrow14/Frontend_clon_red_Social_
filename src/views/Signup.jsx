import {Grid,Typography,Stack,TextField,Button,Divider,Link} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import validator from 'validator'

import MyInput from '../components/MyInput'
import login_Store from '../store/login_store'
import MyFormState from '../components/MyFormState'
import { useState } from 'react'

const Signup = ()=>{
    const [formikAlert, setFormikAlert] = useState(false)
    const navigate= useNavigate()
    const handleNavigateToLogIn= ()=> navigate('/')
    const {handleSignup} = login_Store()
    const handleNavigateToHome = ()=> navigate('/home')

    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
            confirmPassword:"",
            email:"",
            name:""
        },
        validate: (values)=>{
            const errors = {}
            if (!validator.isLength(values.username, {min:3, max:15})) {
                errors.username = 'El nombre de usuario de be contener de 3 a 15 caracteres.'
            }
            if (!validator.isEmail(values.email)){
                errors.email = 'La direccion de correo electronico no es valida.'
            }
            if (!validator.isLength(values.password, {min:8, max:25})) {
                errors.password = 'La contraseña debe tener entre 8 y 25 caracteres.'
            }
            if (values.password !== values.confirmPassword){
                errors.confirmPassword = 'Las contraseñas no coinciden.'
            }
            if (!validator.isLength(values.name, {min:3, max:30})){
                errors.name = 'El nombre debe tener entre 3 y 30 caracteress.'
            }
            return errors
        },
        onSubmit: async ({username,password,confirmPassword,email,name}, {setSubmitting})=>{
            try {
                await handleSignup({username,password,confirmPassword,email,name})
                handleNavigateToHome()
            } catch (error) {
                setSubmitting(false)
                setFormikAlert(error.message)
            }
        }
     })


    return(
        <>
            <Stack spacing={2} sx={{mt:'10%', mx:'30%', border:'1px solid rgb(219,219,219)',padding:'4%'}}>
                <Typography sx={{my:'10%'}} align='center' variant='h2'>Meeting slaves</Typography>
                <Typography align='center' variant='h4'>Sign up to see photos and videos from your friends.</Typography>
                <Button variant='contained' startIcon={<FacebookIcon />}>Log in with Facebook </Button>
                <Divider>or</Divider>
                <MyInput label="Username" name='username' formik={formik}/>
                <MyInput label="Email" name='email' formik={formik}/>
                <MyInput label="Password" name='password' formik={formik}/>
                <MyInput label="Confirm password" name='confirmPassword' formik={formik}/>
                <MyInput label="Name" name='name' formik={formik}/>
                <Typography align='center'> People who use our service may have uploaded your contact information to Instagram. Learn More</Typography>
                <MyFormState spinner={formik.isSubmitting} alertStatus={!formik.isSubmitting && formikAlert}/>
                <Button variant='contained' onClick={formik.handleSubmit}> Sign up</Button>
            </Stack>
            <Stack sx={{mt:'5%', mx:'30%', border:'1px solid rgb(219,219,219)',padding:'4%'}}>
                <Typography align='center' variant='h4'>
                    Have an account?
                     <Link onClick={handleNavigateToLogIn}> Log in</Link>
                 </Typography>
            </Stack>
        </>
    )
}

export default Signup
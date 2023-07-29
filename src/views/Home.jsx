import { Stack,Avatar, Typography } from "@mui/material"


const Home = ()=>{
    return (
        <>
        <Stack direction={'row'} justifyContent="center" spacing={3} padding={3}>
            <Avatar sx={{width:100, height:100}}/>
            <Avatar sx={{width:100, height:100}}/>
            <Avatar sx={{width:100, height:100}}/>
            <Avatar sx={{width:100, height:100}}/>
            <Avatar sx={{width:100, height:100}}/>
            <Avatar sx={{width:100, height:100}}/>
        </Stack>
        <Stack>
            <Stack direction={'row'} justifyContent="flex-start" spacing={4} padding={3} alignItems={"center"}>
            <Avatar sx={{width:70, height:70}}/>
            <Typography>ElTodasMias</Typography>
            </Stack>
            
        </Stack>
        </>
    )
}



export default Home
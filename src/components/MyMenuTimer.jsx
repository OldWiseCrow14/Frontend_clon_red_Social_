import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Menu, MenuItem, Button } from '@mui/material'
import useTimerStore from '../store/useTimerStore'
import TimerIcon from '@mui/icons-material/Timer'
import TimerOffIcon from '@mui/icons-material/TimerOff'

const styleTime = { fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '3rem' }
const styleContent = { display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3rem 0', width: '100%' }

const MyMenuTimer = ({ anchorEl, handleClose }) => {

  const { handleCreateTimer } = useTimerStore()

  const [isPaused, setPaused] = useState(localStorage.getItem('timerIsPaused') === 'false' ? false: true)
  const [isActive, setIsActive] = useState(localStorage.getItem('timerIsActive') === 'false' ? false: true)
  const [time, setTime] = useState(0)

  const calcularTiempo = () => {
    const tiempoInicial = parseInt(localStorage.getItem('timerTiempoInicial'))
    const tiempoActual = new Date().getTime()
    const tiempoTranscurrido = tiempoActual - tiempoInicial
    if(parseInt(localStorage.getItem('timerValue')) > 0) {
      const timerValue = parseInt(localStorage.getItem('timerValue')) + tiempoTranscurrido
      setTime(timerValue)
      return
    }
    setTime(tiempoTranscurrido)
  }

  const handlePausar = () => {
    const tiempoInicial = parseInt(localStorage.getItem('timerTiempoInicial'))
    const tiempoActual = new Date().getTime()
    const tiempoTranscurrido = tiempoActual - tiempoInicial
    const tiempoAcumulado = parseInt(localStorage.getItem('timerValue')) + tiempoTranscurrido
    setPaused(true)
    localStorage.setItem('timerIsPaused', true)
    localStorage.setItem('timerValue', tiempoAcumulado)
  }
  const handleReanudar = () => {
    localStorage.setItem('timerTiempoInicial', new Date().getTime())
    setPaused(false)
    localStorage.setItem('timerIsPaused', false)
  }
  const handleFinalizar = async () => {
    calcularTiempo()
    setIsActive(false)
    localStorage.setItem('timerIsActive', false)
    localStorage.setItem('timerValue', 0)
    await handleCreateTimer({ timer: time })
    handleClose()
  }

  useEffect(() => {
    if(!isPaused) { calcularTiempo() }
  }, [anchorEl])

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      handleFinalizar()
      return ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

	return (
		<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem sx={{width: '24rem', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!isPaused && isActive && <Box sx={[styleContent, {height: '5%'}]}>
					<Typography variant="span" sx={[styleTime, {color: 'black'}]}>
						{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
					</Typography>
					<Typography variant="span" sx={[styleTime, {color: 'black'}]}>
						{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
					</Typography>
					<Typography variant="span" sx={[styleTime, {color: 'black'}]}>
						{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
					</Typography>
				</Box>
        }
        {isPaused ? <TimerOffIcon /> : <TimerIcon />}
        {isActive && <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
          {isPaused ? (
            <Button variant='contained' onClick={handleReanudar}>Reanudar</Button>
          ): (
            <Button variant='contained' onClick={handlePausar}>Pausar</Button>
          )}
          <Button variant='contained' onClick={handleFinalizar}>Finalizar</Button>
        </Stack>}
      </MenuItem>
    </Menu>
	)
}

export default MyMenuTimer

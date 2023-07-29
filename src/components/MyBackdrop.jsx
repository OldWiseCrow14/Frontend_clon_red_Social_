import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material'

const NO_FUNC = () => {}

const MyBackdrop = ({ open, handleClose }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 4444 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
      </Backdrop>
    )
}

MyBackdrop.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
}

MyBackdrop.defaultProps = {
    open: false,
    handleClose: NO_FUNC
}

export default MyBackdrop
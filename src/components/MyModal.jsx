import PropTypes from 'prop-types'
import { Modal, Box, Paper } from '@mui/material'

import themeModal from '../theme/themeModal'

const NO_FUNC = () => {}
const SX = { width: 400, p: 4 }

const MyModal = ({ children, open, onClose, sx }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={themeModal}>
                <Paper sx={{ ...SX,...sx}}>
                    {children}
                </Paper>
            </Box>
        </Modal>
    )
}

MyModal.propTypes = {
    children: PropTypes.element,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    sx: PropTypes.object
}

MyModal.defaultProps = {
    children: <></>,
    open: false,
    onClose: NO_FUNC,
    sx: {}
}

export default MyModal
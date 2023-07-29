import PropTypes from 'prop-types'
import { Stack, CircularProgress, Alert } from '@mui/material'

const MyFormState = ({ spinner, alertStatus, alertType }) => {
    return (
        <Stack spacing={1} alignItems="center">
            {spinner && <CircularProgress />}
            {alertStatus && <Alert severity={alertType}>{alertStatus}</Alert>}
        </Stack>
    )
}

MyFormState.propTypes = {
    spinner: PropTypes.bool.isRequired,
    alertStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    alertType: PropTypes.string
}

MyFormState.defaultProps = {
    spinner: false,
    alertStatus: false,
    alertType: 'error'
}

export default MyFormState
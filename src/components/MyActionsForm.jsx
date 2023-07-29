import PropTypes from 'prop-types'
import { Stack, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'

const NO_FUNC = () => {}

const MyActionsForm = ({ submit, cancel, submitLabel, cancelLabel, variant, submitIcon, cancelIcon }) => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
            <Button
                variant={variant}
                color="primary"
                startIcon={submitIcon}
                onClick={submit}
                type="submit"
            >{submitLabel}</Button>
            <Button
                variant={variant}
                color="error"
                startIcon={cancelIcon}
                onClick={cancel}
            >{cancelLabel}</Button>
        </Stack>
    )
}

MyActionsForm.propTypes = {
    submit: PropTypes.func,
    cancel: PropTypes.func,
    submitLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    variant: PropTypes.string,
    submitIcon: PropTypes.element,
    cancelIcon: PropTypes.element
}

MyActionsForm.defaultProps = {
    submit: NO_FUNC,
    cancel: NO_FUNC,
    submitLabel: 'Guardar',
    cancelLabel: 'Cancelar',
    variant: 'contained',
    submitIcon: <SaveIcon />,
    cancelIcon: <DoDisturbIcon />
}

export default MyActionsForm
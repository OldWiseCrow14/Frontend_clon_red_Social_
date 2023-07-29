import PropTypes from 'prop-types'
import { TextField, MenuItem } from '@mui/material'

const MySelect = ({ margin,  label, name, formik, inputProps, items, itemValue, itemLabel }) => {

    return (
        <TextField
            margin={margin}
            select
            required
            fullWidth
            id={new Date().getTime().toString()}
            label={label}
            name={name}
            InputProps={inputProps}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
        >
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    value={typeof item === 'string' ? item : item[itemValue]}
                >
                    {typeof item === 'string' ? item : item[itemLabel || itemValue]}
                </MenuItem>
            ))}
        </TextField>
    )
}

MySelect.propTypes = {
    margin: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    formik: PropTypes.object.isRequired,
    inputProps: PropTypes.object,
    items: PropTypes.array.isRequired,
    itemValue: PropTypes.string,
    itemLabel: PropTypes.string
}

MySelect.defaultProps = {
    margin: 'normal',
    label: '',
    name: '',
    formik: {},
    inputProps: {},
    items: [],
    itemValue: '',
    itemLabel: ''
}

export default MySelect
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

const MyInput = ({ margin, disabled, type, label, name, multiline, formik, inputProps, InputLabelProps }) => {
  return (
    <TextField
      margin={margin}
      required
      fullWidth
      id={new Date().getTime().toString()}
      disabled={disabled}
      type={type}
      label={label}
      name={name}
      multiline={multiline}
      InputProps={inputProps}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      InputLabelProps={InputLabelProps}
    />
  )
}

MyInput.propTypes = {
  margin: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  formik: PropTypes.object.isRequired,
  inputProps: PropTypes.object,
  InputLabelProps: PropTypes.object
}

MyInput.defaultProps = {
  margin: 'normal',
  disabled: false,
  type: 'text',
  label: '',
  name: '',
  multiline: false,
  formik: {},
  inputProps: {},
  InputLabelProps: {}
}

export default MyInput

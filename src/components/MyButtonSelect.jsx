import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Menu, MenuItem } from '@mui/material'

const NO_FUNC = () => {}

const MyButtonSelect = ({ variant, color, startIcon, endIcon, disabled, id, label, items, onSelect, itemLabel, sx }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Button
        variant={variant}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={handleClick}
        id={id}
        sx={sx}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': id }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.id || index}
            onClick={() => {
              handleClose()
              onSelect ? onSelect(item) : NO_FUNC()
            }}
          >
            {item[itemLabel] || ''}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

MyButtonSelect.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  disabled: PropTypes.bool,
  id: PropTypes.any.isRequired,
  label: PropTypes.string,
  items: PropTypes.array,
  onSelect: PropTypes.func,
  itemLabel: PropTypes.string,
  sx: PropTypes.object
}

MyButtonSelect.defaultProps = {
  variant: 'contained',
  color: 'primary',
  startIcon: <></>,
  endIcon: <></>,
  disabled: false,
  label: '',
  items: [],
  onSelect: NO_FUNC,
  itemLabel: '',
  sx: {}
}

export default MyButtonSelect
import PropTypes from 'prop-types'
import { Stack, Button } from '@mui/material'

import MyButtonSelect from './MyButtonSelect'

const NO_FUNC = () => {}

const MyButtonsGroup = ({ buttons }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      {buttons.map((button, index) => button.menu ? (
          <MyButtonSelect
            key={index}
            variant={button.variant}
            color={button.color}
            startIcon={button.icon || button.startIcon}
            endIcon={button.endIcon}
            disabled={button.disabled}
            id={index}
            label={button.label}
            items={button.items}
            onSelect={item => button.onClick(item)}
            itemLabel={button.itemLabel}
          />
        ) : (
          <Button
            key={index}
            variant={button.variant || 'contained'}
            color={button.color || 'primary'}
            startIcon={button.icon || button.startIcon || <></>}
            endIcon={button.endIcon || <></>}
            disabled={button.disabled || false}
            onClick={button.onClick || NO_FUNC}
          >
            {button.label || ''}
          </Button>
        )
      )}
    </Stack>
  )
}

MyButtonsGroup.propTypes = { buttons: PropTypes.array }

MyButtonsGroup.defaultProps = { buttons: [] }

export default MyButtonsGroup

import { Stack, Card, CardContent, Typography, Box, Chip } from '@mui/material'
import PropTypes from 'prop-types'

const NO_FUNC = () => {}

const MyStackList = ({ items, label, options }) => {
    return (
        <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
            {items.map((item, index) => (
                <Card key={item.id || index}>
                    <CardContent>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="h5">{item[label]}</Typography>
                            <Box>
                                {options.map((option, index) => (
                                    <Chip
                                        key={index}
                                        sx={{ mx: 1 }}
                                        icon={option.icon || <></>}
                                        label={option.label || ''}
                                        onClick={() => option.onClick ? option.onClick(item) : NO_FUNC()}
                                    />
                                ))}
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    )
}

MyStackList.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string,
    options: PropTypes.array
}

MyStackList.defaultProps = {
    items: [],
    label: '',
    options: []
}

export default MyStackList
import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <Box minHeight="95vh">
            <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
                <CircularProgress />
            </Stack>
    </Box>
    )
}

export default Loading

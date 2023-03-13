import * as React from 'react'
import { Box, Typography } from '@mui/material'

export default function Projects() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          my: { xs: 7, sm: 8 },
        }}
      >
        <Typography variant="h2">My Projects</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mb: { xs: 7, sm: 8 },
        }}
      >
        <Typography variant="h2">Content</Typography>
      </Box>
    </>
  )
}

import * as React from 'react'

import image from '../../img/heroimg.jpg'
import { Box, Stack, Typography } from '@mui/material'

export default function HeroImg() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          height: '90vh',
          my: { xs: 7, sm: 8 },
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '90%',
          height: '90vh',
          my: { xs: 7, sm: 8 },
          bgcolor: 'rgb(0,0,0,0.7)',
          color: 'black',
          zIndex: 5,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          direction: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: '90vh',
          my: { xs: 7, sm: 8 },
          color: 'white',
          zIndex: 11,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h1">pmd - design</Typography>
          <Typography variant="h4"> We can do everything!</Typography>
        </Stack>
      </Box>
    </>
  )
}

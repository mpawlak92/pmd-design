import * as React from 'react'

import image from '../../img/heroimg.jpg'
import { Box, Stack, Typography } from '@mui/material'

export default function HeroImg() {
  return (
    <>
      <Box
        sx={{
          width: '90%',
          height: '90vh',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: '90%',
          height: '90vh',
          position: 'absolute',
          color: 'black',
          bgcolor: 'rgb(0,0,0,0.7)',
          zIndex: 5,
        }}
      />
      <Box
        sx={{
          width: '90%',
          height: '90vh',
          position: 'absolute',
          zIndex: 11,
          display: 'flex',
          direction: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          //   spacing={2}
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

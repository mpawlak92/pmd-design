import React from 'react'
import ownerImg from '../../img/owner.jpg'
import { Box, Typography } from '@mui/material'

export default function AboutMe() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mt: { xs: 5, sm: 10 },
          mb: { xs: 5, sm: 0 },
        }}
      >
        <Typography variant="h2">About me</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          width: '90%',
          my: { xs: 0, sm: 8 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', md: '50%' },
            mb: { xs: 4, md: 2 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: '60%',
              my: { xs: 2, sm: 3 },
            }}
          >
            My Design Philosophy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '70%',
              mb: { xs: 2, sm: 3 },
            }}
          >
            I’m a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Box>

        <Box
          component="img"
          sx={{
            width: { xs: '100%', md: '50%' },
            maxHeight: { xs: '50vh', md: '75vh' },
            objectFit: 'contain',
            mb: { xs: 4, md: 2 },
          }}
          alt="Krzysztof (website owner photo)."
          src={ownerImg}
        />
      </Box>
    </>
  )
}

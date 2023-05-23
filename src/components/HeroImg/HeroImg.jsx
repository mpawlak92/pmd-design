import * as React from 'react'
import image from '../../assets/heroimg.jpg'
import { Box, Stack, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function HeroImg() {
  React.useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '90%' },
          height: {
            xs: 'calc(100vh - 56px)',
            sm: 'calc((100vh - 56px) - 5vw)',
          },
          mt: { xs: 7, sm: 8 },
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '100%', sm: '90%' },
          height: {
            xs: 'calc(100vh - 56px)',
            sm: 'calc((100vh - 56px) - 5vw)',
          },
          mt: { xs: 7, sm: 8 },
          bgcolor: 'rgb(0,0,0,0.8)',
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
          width: { xs: '100%', sm: '90%' },
          height: {
            xs: 'calc(100vh - 56px)',
            sm: 'calc((100vh - 56px) - 5vw)',
          },
          mt: { xs: 7, sm: 8 },
          color: 'white',
          zIndex: 11,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            padding: 2,
          }}
        >
          <Box
            data-aos="fade-up"
            component="img"
            sx={{
              objectFit: 'contain',
              mt: -15,
            }}
            alt="Krzysztof (website owner photo)."
            src="logo/PMD_logo_biale.svg"
          />

          <Typography
            data-aos="fade-up"
            data-aos-delay="1000"
            variant="h2"
            sx={{
              fontSize: { xs: '120%', sm: '150%', md: '200%' },
              textAlign: 'center',
              fontFamily: 'Roboto',
            }}
          >
            Nie ma dla nas rzeczy niemożliwych!
          </Typography>
        </Stack>
      </Box>
    </>
  )
}

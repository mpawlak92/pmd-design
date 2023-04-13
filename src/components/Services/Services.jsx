import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

import woodCover from '../../assets/wood/wood_cover.jpg'
import metalCover from '../../assets/aluminum_welding/aluminium_cover.jpg'
import plasticCover from '../../assets/plastic_welding/plastic_cover.jpg'
import print3dCover from '../../assets/3d/3d_printing_cover.jpg'
import { Link } from 'react-router-dom'

import './Services.scss'
import Section from '../Section/Section'

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#fcf3ea',
          mt: { xs: 5, sm: 10 },
          pt: { xs: 2, sm: 4 },
          pb: { xs: 5, sm: 0 },
        }}
      >
        <Typography variant="h2" data-aos="fade-in">
          Nasze usługi
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fcf3ea',
          width: '100%',
          justifyContent: 'center',
          py: { xs: 0, sm: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            width: { xs: '100%', md: '90%' },
          }}
        >
          <Card
            data-aos="slide-right"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <Link className="card-link" to="/druk-3d">
              <CardMedia
                component="img"
                height="240"
                image={print3dCover}
                alt="Druk 3D"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Druk 3D
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tutaj jest miejsce na krótki opis
                </Typography>
              </CardContent>
            </Link>
          </Card>

          <Card
            data-aos="slide-left"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <Link className="card-link" to="/iron-welding">
              <CardMedia
                component="img"
                height="240"
                image={metalCover}
                alt="Spawanie metalu i alumienium "
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spawanie stali i aluminium
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tutaj jest miejsce na krótki opis
                </Typography>
              </CardContent>
            </Link>
          </Card>

          <Card
            data-aos="slide-right"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <Link className="card-link" to="/plastic-welding">
              <CardMedia
                component="img"
                height="240"
                image={plasticCover}
                alt="Spawanie plastiku"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spawanie plastiku
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tutaj jest miejsce na krótki opis
                </Typography>
              </CardContent>
            </Link>
          </Card>

          <Card
            data-aos="slide-left"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <Link className="card-link" to="/wood">
              <CardMedia
                component="img"
                height="240"
                image={woodCover}
                alt="Prace w drewnie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Prace w drewnie
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tutaj jest miejsce na krótki opis
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>
      </Box>
      <Section id="services" name="projects" />
    </>
  )
}

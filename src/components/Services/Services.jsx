import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import projImg1 from '../../img/proj1.jpg'
import projImg2 from '../../img/proj2.jpg'
import projImg3 from '../../img/proj3.jpg'
import projImg4 from '../../img/proj4.jpg'

export default function Services() {
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
        <Typography variant="h2">Moje usługi</Typography>
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
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <CardActionArea href="#">
              <CardMedia
                component="img"
                height="240"
                image={projImg2}
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
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <CardActionArea href="#">
              <CardMedia
                component="img"
                height="240"
                image={projImg3}
                alt="Spawanie metalu i alumienium "
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spawanie metalu i alumienium
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tutaj jest miejsce na krótki opis
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <CardActionArea href="#">
              <CardMedia
                component="img"
                height="240"
                image={projImg1}
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
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: { xs: '80vw', md: '35vw' },
              alignSelf: 'center',
              maxWidth: 500,
              m: { xs: 0, md: 5 },
              mb: { xs: 5, md: 0 },
            }}
          >
            <CardActionArea href="#">
              <CardMedia
                component="img"
                height="240"
                image={projImg4}
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
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </>
  )
}

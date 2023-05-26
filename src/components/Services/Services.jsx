import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  ImageList,
  ImageListItem,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'

import metalCover from '../../assets/aluminum_welding/aluminium_cover.jpg'
import print3dCover from '../../assets/3d/3d_printing_cover.jpg'
import plasticCover from '../../assets/plastic_welding/plastic_cover.jpg'
import woodCover from '../../assets/wood/wood_cover.jpg'
import { Link } from 'react-router-dom'

import projImg1 from '../../assets/services_gallery/proj1.jpg'
import projImg2 from '../../assets/services_gallery/proj2.jpg'
import projImg3 from '../../assets/services_gallery/proj3.jpg'
import projImg4 from '../../assets/services_gallery/proj4.jpg'
import projImg5 from '../../assets/services_gallery/proj5.jpg'
import projImg6 from '../../assets/services_gallery/proj6.jpg'
import projImg7 from '../../assets/services_gallery/proj7.jpg'
import projImg8 from '../../assets/services_gallery/proj8.jpg'

import './Services.scss'
const itemData = [
  {
    img: `${projImg1}`,
    title: 'Bed',
  },
  {
    img: `${projImg2}`,
    title: 'Kitchen',
  },
  {
    img: `${projImg3}`,
    title: 'Sink',
  },
  {
    img: `${projImg4}`,
    title: 'Books',
  },
  {
    img: `${projImg5}`,
    title: 'Chairs',
  },
  {
    img: `${projImg6}`,
    title: 'Candle',
  },
  {
    img: `${projImg7}`,
    title: 'Laptop',
  },
  {
    img: `${projImg8}`,
    title: 'Doors',
  },
]
export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projectsGallery = () => {
    if (windowWidth <= 600) {
      return (
        <ImageList sx={{ width: '90%' }} variant="woven" cols={1} gap={0}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    } else if (windowWidth > 600 && windowWidth <= 900) {
      return (
        <ImageList sx={{ width: '90%' }} variant="woven" cols={2} gap={50}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    } else if (windowWidth > 900 && windowWidth <= 1200) {
      return (
        <ImageList sx={{ width: '90%' }} variant="woven" cols={3} gap={50}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    } else if (windowWidth > 1200) {
      return (
        <ImageList sx={{ width: '90%' }} variant="woven" cols={4} gap={70}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    }
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100vw',
          backgroundColor: '#fcf3ea',
          mt: { xs: 6, sm: 10 },
          pr: '8vw',
          pl: '8vw',
          pb: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            display: 'block',
            textAlign: 'center',
            width: '100vw',
            mt: { xs: 4, sm: 4 },
            pb: { xs: 3, sm: 3 },
          }}
          variant="h2"
          data-aos="fade-in"
        >
          Nasze usługi
        </Typography>
        <Box
          data-aos="slide-right"
          sx={{
            m: { xs: 4, md: 4 },
          }}
        >
          <Card
            sx={{
              width: { xs: '80vw', md: '35vw' },
              maxWidth: 500,
              minHeight: 365,
              alignSelf: 'center',
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
                  Druk 3D jest jak zaczarowany ołówek z bajki. Narysuj model,
                  drukuj i już!
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>

        <Box
          data-aos="slide-right"
          sx={{
            m: { xs: 4, md: 4 },
          }}
        >
          <Card
            data-aos="slide-left"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              maxWidth: 500,
              minHeight: 365,
              alignSelf: 'center',
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
                  Obróbka stali
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Metal ciekawie łaczy się z innymi materiałami takimi jak
                  drewno czy tworzywa sztuczne...
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>

        <Box
          data-aos="slide-right"
          sx={{
            m: { xs: 4, md: 4 },
          }}
        >
          <Card
            data-aos="slide-right"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              maxWidth: 500,
              minHeight: 365,
              alignSelf: 'center',
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
                  Spawanie plastiku często jest problematyczne jednak sporą
                  praktyka potrafi to zmienić.
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>

        <Box
          data-aos="slide-right"
          sx={{
            m: { xs: 4, md: 4 },
          }}
        >
          <Card
            data-aos="slide-left"
            sx={{
              width: { xs: '80vw', md: '35vw' },
              maxWidth: 500,
              minHeight: 365,
              alignSelf: 'center',
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
                  Każdy kto miał okazję być w warsztacie stolarskim nie zapomni
                  zapachu obróbki drewna a to zapach mojego dzieciństwa...
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          my: { xs: 5, sm: 10 },
        }}
      >
        <Typography
          variant="h3"
          data-aos="fade-in"
          sx={{ textAlign: 'center' }}
        >
          Kilka naszych projektów
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '90%',
        }}
      >
        {projectsGallery()}
      </Box>
    </>
  )
}

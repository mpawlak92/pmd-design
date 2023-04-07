import { useState, useEffect } from 'react'
import projImg1 from '../../img/proj1.jpg'
import projImg2 from '../../img/proj2.jpg'
import projImg3 from '../../img/proj3.jpg'
import projImg4 from '../../img/proj4.jpg'
import projImg5 from '../../img/proj5.jpg'
import projImg6 from '../../img/proj6.jpg'
import projImg7 from '../../img/proj7.jpg'
import projImg8 from '../../img/proj8.jpg'
import videoBg from '../../assets/videoBg.mp4'
import {
  Box,
  ImageList,
  ImageListItem,
  Button,
  alpha,
  Typography,
} from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './3DPrint.scss'
import { useNavigate } from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

// import { Link } from 'react-scroll'
export default function Print() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
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
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxHeight: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: { xs: 'calc(100% - 4px)', lg: '100%' },
            backgroundColor: alpha('#000', 0.6),
          }}
        ></Box>
        <video src={videoBg} autoPlay loop muted />
        <Button
          variant="outlined"
          startIcon={<BsFillArrowLeftSquareFill />}
          onClick={goBack}
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            my: { xs: 2, sm: 2 },
            mx: { xs: 2, sm: 2 },
            backgroundColor: alpha('#000', 0.78),
          }}
        >
          Go back
        </Button>
        <Link
          to="3d-print-gallery"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              padding: '10px 20px',
              fontSize: '16px',
              transform: 'translate(-50%,-50%)',
              backgroundColor: alpha('#000', 0.4),
              color: 'white',
              borderColor: 'white',
            }}
          >
            Moje projekty
          </Button>
        </Link>
      </Box>
      <Box
        id="3d-print-gallery"
        data-aos="slide-right"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mb: { xs: 4, md: 2 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: '100%',
            textAlign: 'center',
            my: { xs: 2, sm: 3 },
          }}
        >
          Druk 3D. Jak to robimy?
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
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
        data-aos="fade-in"
      >
        {projectsGallery()}
      </Box>
    </>
  )
}
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

import { useState, useEffect } from 'react'
import printImg1 from '../../assets/3d/f1.jpg'
import printImg2 from '../../assets/3d/f2.jpg'
import printImg3 from '../../assets/3d/f3.jpg'
import printImg4 from '../../assets/3d/f4.jpg'
import printImg5 from '../../assets/3d/f5.jpg'
import printImg6 from '../../assets/3d/f6.jpg'
import printImg7 from '../../assets/3d/f7.jpg'
import videoBg from '../../assets/aluminum_welding/aluminum_video.mp4'
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
        <ImageList sx={{ width: '90%' }} variant="masonry" cols={1} gap={0}>
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
        <ImageList sx={{ width: '90%' }} variant="masonry" cols={2} gap={50}>
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
        <ImageList sx={{ width: '90%' }} variant="masonry" cols={3} gap={50}>
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
        <ImageList sx={{ width: '90%' }} variant="masonry" cols={3} gap={70}>
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
          Druk 3D jest jak zaczarowany ołówek z bajki. Narysuj model, drukuj i
          już. Ogranicza nas tylko wyobraźnia. Paleta filamentów (tworzywo z
          którego drukuje się model) zwiększa się z miesiąca na miesiąc. Pozwala
          to maksymalnie dobrać materiał do potrzeb danego projektu.
          Potrzebujesz madki, części do swojego auta, podstawki do modelu
          samolotu? rzaden problem, wydrukowac można dosłownie wszsytko!
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
    img: `${printImg1}`,
    title: 'Bed',
  },
  {
    img: `${printImg2}`,
    title: 'Kitchen',
  },
  {
    img: `${printImg3}`,
    title: 'Sink',
  },
  {
    img: `${printImg4}`,
    title: 'Books',
  },
  {
    img: `${printImg5}`,
    title: 'Chairs',
  },
  {
    img: `${printImg6}`,
    title: 'Candle',
  },
  {
    img: `${printImg7}`,
    title: 'Laptop',
  },
]

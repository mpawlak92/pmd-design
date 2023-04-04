import React, { useState, useEffect } from 'react'
import projImg1 from '../../img/proj1.jpg'
import projImg2 from '../../img/proj2.jpg'
import projImg3 from '../../img/proj3.jpg'
import projImg4 from '../../img/proj4.jpg'
import projImg5 from '../../img/proj5.jpg'
import projImg6 from '../../img/proj6.jpg'
import projImg7 from '../../img/proj7.jpg'
import projImg8 from '../../img/proj8.jpg'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  React.useEffect(() => {
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
          justifyContent: 'center',
          width: '100%',
          my: { xs: 5, sm: 10 },
        }}
      >
        <Typography variant="h2" data-aos="fade-in">
          Moje Projekty
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

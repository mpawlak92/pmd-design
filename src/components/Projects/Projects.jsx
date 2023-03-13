import * as React from 'react'
import projImg1 from '../../img/proj1.jpg'
import projImg2 from '../../img/proj2.jpg'
import projImg3 from '../../img/proj3.jpg'
import projImg4 from '../../img/proj4.jpg'
import projImg5 from '../../img/proj5.jpg'
import projImg6 from '../../img/proj6.jpg'
import projImg7 from '../../img/proj7.jpg'
import projImg8 from '../../img/proj8.jpg'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'

export default function Projects() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          my: { xs: 8, sm: 9 },
        }}
      >
        <Typography variant="h2">My Projects</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mb: { xs: 7, sm: 8 },
        }}
      >
        <ImageList sx={{ width: '90%' }} variant="woven" cols={4} gap={100}>
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

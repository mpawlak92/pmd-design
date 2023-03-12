import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import HeroImg from '../HeroImg/HeroImg'

export default function Section(props) {
  const { id, name } = props
  return (
    <>
      <Box
        id={id}
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {name === 'heroImg' && <HeroImg />}
      </Box>
    </>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}

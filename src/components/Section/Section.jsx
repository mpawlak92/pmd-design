import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import HeroImg from '../HeroImg/HeroImg'
import Projects from '../Projects/Projects'

export default function Section(props) {
  const { id, name } = props
  return (
    <>
      <Box
        id={id}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        {name === 'heroImg' && <HeroImg />}
        {name === 'projects' && <Projects />}
      </Box>
    </>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}

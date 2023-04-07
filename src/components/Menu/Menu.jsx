import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-scroll'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './Menu.scss'

const drawerWidth = 300
function Menu(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PMD-Design
      </Typography>
      <Divider />
      <List>
        <Link
          activeClass="active"
          to="#"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ListItem onClick={handleDrawerToggle} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              Strona główna
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-56}
          duration={500}
        >
          <ListItem onClick={handleDrawerToggle} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>O mnie</ListItemButton>
          </ListItem>
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-56}
          duration={500}
        >
          <ListItem onClick={handleDrawerToggle} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>Usługi</ListItemButton>
          </ListItem>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-56}
          duration={500}
        >
          <ListItem onClick={handleDrawerToggle} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>Kontakt</ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            PMD
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link
              activeClass="active"
              to="#"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Button sx={{ color: '#000', mx: 1 }}>Stron główna</Button>
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Button sx={{ color: '#000', mx: 1 }}>O mnie</Button>
            </Link>

            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={15}
              duration={500}
            >
              <Button sx={{ color: '#000', mx: 1 }}>Usługi</Button>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={15}
              duration={500}
            >
              <Button sx={{ color: '#000', mx: 1 }}>Kontakt</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

Menu.propTypes = {
  window: PropTypes.func,
}

export default Menu

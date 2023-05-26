import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import imgNotFound from '../../assets/404.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
              <Button variant="contained">Back Home</Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img src={imgNotFound} alt="" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

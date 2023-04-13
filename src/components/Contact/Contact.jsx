import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Box, Grid, TextField, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [nameInputValue, setNameInputValue] = useState('')
  const [surnameInputValue, setSurnameInputValue] = useState('')
  const [mailInputValue, setMailInputValue] = useState('')
  const [messageInputValue, setMessageInputValue] = useState('')
  const [submitMessage, setSubmitMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [errors, setErrors] = useState([])
  const [nameError, setNameError] = useState(false)
  const [surnameError, setSurnameError] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [textError, setTextError] = useState(false)

  const form = useRef()
  const handleInput = (e) => {
    const fieldType = e.target.id

    if (fieldType === 'name') {
      setNameInputValue(e.target.value)
    } else if (fieldType === 'surname') {
      setSurnameInputValue(e.target.value)
    } else if (fieldType === 'email') {
      setMailInputValue(e.target.value)
    } else if (fieldType === 'message') {
      setMessageInputValue(e.target.value)
    }
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()

    const errors = []

    // Validate name field
    if (!nameInputValue) {
      errors.push('Pole imię jest wmagane.')
      setNameError(true)
    } else {
      setNameError(false)
    }

    // Validate surname field
    if (!surnameInputValue) {
      errors.push('Pole nazwisko jest wymagane.')
      setSurnameError(true)
    } else {
      setSurnameError(false)
    }

    // Validate email field
    if (!mailInputValue) {
      errors.push('Podaj swój adres email.')
      setMailError(true)
    } else if (!/\S+@\S+\.\S+/.test(mailInputValue)) {
      errors.push('Adres email jest nieprawidłowy.')
      setMailError(true)
    } else {
      setMailError(false)
    }

    // Validate message field
    if (!messageInputValue) {
      errors.push('Wpisz wiadomość.')
      setTextError(true)
    } else {
      setTextError(false)
    }

    // Set errors and show them if there are any
    setErrors(errors)
    if (errors.length > 0) {
      return
    } else {
      // sending email with emailjs.com
      emailjs
        .sendForm(
          'service_0308pul',
          'template_us00a2q',
          form.current,
          'TNvx6xtLOpKSWVgVu'
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setSubmitMessage(true)
            }
          },
          (error) => {
            if (error.status === 400) {
              setErrorMessage(true)
            }
          }
        )
    }

    // reset all formfields
    setNameInputValue('')
    setSurnameInputValue('')
    setMailInputValue('')
    setMessageInputValue('')
  }
  const cleanSubmitFormInfo = () => {
    setTimeout(() => {
      setSubmitMessage(false)
      setErrorMessage(false)
    }, 3000)
  }
  const submitFormInfo = () => {
    if (submitMessage) {
      cleanSubmitFormInfo()
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '80%',
            mt: { xs: 0, sm: 5 },
          }}
        >
          <Typography
            data-aos="zoom-in-down"
            variant="subtitle1"
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: 'success.main',
              mb: { xs: 3, sm: 3 },
            }}
          >
            Twoja wiadomość została wysłana. Odezwiemy się najszybciej jak to
            możliwe.
          </Typography>
        </Box>
      )
    }
    if (errorMessage) {
      cleanSubmitFormInfo()
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '80%',
            mt: { xs: 0, sm: 5 },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: 'error.main',
              mb: { xs: 3, sm: 3 },
            }}
          >
            Coś poszło nie tak! Sprubój jeszcze raz za kilka minut.
          </Typography>
        </Box>
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
          mt: { xs: 5, sm: 10 },
          mb: { xs: 5, sm: 0 },
        }}
      >
        <Typography variant="h2" data-aos="fade-in">
          Kontakt
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          mt: { xs: 0, sm: 5 },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ width: '100%', textAlign: 'center', mb: { xs: 3, sm: 3 } }}
        >
          Chcesz dowiedzeć się wiecej? Pisz, nie czekaj!
        </Typography>
      </Box>
      {submitFormInfo()}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '90%',
          mb: 8,
        }}
      >
        <form ref={form} onSubmit={handleSubmitForm}>
          <Grid container spacing={1}>
            <Grid xs={12} md={6} item>
              <TextField
                sx={{
                  width: '100%',
                }}
                error={nameError}
                id="name"
                name="name"
                label="Imię"
                value={nameInputValue}
                onChange={handleInput}
              />{' '}
            </Grid>
            <Grid xs={12} md={6} item>
              <TextField
                sx={{
                  width: '100%',
                }}
                error={surnameError}
                id="surname"
                name="surname"
                label="Nazwisko"
                value={surnameInputValue}
                onChange={handleInput}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                sx={{
                  width: '100%',
                }}
                error={mailError}
                id="email"
                name="mail"
                label="Email"
                value={mailInputValue}
                onChange={handleInput}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                sx={{
                  width: '100%',
                }}
                error={textError}
                id="message"
                name="message"
                label="Wiadomość"
                multiline
                rows={6}
                value={messageInputValue}
                onChange={handleInput}
              />
            </Grid>
            {errors.length > 0 && (
              <Grid
                xs={12}
                item
                sx={{
                  textAlign: 'center',
                  my: 2,
                }}
              >
                {errors.map((error, index) => (
                  <div key={index} style={{ color: 'red', marginBottom: 4 }}>
                    {error}
                  </div>
                ))}
              </Grid>
            )}

            <Grid xs={6} md={4} item>
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  width: '100%',
                }}
              >
                Wyślij
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  )
}

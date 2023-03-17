import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Box, Grid, TextField, Typography } from '@mui/material'

export default function Contact() {
  const [nameInputValue, setNameInputValue] = useState('')
  const [surnameInputValue, setSurnameInputValue] = useState('')
  const [mailInputValue, setMailInputValue] = useState('')
  const [messageInputValue, setMessageInputValue] = useState('')
  const [submitMessage, setSubmitMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

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
    // sending email with emailjs.com
    emailjs
      .sendForm(
        'service_aut12a8',
        'template_pn40usl',
        form.current,
        'LtQwMiI0se9a9WQQv'
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

    // reset all formfields
    setNameInputValue('')
    setSurnameInputValue('')
    setMailInputValue('')
    setMessageInputValue('')
  }
  const submitFormInfo = () => {
    if (submitMessage) {
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
        <Typography variant="h2">Kontakt</Typography>
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
                //   error
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
                //   error
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
                //   error
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
                id="message"
                name="message"
                label="Wiadomość"
                multiline
                rows={6}
                value={messageInputValue}
                onChange={handleInput}
              />
            </Grid>
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

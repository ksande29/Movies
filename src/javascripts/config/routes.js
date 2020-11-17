import express from 'express'

import {indexPage} from '../controllers/index'
import {aboutPage} from '../controllers/about'
import {contactPage} from '../controllers/contact'
import {allMoviesAPI, oneMovieAPI, updateMovieAPI, createMovieAPI, deleteMovieAPI} from '../controllers/movies'
import {registerUserAPI, signUserInAPI} from '../controllers/users'
import {contactAPI} from '../controllers/contacts'
import jwt from 'jsonwebtoken'

let router = express.Router()

function isSignedIn(req) {
  try {
    jwt.verify(req.cookies.token, APP_SECRET)
    return true
  } catch(err) {
    return false
  }
}

export function configureRoutes(app) {
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })
  router.get('/', indexPage)
  router.get('/about', aboutPage)
  router.get('/contact', contactPage)
  router.get('/movies*', indexPage)
  router.get('/register', indexPage)
  router.get('/signin', indexPage)
  
  //movies API endpoints
  router.get('/api/movies', allMoviesAPI)
  router.get('/api/movies/:id', oneMovieAPI)
  router.post('/api/movies', createMovieAPI)
  router.put('/api/movies/:id', updateMovieAPI)
  router.delete('/api/movies/:id', deleteMovieAPI)

  //contact API endpoints
  router.post('/api/contact', contactAPI)

  //users API endpoints
  router.post('api/users/register', registerUserAPI)
  router.post('api/users/signin', signUserInAPI)

  app.use('/', router)
}
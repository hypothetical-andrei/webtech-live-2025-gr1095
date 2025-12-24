const express = require('express')

const generalMiddleware = (req, res, next) => {
  console.log('general middleware applied')
  if (req.query.stopGeneral === 'on') {
    res.send('general stopped us')
  } else {
    next()
  }
}

const firstRequestMiddleware = (req, res, next) => {
  console.log('first request middleware applied')
  if (req.query.stopFirst === 'on') {
    res.send('first request middleware stopped us')
  } else {
    req.somekey = 'nothing relevant'
    next()
  }
}

const secondRequestMiddleware = (req, res, next) => {
  console.log('second request middleware applied')
  if (req.query.stopSecond === 'on') {
    res.send('second request middleware stopped us')
  } else {
    next()
  }
}

const firstErrorMiddleware = (err, req, res, next) => {
  console.log('first error middleware applied')
  if (req.query.stopFirstError === 'on') {
    res.send('first error middleware stopped us')
  } else {
    next(err)
  }
}

const secondErrorMiddleware = (err, req, res, next) => {
  console.log('second error middleware applied')
  if (req.query.stopSecondError === 'on') {
    res.send('second error middleware stopped us')
  } else {
    res.send('some error')
  }
}


const app = express()

app.use(generalMiddleware)

app.get('/ping', [firstRequestMiddleware, secondRequestMiddleware], (req, res, next) => {
  try {
    if (req.query.error === 'on') {
      throw new Error('etc')
    }
    res.json({ message: 'pong', somekey: req.somekey })    
  } catch (error) {
    next(error)
  }
})

app.use(firstErrorMiddleware)
app.use(secondErrorMiddleware)

app.listen(8000)
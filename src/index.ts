import express from 'express'

// init
const app = express()

// setiing
app.set('port', 3000)

// middlewares

// routes

// static files

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server running in port ${app.get('port')}`)
})
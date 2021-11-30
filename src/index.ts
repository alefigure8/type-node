import express from 'express'
import { engine } from 'express-handlebars'
import path  from 'path'
import booksRoutes from './route/books'
import indexRoutes from './route/'

// init
const app = express()

// setiing
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views') )
app.engine('.hbs', engine ({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}))
app.set('view engine', '.hbs')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/', indexRoutes)
app.use('/books', booksRoutes)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server running in port ${app.get('port')}`)
})
import mongoose from 'mongoose'
import { mongodb } from './keys'
const config = {
    autoIndex: false,
    useNewUrlParser: true,
}

mongoose.connect(mongodb.URI, config)
    .then(db => console.log('Db is connect'))
    .catch(err => console.log(err))
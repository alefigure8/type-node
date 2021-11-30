import moongoose, { Schema, model, Mongoose } from 'mongoose'

export interface Book extends moongoose.Document {
    title: string,
    author: string,
    isbn: string
}

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
})

export default model<Book>('Book', BookSchema)
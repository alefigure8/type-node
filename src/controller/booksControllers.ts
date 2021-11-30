import { Request, Response } from "express"

class BooksController {

    public index (req: Request, res: Response): void {
        res.render('books/index', {title: 'Books'})
    }

    public renderFormBooks (req: Request, res: Response): void {
        res.render('books/add', {title: 'Add a Book'})
    }

    public saveBook (req: Request, res: Response): void {
        console.log(req.body)
        res.send('Received')
    }
}

export const bookController = new BooksController()
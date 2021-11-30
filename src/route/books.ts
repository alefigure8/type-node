import { Router } from 'express'
import { bookController } from '../controller/booksControllers'
const router: Router = Router()

router.get('/', bookController.index)
router.get('/add', bookController.renderFormBooks)
router.post('/add', bookController.saveBook)

export default router
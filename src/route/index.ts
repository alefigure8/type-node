import { Router } from 'express'
import indexController from '../controller'
const router: Router = Router()

router.get('/', indexController.index)

export default router
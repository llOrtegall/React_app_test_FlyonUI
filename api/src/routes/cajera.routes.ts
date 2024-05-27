import { CreateCajera, GetCajera, GetCajeras } from '../controllers/cajera.controller'
import { Router } from 'express'

export const cajeraRouter = Router()

cajeraRouter.post('/cajera/create', CreateCajera)

cajeraRouter.get('/cajera/getOne', GetCajera)

cajeraRouter.get('/cajera/getAll', GetCajeras)

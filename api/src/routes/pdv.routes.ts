import { Router } from 'express'
import { CreatePdv, GetPdv, GetPdvs } from '../controllers/pdv.controller'

export const pdvRoutes = Router()

pdvRoutes.post('/pdv/create', CreatePdv)

pdvRoutes.get('/pdv/:id', GetPdv)

pdvRoutes.get('/pdvs', GetPdvs)

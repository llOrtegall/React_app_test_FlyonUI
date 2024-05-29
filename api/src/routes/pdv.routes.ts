import { Router } from 'express'
import { GetPdvWhitSucursal, GetPdvs, GetPdvsWhitZone } from '../controllers/pdv.controller'

export const pdvRoutes = Router()

pdvRoutes.get('/pdvs', GetPdvs)

pdvRoutes.get('/pdv/:sucursal', GetPdvWhitSucursal)

pdvRoutes.get('/pdvzona/:zona', GetPdvsWhitZone)

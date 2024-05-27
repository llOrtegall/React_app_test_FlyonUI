import { CreateUser, LoginUser } from '../controllers/user.controller'
import { Router } from 'express'

export const loginRouter = Router()

loginRouter.post('/create', CreateUser)

loginRouter.post('/login', LoginUser)

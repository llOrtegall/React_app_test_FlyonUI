import { CreateUser, LoginUser } from '../controllers/user.controller'
import { Router } from 'express'

export const loginRouter = Router()

loginRouter.post('/user/create', CreateUser)

loginRouter.post('/user/login', LoginUser)

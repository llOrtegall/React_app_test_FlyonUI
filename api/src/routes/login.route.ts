import { Router } from 'express'

export const loginRouter = Router()

loginRouter.get('/login', (req, res) => {
  res.send('Hello World!')
})

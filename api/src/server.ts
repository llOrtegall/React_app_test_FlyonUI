import { loginRouter } from './routes/login.route'
import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/v1', loginRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

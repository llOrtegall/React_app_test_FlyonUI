import { loginRouter } from './routes/user.routes'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/v1', loginRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

import { loginRouter } from './routes/user.routes'
import { cajeraRouter } from './routes/cajera.routes'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/v1', loginRouter)

app.use('/api/v1', cajeraRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

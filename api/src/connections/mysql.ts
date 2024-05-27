import { Sequelize } from 'sequelize'
import 'dotenv/config'

const USER = process.env.DB_USER as string
const PASS = process.env.DB_PASS as string
const HOST = process.env.DB_HOST as string
const PORT = process.env.DB_PORT as string
const NAME = process.env.DB_NAME as string

const connectionDb = new Sequelize(NAME, USER, PASS, {
  host: HOST,
  dialect: 'mysql',
  port: parseInt(PORT)
})

export { connectionDb }

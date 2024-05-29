import { Sequelize } from 'sequelize'
import 'dotenv/config'

const USER = process.env.DB_USER as string
const PASS = process.env.DB_PASS as string
const HOST = process.env.DB_HOST as string
const PORT = process.env.DB_PORT as string
const NAME = process.env.DB_NAME as string

const USER_PB = process.env.DB_PB_USER as string
const PASS_PB = process.env.DB_PB_PASS as string
const HOST_PB = process.env.DB_PB_HOST as string
const PORT_PB = process.env.DB_PB_PORT as string
const NAME_PB = process.env.DB_PB_NAME as string

const connectionDb = new Sequelize(NAME, USER, PASS, {
  host: HOST,
  dialect: 'mysql',
  port: parseInt(PORT)
})

export { connectionDb }

const connectionDbPB = new Sequelize(NAME_PB, USER_PB, PASS_PB, {
  host: HOST_PB,
  dialect: 'mysql',
  port: parseInt(PORT_PB)
})

export { connectionDbPB }

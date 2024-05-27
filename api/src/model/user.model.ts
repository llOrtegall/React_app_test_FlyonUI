import { connectionDb } from '../connections/mysql'
import { DataTypes, Model } from 'sequelize'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  sequelize: connectionDb,
  modelName: 'User'
})

export { User }

/*
//
 TODO: Function to test the connection to the database
//
export async function test () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

*/

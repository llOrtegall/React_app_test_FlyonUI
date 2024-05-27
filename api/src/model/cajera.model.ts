import { connectionDb } from '../connections/mysql'
import { DataTypes, Model } from 'sequelize'

class Cajera extends Model {}

Cajera.init({
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  sequelize: connectionDb,
  modelName: 'Cajera'
})

export { Cajera }

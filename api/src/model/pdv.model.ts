import { connectionDb } from '../connections/mysql'
import { DataTypes, Model } from 'sequelize'

class Pdv extends Model {}

Pdv.init({
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sucursal: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  sequelize: connectionDb,
  modelName: 'Pdv'
})

export { Pdv }

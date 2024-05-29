import { connectionDbPB } from '../connections/mysql'
import { DataTypes, Model } from 'sequelize'

class Pdv extends Model {}

Pdv.init(
  {
    ZONA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CCOSTO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DISPOSITIVO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SUPERVISOR: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize: connectionDbPB,
    modelName: 'SUCURSAL',
    tableName: 'SUCURSALES',
    timestamps: false
  }
)

export { Pdv }

import { Request, Response } from 'express'
import { Pdv } from '../model/pdv.model'

export async function CreatePdv (req: Request, res: Response) {
  const { nombre, sucursal, direccion } = req.body

  if (!nombre || !sucursal || !direccion) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await Pdv.sync()
    const createPdv = await Pdv.create({
      nombre,
      sucursal,
      direccion
    })
    res.status(201).json(createPdv)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export async function GetPdv (req: Request, res: Response) {
  const { sucursal } = req.query

  if (!sucursal) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await Pdv.sync()
    const pdv = await Pdv.findOne({ where: { sucursal } })
    res.status(200).json(pdv)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export async function GetPdvs (req: Request, res: Response) {
  try {
    await Pdv.sync()
    const pdvs = await Pdv.findAll()
    res.status(200).json(pdvs)
  } catch (error) {
    res.status(500).json({ error })
  }
}

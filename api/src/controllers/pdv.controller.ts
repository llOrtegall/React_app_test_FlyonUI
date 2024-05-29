import { Request, Response } from 'express'
import { Pdv } from '../model/pdv.model'

export async function GetPdvWhitSucursal (req: Request, res: Response) {
  const { sucursal } = req.params

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

export async function GetPdvsWhitZone (req: Request, res: Response) {
  const { zona } = req.params

  if (!zona) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await Pdv.sync()
    const pdvs = await Pdv.findAll({ where: { zona } })
    console.log(pdvs.length)
    res.status(200).json(pdvs)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export async function GetPdvs (req: Request, res: Response) {
  try {
    await Pdv.sync()
    const pdvs = await Pdv.findAll()
    console.log(pdvs.length)
    res.status(200).json(pdvs)
  } catch (error) {
    res.status(500).json({ error })
  }
}

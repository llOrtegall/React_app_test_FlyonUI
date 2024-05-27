import { Request, Response } from 'express'
import { Cajera } from '../model/cajera.model'

export async function CreateCajera (req: Request, res: Response) {
  const { nombre, apellido, cedula, telefono, email } = req.body

  if (!nombre || !apellido || !cedula || !telefono || !email) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await Cajera.sync()
    const createCajera = await Cajera.create({
      nombre,
      apellido,
      cedula,
      telefono,
      email
    })
    res.status(201).json(createCajera)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export async function GetCajera (req: Request, res: Response) {
  const { cedula } = req.query

  if (!cedula) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await Cajera.sync()
    const cajera = await Cajera.findOne({ where: { cedula } })
    res.status(200).json(cajera)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export async function GetCajeras (req: Request, res: Response) {
  try {
    await Cajera.sync()
    const cajeras = await Cajera.findAll()
    res.status(200).json(cajeras)
  } catch (error) {
    res.status(500).json({ error })
  }
}

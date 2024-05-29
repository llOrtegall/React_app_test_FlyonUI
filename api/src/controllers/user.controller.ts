import { Request, Response } from 'express'
import { User } from '../model/user.model'

export async function CreateUser (req: Request, res: Response) {
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  try {
    await User.sync()
    const UserCreated = await User.create({
      username,
      password,
      email
    })
    return res.status(201).json(UserCreated)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export async function updateUser (req: Request, res: Response) {
  const { username, password, email } = req.body

  if (!username) {
    return res.status(400).json({ error: 'username is required' })
  }

  try {
    await User.sync()
    const updatedUser = await User.update({
      username,
      password,
      email
    }, { where: { username } })
    console.log(updatedUser)
    return res.status(201).json(updatedUser)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export async function LoginUser (req: Request, res: Response) {
  const { username, password } = req.body

  if (!username || !password) return res.status(400).json({ error: 'username and password is required' })

  try {
    const user = await User.findOne({ where: { username } })

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado y/o no registrado' })
    }

    if (user.dataValues.password !== password) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    res.status(200).json({ user: user.dataValues.username, auth: true })
  } catch (error) {
    res.status(500).json({ error })
  }
}

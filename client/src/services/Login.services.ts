import axios, { AxiosResponse } from 'axios'
import { User } from '../types/User'

interface LoginResponse {
  auth: boolean
  token: string
}

export const getLogin = async ({ user, password }: { user: string, password: string }): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post('http://172.20.1.216:4002/api/login', { user, password })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProfile = async ({ token }: { token: string }): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.get('http://172.20.1.216:4002/api/profile', { headers: { Authorization: `Bearer ${token}` } })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

import axios from 'axios'

export const axiosCustom = axios.create({
  baseURL: `https://${process.env.MK_ADDRESS}/rest/`,
  timeout: 10000,
  auth: {
    username: process.env.MK_LOGIN,
    password: process.env.MK_PASSWORD,
  },
})

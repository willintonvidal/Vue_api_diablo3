// Traemos el método post de 'axios'
import { post } from 'axios'

// Estos datos deberia ser privados
const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}

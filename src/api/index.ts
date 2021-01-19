import http from './axios'

export interface ILogin {
  username: string,
  userpsw: string
}
export function login(params:ILogin) {
  return http.post('/login', params)
}
export type AuthApiResponse = {
  accessToken: string
  user: {
    id: number
    email: string
  }
}

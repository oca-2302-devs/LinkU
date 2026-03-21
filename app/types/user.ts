export type PublicUser = {
  name: string
  mbti: string
  hobby: string
  boom: string
  game: string
  from: string
  course: string
  friend: string
  message: string
  icon: string
  club: string
}

export type PrivateUser = PublicUser & {
  email: string
}
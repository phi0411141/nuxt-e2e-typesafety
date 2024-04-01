import { User } from '~/types'

export function getUser(): User {
  return { name: 'foo', age: 30 }
}

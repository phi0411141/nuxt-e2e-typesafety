import { User } from '~/types'

export default defineEventHandler((): User => {
  return { name: 'foo', age: 30 }
})

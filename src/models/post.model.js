import { DB } from '../config/db.js'

export const Post = {
  create: async ({ titulo, img, descripcion, likes }) => {
    try {
      const SQL = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)'
      const values = [titulo, img, descripcion, likes || 0]

      await DB.query(SQL, values)
    } catch (error) {
      throw error
    }
  },
}
import { DB } from '../config/db.js'

export const Post = {
  create: async ({ titulo, img, descripcion, likes }) => {
    try {
      const SQL = `
        INSERT INTO posts (titulo, img, descripcion, likes)
        VALUES ($1, $2, $3, $4)
        RETURNING *`
      const values = [titulo, img, descripcion, likes || 0]

      const { rows } = await DB.query(SQL, values)

      console.log('rows', rows);
      return rows[0]
    } catch (error) {
      throw error
    }
  },
}
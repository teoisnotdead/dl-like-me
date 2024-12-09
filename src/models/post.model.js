import { DB } from '../config/db.js'

export const Post = {
  getAll: async () => {
    try {
      const { rows } = await DB.query('SELECT * FROM posts')
      return rows
    } catch (error) {
      throw error
    }
  },
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
  updateLikes: async (id) => {
    try {
      const SQL = `
        UPDATE posts
        SET likes = likes + 1
        WHERE id = $1
        RETURNING *`

      const { rows } = await DB.query(SQL, [id])
      return rows[0]
    } catch (error) {
      console.log('error', error);
      throw error
    }
  },
  
}
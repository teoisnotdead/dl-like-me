import { Post } from '../models/post.model.js'

export const PostController = {
  createPost: async (req, res) => {
    console.log('req.body', req.body)
    try {
      const { titulo, img, descripcion, likes } = req.body
      await Post.create({ titulo, img, descripcion, likes })
      res.status(201).send('Post creado con exito')
    } catch (error) {
      res.status(500).send('Error al crear el post')
    }
  },
}
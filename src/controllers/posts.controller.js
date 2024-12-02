import { Post } from '../models/post.model.js'

export const PostController = {
  createPost: async (req, res) => {
    console.log('req.body', req.body)
    try {
      const { titulo, url, descripcion, likes } = req.body
      const img = url || 'https://placehold.co/600x400'

      await Post.create({ titulo, img, descripcion, likes })
      res.status(201).send('Post creado con exito')
    } catch (error) {
      res.status(500).send('Error al crear el post')
    }
  },
}
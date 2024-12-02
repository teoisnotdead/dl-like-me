import { Post } from '../models/post.model.js'

export const PostController = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.getAll()
      res.status(200).json(posts)
    } catch (error) {
      res.status(500).send('Error al obtener los posts')
    }
  },
  createPost: async (req, res) => {
    console.log('req.body', req.body)
    try {
      const { titulo, url, descripcion, likes } = req.body
      const img = url || 'https://placehold.co/600x400'

      const newPost = await Post.create({ titulo, img, descripcion, likes })
      console.log('newPost', newPost);
      res.status(201).json({
        message: 'Post creado correctamente',
        post: newPost,
      })
    } catch (error) {
      res.status(500).send('Error al crear el post')
    }
  },
}
import { Post } from '../models/post.model.js'

export const PostController = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.getAll()
      res.status(200).json(posts)
    } catch (error) {
      res.status(500).send({
        message: 'Error al obtener los posts',
      })
    }
  },
  createPost: async (req, res) => {
    try {
      const { titulo, url, descripcion, likes } = req.body
      const img = url || 'https://placehold.co/600x400'
      const newPost = await Post.create({ titulo, img, descripcion, likes })

      res.status(201).json({
        message: 'Post creado correctamente',
        post: newPost,
      })
    } catch (error) {
      res.status(500).send({
        message: 'Error al crear el post',
      })
    }
  },
  updateLikes: async (req, res) => {
    try {
      const { id } = req.params

      const updatedPost = await Post.updateLikes(id)

      if (!updatedPost) {
        res.status(404).send({
          message: 'Post no encontrado',
        })
      }

      res.status(200).json({
        message: 'Likes actualizados correctamente',
        post: updatedPost,
      })
    } catch (error) {
      console.log('error', error)
      res.status(500).send({
        message: 'Error al actualizar likes',
      })
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params
      const deletedPost = await Post.delete(id)

      if (!deletedPost) {
        res.status(404).send({
          message: 'Post no encontrado',
        })
      }

      res.status(200).json({
        message: 'Post eliminado correctamente',
        post: deletedPost,
      })
    } catch (error) {
      res.status(500).send({
        message: 'Error al eliminar el post',
      })
    }
  },
}
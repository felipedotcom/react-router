import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  const lerPosts = async () => {
    try {
      const resposta = await axios.get(`http://localhost:5000/posts/${id}`)
      if (resposta.ok) {
        const postConteudo = await resposta.data
        setPost(postConteudo)
      }
    } catch (erro) {
      console.log('entrou no catch', erro)
    }
  }

  useEffect(() => {
    lerPosts()
  }, [])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
export default Post

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    const lerPosts = async () => { //extrair

      try {
        const resposta = await fetch(`http://localhost:5000/posts/${id}`)
        if (resposta.ok) {
          const postConteudo = await resposta.json()
          setPost(postConteudo)
        }
      }
      catch (erro) {
        console.log('entrou no catch', erro)
      }
    }
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
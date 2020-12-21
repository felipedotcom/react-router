import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
  }, [])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
export default Post

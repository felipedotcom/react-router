import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const history = useHistory()

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch((erro) => {
      history.push('/404')
    })
  }, [])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
export default Post

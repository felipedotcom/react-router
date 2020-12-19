import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Post = () => {
  const { id } = useParams()
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const lerPosts = async () => {
      const resposta = await fetch(`http://localhost:5000/posts/${id}`)
    
      const sub = await resposta.json()
      setPosts(sub)
    }
    lerPosts()
  }, [])

  return (
    <div>
      { posts.map( post => { 
        <p>{post.body}</p>
      })}
    </div>
  )
}
export default Post
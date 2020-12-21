import React, { useState, useEffect } from 'react'
import { busca } from '../api/api'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    busca('/posts', setPosts)
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home

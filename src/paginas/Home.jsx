import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState([])

  const buscaPosts = async () => {
    const resposta = await axios.get('http://localhost:5000/posts')
    const conteudoPosts = resposta.data
    setPosts(conteudoPosts)
  }

  useEffect(() => {
    buscaPosts()
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

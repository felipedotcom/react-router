import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'

const SubCategoria = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    busca('/posts/', setPosts)
  }, [])

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link
              to={{
                pathname: `/posts/${post.id}`, //post sem barra vai dar erro mostrar isso no curso
              }}
            >
              Leia Mais...
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SubCategoria

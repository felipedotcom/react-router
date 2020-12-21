import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SubCategoria = () => {
  const [posts, setPosts] = useState([])

  const lerCategoria = async () => {
    const resposta = await fetch(`http://localhost:5000/posts/`)

    const sub = await resposta.data

    setPosts(sub)
  }

  useEffect(() => {
    lerCategoria()
  }, [])

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li>
            <h1>lorem ispum</h1>
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

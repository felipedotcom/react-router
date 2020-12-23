import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { busca } from '../api/api'

const SubCategoria = () => {
  const [posts, setPosts] = useState([])
  const { subcategoria } = useParams()

  useEffect(() => {
    busca(`/posts?subcategoria=${subcategoria}`, setPosts)
  }, [subcategoria])

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.metadescription}</p>
          <Link to={`/posts/${post.id}`}>Leia Mais...</Link>
        </li>
      ))}
    </ul>
  )
}

export default SubCategoria

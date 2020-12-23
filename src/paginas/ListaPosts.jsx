import React, { useState, useEffect } from 'react'
import { busca } from '../api/api'

import { Link } from 'react-router-dom'

const ListaPosts = ({ url }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    busca(url, setPosts)
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.metadescription}</p>
            <Link to={`/posts/${post.id}`}>Leia Mais...</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaPosts

import React, { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom'
import '../assets/css/componentes/cartao.css'
import '../assets/css/componentes/cartao.css'
import { ApiContext } from '../context/ApiContext'

const ListaPosts = ({ url }) => {
  const [posts, setPosts] = useState([])
  const { busca } = useContext(ApiContext)

  useEffect(() => {
    busca(url, setPosts)
  }, [url])

  return (
    <section className="posts container">
        {posts.map((post) => (
          <Link className={`cartao-post cartao-post--${post.categoria}`}  to={`/posts/${post.id}`}>
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
          </Link>
        ))}
    </section>
  )
}

export default ListaPosts

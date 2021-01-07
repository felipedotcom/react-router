import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'

import '../assets/css/post.css'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const history = useHistory()
  const { busca } = useContext(ApiContext)

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch((erro) => {
      console.log(erro.message)
      if (erro.response && erro.response.status === 404) {
        history.push('/404') //pegando erro disparado dentro do busca para fazer o catch
      }
    })
  }, [id, history])//tava dando warning aqui por isso eu coloquei

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}
export default Post
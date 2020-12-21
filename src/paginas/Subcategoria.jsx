import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom'
/* import axios from 'axios' */

const SubCategoria = () => {
  const { path, url } = useRouteMatch()
  const [ posts, setPosts ] = useState([])
  const { tag } = useParams()
  const { history } = useHistory()
  
  useEffect(() => {
    const lerCategoria = async () => {
      console.log(tag)
      const resposta = await fetch(`http://localhost:5000/posts/`)

      const sub = await resposta.json()

      setPosts(sub)
    }
    lerCategoria()
  }, [])

  const handleHistory = () => { 
    return history.push('/')
  }

  return (
    <>
      <ul>

        {
          posts.map( post => { 
            return (
              <li>
            <h1>lorem ispum</h1>
            <p>{post.body}</p>
            <button onClick={handleHistory}>
              Leia Mais...
            </button>
          </li>
            )
          })
        } 
      </ul>
    </>

  )
}

export default SubCategoria

{/* <Link to={{
              pathname: `posts/${post.id}`
            }}>Leia Mais...</Link> */}
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Receita = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  return (
    <div>
      <ul>
        {
          <li>{posts.title}</li>
        }
      </ul>
    </div>
  )
}

export default Receita
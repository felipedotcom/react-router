import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Route } from 'react-router-dom';

const Higiene = () => {
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
          <li>
            {posts.title}
            <button>
              leia mais
            </button>
            </li>
        }
      </ul>
    </div>
  )
}

export default Higiene
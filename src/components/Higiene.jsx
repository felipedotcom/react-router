import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {  Link } from 'react-router-dom';

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
            {/* <Link to={`${url}/higiene`}>Higiene</Link> */}
            </li>
        }
      </ul>
    </div>
  )
}

export default Higiene
import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';

import { Link } from 'react-router-dom';
// import Lists from '../List';
// import SearchBar from '../SearchBar';
import '../../../styles/blog/Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchBlogs = async () => {
    const resData = await API.get('blogsApi', '/blogs/uuid')
    resData.sort((a,b) => a.added_at - b.added_at)
    setBlogs(resData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    (isLoading ? <>Loading...</> :
      <div className="page">
        <h1>Blogs</h1>
        <ul className='blogs'>
          {blogs.map(blog =>
            <li key={blog.uuid}>
              <p><Link to={`/blog/${blog.uuid}`}>{new Date(blog.added_at).toLocaleDateString()} - {blog.title}</Link></p>
            </li>
          )}
        </ul>
      </div>
    )

  );
}

export default Blogs
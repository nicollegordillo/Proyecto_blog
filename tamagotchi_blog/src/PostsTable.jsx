import React, { useState, useEffect } from 'react';
import useApi from './useApi'; // Importa tu hook useApi

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const { sendRequest } = useApi();
  const [showTable, setShowTable] = useState(false);

  const getPosts = async () => {
    try {
      const response = await sendRequest({
        method: 'GET',
        url: '/posts' // Assuming this is the correct endpoint
      });
      console.log(response);
      if (response) {
        setPosts(response);
      } else {
        throw new Error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleShowTable = () => {
    getPosts();
    setShowTable(true);
  };

  return (
    <div>
      <button onClick={handleShowTable}>Show Posts</button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>{post.price}</td>
                <td>{post.category}</td>
                <td><img style={{width:'20px',height:'20px'}} src={post.image} alt="Post Image" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PostsTable;

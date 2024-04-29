import React, { useState, useEffect } from 'react';
import useApi from './useApi';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const { sendRequest } = useApi();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await sendRequest({
          method: 'GET',
          url: '/posts' // Endpoint para obtener todos los posts
        });
        if (response && response.data) {
          setPosts(response.data); // Actualiza el estado con los datos de los posts recibidos
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [sendRequest]);

  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>{post.price}</td>
              <td>{post.category}</td>
              <td>{post.image}</td>
              <td>{post.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;

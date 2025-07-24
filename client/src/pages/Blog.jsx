import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, blog_data } from '../asset/assets.js';
import NavBar from '../components/NavBar.jsx';

const Blog = () => {
  const { id } = useParams(); //to get id from link

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const data = await blog_data.find((items) => items._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      <NavBar />
      <div>
        <p>Published on {data.createdAt}</p>
      </div>
      <div></div>
    </div>
  ) : (
    <div>
      <h1>loading</h1>
    </div>
  );
};

export default Blog;

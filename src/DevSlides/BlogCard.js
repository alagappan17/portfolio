import React from 'react';
import { FaLink } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      {/* <p>{blog.pubDate}</p> */}
      <p><a href={blog.url} target="_blank" rel="noopener noreferrer">
        Read more <FaLink />
      </a></p>
    </div>
  );
};

export default BlogCard;
import React from 'react';
import { FaLink } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2 className={blog.title.length > 10 ? 'marquee--content' : ''}>{blog.title}</h2>
      <p>{blog.pubDate}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        Read more <FaLink />
      </a>
    </div>
  );
};

export default BlogCard;
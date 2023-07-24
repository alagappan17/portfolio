import React from 'react';

const BlogCard = ({ blog, id }) => {
  return (
    <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration:'none'}}>
    <div className={`blog-card ${id === '3' ? 'blogHider' : ''}`}>
      <h2>{blog.title}</h2>
      {/* <p>{blog.pubDate}</p> */}
      {/* <p><a href={blog.url} target="_blank" rel="noopener noreferrer">
        Read more <FaLink />
      </a></p> */}
    </div>
    </a>
  );
};

export default BlogCard;
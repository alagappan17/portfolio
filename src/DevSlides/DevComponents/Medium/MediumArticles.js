import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard';

const getArticles = async () => {
  try {
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alagappan.dev");

    if (response.status > 400) {
      // throw new Error('Unable to fetch currently playing song');
      throw new Error('UFS');
    } else if(response.status === 204) {
      // throw new Error('Alagappan is currenly not listening')
      throw new Error('CNP')
    }

    const articles = await response.json();
    const article1 = articles.items[0]
    const article2 = articles.items[1]
    // const article3 = articles.items[0]
    // console.log(articles)

    return {
      // articles
      article1,
      article2
    };
  } catch (error) {
    console.error('Error fetching Playlist:', error);
    return error.message.toString();
  }
}

const MediumArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchArticles = async () => {
        const articlesData = await getArticles();
        setArticles(articlesData)
        // console.log(articlesData.article1)
      }
      
      fetchArticles();
    }, []);

    console.log(articles)

    if (!articles || !articles.article1) {
      return <div>Loading Blogs...</div>; // Or any other loading indicator you prefer
    }

    console.log(articles)
  
    return (
    <div>
      <div className="blog-container">
        <BlogCard blog={articles.article1} id='1'/>
        <BlogCard blog={articles.article2} id='2'/>
        <BlogCard blog={articles.article2} id='3'/>
      </div>
    </div>
    );
  };
  
  export default MediumArticles;
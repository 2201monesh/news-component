import React, { useEffect, useState } from 'react'
import NewsCapsule from './NewsCapsule';

function NewsSection() {

    const [news, setNews] = useState([]);

  const getNews = async () => {
    const url = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=11eadf346f60489081e9e9ce2a7ef2b8');
    const response = await url.json();
    console.log(response.articles);
    setNews(response.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className='news-card'>
      <NewsCapsule news={news} />
    </div>
  )
}

export default NewsSection;

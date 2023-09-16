import React, { useEffect, useState } from 'react'

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

  const maxLength = 15;

  const capsule = news.map((item) => <p>{item.title.substr(0, maxLength)}</p>)

  return (
    <div className='news-card'>
      News Section
      {capsule}
    </div>
  )
}

export default NewsSection;

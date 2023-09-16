import React, { useEffect, useState } from 'react'

function NewsSection() {

    const [news, setNews] = useState([]);

  const getNews = async () => {
    const url = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=11eadf346f60489081e9e9ce2a7ef2b8');
    const response = await url.json();
    console.log(response.articles);
    setNews(response.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      News Section
      {news.map((item) => <p>{item.title}</p>)}
    </div>
  )
}

export default NewsSection;

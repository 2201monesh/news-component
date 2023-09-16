import React from 'react'

function NewsCapsule(props) {

    const maxLength = 17;

  return (
    <div className='news-capsule-div'>
     {/* {props.news.map((item) => <p className='news-capsule'>{item.title.substr(0, maxLength)}</p> )} */}
     {props.news.map((item) => (
         <p className='news-capsule'>
           <a href={item.url}>{item.title.substr(0, maxLength)}</a>
         </p> 
         ))}
    </div>
  )
}

export default NewsCapsule;

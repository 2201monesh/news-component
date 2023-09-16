import React from 'react'

function NewsCapsule(props) {

    const maxLength = 15;

  return (
    <div className='news-capsule-div'>
     {props.news.map((item) => <p className='news-capsule'>{item.title.substr(0, maxLength)}</p> )}
    </div>
  )
}

export default NewsCapsule;

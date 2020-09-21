import React from 'react'

const Posts = ({ article }) => {
    console.log(article)
    const { name, date, featuredImage, content } = article.fields
    return (
        <div className='post'>
            <h2>{name}</h2>
            <p>{date}</p>
            {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section>{content}</section>
        </div>
    )
}

export default Posts
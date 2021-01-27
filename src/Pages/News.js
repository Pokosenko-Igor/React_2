import React from 'react'
import Post from '../Components/Post'
import NewsData from '../data/data.json';

export default function News() {
    return (
        <div>
            <h1>The Latest News:</h1>
            {NewsData.news.map((post, index)=>{
                return <Post Key={index} id={index}/>
            })}
        </div>
    )
}

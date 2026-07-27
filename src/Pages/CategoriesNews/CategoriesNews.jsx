import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoriesNews = () => {

    const[categoryNews, setCategoryNews]=useState([]);
    const{id} =useParams();
    const newsData=useLoaderData();
    console.log(id, newsData);

    useEffect(()=>{
       
        if(id=='0'){
            setCategoryNews(newsData);
            return
        }
        else if(id== '1'){
            const breakingNews=newsData.filter(news=>news.others.is_trending===true);
            setCategoryNews(breakingNews);
        }
        else{
            const filteredNews=newsData.filter(news=>news.category_id==id);
            setCategoryNews(filteredNews);
        }
    },[newsData, id])
    

    return (

       <div>
       <h2 className='text-xl font-bold pl-4 text-gray-800'>
        NewsFeed
       </h2>

        <div className='mx-6 mt-5'>
            
           {
            categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
           }
            
        </div>
       </div>
    );
};

export default CategoriesNews;
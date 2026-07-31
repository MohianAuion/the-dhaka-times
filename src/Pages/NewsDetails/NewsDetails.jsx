import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';
import Footer from '../../Components/Footer/Footer';

const NewsDetails = () => {

    const[news, setNews]=useState({});
    const{id}=useParams();
const data=useLoaderData();

useEffect(()=>{
const newsData=data.find(singleNews=>singleNews.id===id);
setNews(newsData);
},[data, id])

    return (
        <div>
          <header>
            <Header></Header>
          </header>
          <main>
            <section className='w-10/12 mx-auto mt-10 lg:mt-14'>
                <h2 className='text-lg lg:text-3xl font-bold'>#News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default NewsDetails;
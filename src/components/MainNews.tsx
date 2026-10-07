import Image from 'next/image';
import React from 'react';

interface News{
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MainNews = ({ news }: {news:News[]}) => {
    // console.log(news);
    //const firstNews = news[0];
    //const othernews = news.slice(1);

    const [firstNews, ...otherNews] = news;

    return (
        <div className="flex gap-5">
            {/* First */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt}
                        height={200}
                        width={400} />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-bold">{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>   
                </div>
            </div>
            {/* Other News */}
            <div className="grid gap-2">
                {
                    otherNews.slice(0,5).map(newsItem => <div className="justify-center px-5 card border border-gray-200" key={newsItem.id}>
                        <p className="text-red-600 font-bold">{firstNews.category}</p>
                        <div> {newsItem.title} </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default MainNews;
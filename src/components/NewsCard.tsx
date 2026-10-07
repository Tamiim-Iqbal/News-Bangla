import React from 'react';
import Image from 'next/image';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}


const NewsCard = ({ news }: { news: News }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm h-full">
                <figure>
                    <Image
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        height={200}
                        width={400} />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-bold">{news.category}</p>
                    <h2 className="card-title">{news.title}</h2>
                    <p className='line-clamp-2'>{news.description}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
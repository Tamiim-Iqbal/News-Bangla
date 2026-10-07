import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href={`/details/${news.id}`} className='h-full'>
            <div className="h-full"> 
            <div className="card bg-base-100 border border-transparent shadow-sm h-full hover:border-red-200 transition-colors duration-200">
                <figure>
                    <Image
                        className='w-full hover:scale-105 transition-transform duration-300'
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
        </Link>
    );
};

export default NewsCard;
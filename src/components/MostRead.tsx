import React from 'react';
 interface News{
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MostRead = async () => {

    const response = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await response.json();

    const news: News[] = data.data;
    console.log(news);

    return (
        <div className="card bg-base-100 border border-gray-300 p-5">
            <h1 className="text-lg font-bold mb-4 text-red-600">সর্বাধিক পঠিত</h1>

            <div className="grid gap-3">
                {
                    news.map ((news, ind) => <div key={news.id} className="flex gap-3">
                        <p className="text-lg text-red-600">{ind + 1}</p><h2 className="text-md font-semibold">{news.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;
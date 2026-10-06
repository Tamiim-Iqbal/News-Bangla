import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines{
    id: string;
    title: string;
}

const Marquee = async() => {

    const response = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await response.json()
    const headlines: Headlines[] = data.data
    console.log(headlines)


    return (
        <div className="bg-red-700 text-white">
            <div className="flex w-11/12 mx-auto">
                <div className="bg-red-800 py-1 px-2 font-bold">সর্বশেষ</div>
                <MarqueeText className="py-1" direction="right" pauseOnHover={true} duration={10} >
            {
                headlines.map((headline, ind) => <span key={ind} className="flex items-center">
                    <span>{headline.title}</span>
                    <span className="mx-5">•</span>
                </span>)
            }
            </MarqueeText>
            </div>
            
        </div>
    );
};

export default Marquee;
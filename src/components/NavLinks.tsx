import Link from 'next/link';
import React from 'react';

interface NavItem {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async() => {

    const response = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await response.json()
    const navs:NavItem[] = data.data 
    console.log(navs)

    return (
        <div className='flex gap-3 justify-center mt-3 mb-3 text-sm text-gray-800'>
            <Link href='/'>হোম</Link>
            {
                navs.map((nav, ind) => nav.scrapable && 
                    <Link key={ind}  href={nav.slug}>{nav.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;
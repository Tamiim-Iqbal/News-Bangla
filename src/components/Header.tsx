import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import Marquee from './Marquee';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });
    return (
        <header>
            <div className="navbar mt-1 w-10/12 mx-auto">

            <div className="navbar-start">

            </div>

            <div className="navbar-center">
                <div className="flex items-center gap-3">
                    <Image src={'/bangla-news-logo.webp'} alt={'Bangla News Logo'} width={40} height={40} />

                    <div className="flex flex-col">
                        <div className="font-bold text-2xl text-red-700">Bangla News 24</div>
                        <div className="text-xs text-gray-500">{date}</div>
                    </div>
                </div>
            </div>

            <div className="navbar-end gap-3">
                <button className="">সাইন ইন</button>
                <button className="btn bg-red-700 text-white">সাইন আপ</button>
            </div>
        </div>

        <NavLinks></NavLinks>
        <Marquee></Marquee>
        </header>

    );
};

export default Header;
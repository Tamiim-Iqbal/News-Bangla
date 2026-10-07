import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

interface OtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}


export default async function Home() {

  const response = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await response.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: OtherSection[] = sections.slice(1);
  console.log(otherSections);

  return (
    <div>
       <Marquee></Marquee>
        <div className="grid grid-cols-3 w-10/12 mx-auto gap-10 mt-10">
          {/* news content */}
            <div className="col-span-2">
              <MainNews news={mainNews}></MainNews>
              <div className="mt-10">
                {
                otherSections.map(os => <div className="my-10 " key={os.curationId}>
                  <h2 className="text-lg font-bold">{os.title}</h2>
                  <div className="border-b-2 border-red-700"></div>
                  <div className="grid grid-cols-3 gap-4 mt-5">
                  {
                    os.articles.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                  }
                  </div>
                </div>)
              }
              </div>
            </div>
            <div className="bg-green-500 col-span-1">
              h2
            </div>
        </div>
    </div>
  );
}

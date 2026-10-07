import NewsCard from '@/components/NewsCard';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const Categorynews = async ({ params }: { params: { catId: string } }) => {
    const { catId } = await params;
    console.log(catId);

    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${catId}`)
    const data = await response.json();

    const categoryNews: News[] = data.data;

    return (
        <div className="w-10/12 mx-auto mt-5">
            <h2 className="text-2xl font-bold border-b-2 border-red-700">{data.title}</h2>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {
                    categoryNews.map((news) => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
            
        </div>
    );
};

export default Categorynews;
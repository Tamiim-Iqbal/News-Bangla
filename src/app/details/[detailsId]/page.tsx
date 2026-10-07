import React from "react";
import Image from "next/image";

interface News {
    id: string;
    title: string;
    description: {
        blocks: {
            type: string;
            model: {
                blocks: {
                    type: string;
                    model: {
                        text: string;
                    };
                }[];
            };
        }[];
    };
    imageUrl: string;
    body: {
        type: "image" | "text" | "subheading";
        url?: string;
        text?: string;
        caption?: string;
        altText?: string;
    }[];
    byline: {
        name: string;
        role: string;
    }[];
    firstPublished: string;
    topics: {
        id: string;
        name: string;
    }[];
    source: string;
    sourceUrl: string;
}

const NewsDetails = async ({
    params,
}: {
    params: { detailsId: string };
}) => {
    const { detailsId } = await params;

    const response = await fetch(
        `https://news-api-v2.vercel.app/api/article/${detailsId}`,
        {
            cache: "no-store",
        }
    );

    const data = await response.json();
    const news: News = data.data;

    return (
        <main className="min-h-screen bg-base-200 py-10">
            <article className="max-w-4xl mx-auto px-4">

                {/* Category */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {news.topics.map((topic) => (
                        <span
                            key={topic.id}
                            className="badge badge-primary badge-outline"
                        >
                            {topic.name}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    {news.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-6">
                    {news.description.blocks[0]?.model.blocks[0]?.model.text}
                </p>

                {/* Author + Date */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-base-content/60 mb-8">
                    <span>
                        By{" "}
                        <strong className="text-base-content">
                            {news.byline[0]?.name}
                        </strong>
                    </span>

                    <span>•</span>

                    <span>
                        {new Date(news.firstPublished).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}
                    </span>

                    <span>•</span>

                    <span>{news.source}</span>
                </div>

                {/* News Body */}
                <div className="space-y-8">

                    {news.body.map((item, index) => {

                        if (item.type === "image" && item.url) {
                            return (
                                <figure key={index} className="space-y-3">
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Image
                                            src={item.url}
                                            alt={item.altText || ""}
                                            width={800}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {item.caption && (
                                        <figcaption className="text-sm text-base-content/60">
                                            {item.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            );
                        }

                        if (item.type === "subheading") {
                            return (
                                <h2
                                    key={index}
                                    className="text-2xl md:text-3xl font-bold mt-10"
                                >
                                    {item.text}
                                </h2>
                            );
                        }

                        if (item.type === "text") {
                            return (
                                <p
                                    key={index}
                                    className="text-base md:text-lg leading-8 text-base-content/80 whitespace-pre-line"
                                >
                                    {item.text}
                                </p>
                            );
                        }

                        return null;
                    })}

                </div>

                {/* Footer */}
                <div className="border-t border-base-300 mt-12 pt-6">
                    <p className="text-sm text-base-content/60">
                        Source:{" "}
                        <a
                            href={news.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-primary"
                        >
                            {news.source}
                        </a>
                    </p>
                </div>

            </article>
        </main>
    );
};

export default NewsDetails;
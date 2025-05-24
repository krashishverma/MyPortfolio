import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import portfolioData from "../pages/api/portfolio"; // Import data directly
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
    // Use the imported data directly instead of fetching
    const data = portfolioData;
    const isLoading = false;

    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {
                    isLoading ?
                        [1, 2, 3, 4].map((_, index) => (
                            <ImageAndParagraphSkeleton key={`portfolio-skeleton-${index}`} className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))
                }
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;

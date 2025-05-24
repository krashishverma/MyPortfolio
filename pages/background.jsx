import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import backgroundData from "../pages/api/background"; // Import data directly
import SimpleSkeleton from "../components/Common/SimpleSkeleton";

function Background() {
    // Use the imported data directly instead of fetching
    const data = backgroundData;
    const isLoading = false;
    
    return (
        <BannerLayout>
            <div className="px-2 md:px-8 py-2">
                <div className="text-Snow font-bold text-[32px] md:text-[50px] pt-4 md:pt-20 pb-4 md:pb-6">Background</div>
                <div className="grid grid-flow-row md:grid-flow-col gap-8">
                    <div className="row-span-1 md:col-span-2">
                        <div className="text-Snow text-[24px] md:text-[40px] font-medium pb-4">Education</div>
                        <div className="grid grid-cols-1 gap-4">
                            {
                                isLoading ?
                                    [1, 2].map((item, index) => (
                                        <SimpleSkeleton key={`edu-skeleton-${index}`} />
                                    ))
                                    :
                                    data?.eduCards?.map((item, index) => (
                                        <Edu_Card key={`edu-${index}`} data={item} />
                                    ))
                            }
                        </div>
                    </div>
                    <div className="row-span-1 md:col-span-3">
                        <div className="text-Snow text-[24px] md:text-[40px] font-medium pb-4">Experience</div>
                        <div className="grid grid-cols-1 gap-4">
                            {
                                isLoading ?
                                    [1, 2, 3].map((item, index) => (
                                        <SimpleSkeleton key={`exp-skeleton-${index}`} />
                                    ))
                                    :
                                    data?.expCards?.map((item, index) => (
                                        <Exp_Card key={`exp-${index}`} data={item} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    )
}

export default Background;

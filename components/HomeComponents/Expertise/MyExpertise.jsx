import ExpertiseCard from "./ExpertiseCard"
import { useEffect, useState } from "react";
import SimpleSkeleton from "../../Common/SimpleSkeleton";
import expertiseData from "../../../pages/api/expertise";

const MyExpertise = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulate loading for a better UX
        const timer = setTimeout(() => {
            setData(expertiseData);
            setIsLoading(false);
        }, 800);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <SimpleSkeleton key={`skeleton-${index}`} className="space-y-2 p-8" />
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default MyExpertise

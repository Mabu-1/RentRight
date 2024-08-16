import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import useBranch from "../../../hooks/useBranch";
import Loading from '../../../Loading/Loading';
import Card from "./Card";


const Branch = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const { data, isLoading, isError, error } = useBranch();

   
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No Amenties found.</div>;
    }


    return (
        <div className="my-[50px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"Contact"}
                    headline={"Our Branch Office"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Est pellentesque elit ullamcorper dignissim cras tincidunt. Non sodales neque sodales ut etiam sit amet nisl purus. Pharetra et ultrices neque ornare aenean euismod. Quam pellentesque nec nam aliquam sem.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((branch) => (
                   <Card key={branch._id} branch={branch}/>
                ))}
            </div>
        </div>
    );
};

export default Branch;

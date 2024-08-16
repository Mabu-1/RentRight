const Headline = ({ subheading, subheading1,headline2,headline,headline1}) => {
    return (
        <div>
            <h6 className="font-bold text-xl text-yellow-500">{subheading}</h6>
            <div className="flex justify-center">
            <h6 className="font-bold text-xl text-yellow-500">{subheading1}</h6>
            </div>
            <div className="max-w-full my-2">
                <h2 className=" font-bold text-2xl sm:text-3xl md:text-4xl">{headline}</h2>
            </div>
            <div className="max-w-full my-2">
                <h2 className=" font-bold text-yellow-500 text-2xl sm:text-3xl md:text-4xl">{headline2}</h2>
            </div>
            <div className="flex justify-center max-w-[full] my-2">
                <h2 className=" font-bold text-2xl sm:text-3xl md:text-4xl">{headline1}</h2>
            </div>
        </div>
    );
};

export default Headline;

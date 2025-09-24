const Headline = ({ subheading, subheading1,headline2,headline,headline1,headline3}) => {
    return (
        <div>
            <h6 className="font-bold text-lg text-[#eb7043]">{subheading}</h6>
            <div className="flex justify-center">
            <h6 className="font-bold text-lg text-[#eb7043]">{subheading1}</h6>
            </div>
            <div className="max-w-full my-2">
                <h2 className=" font-bold text-xl sm:text-xl md:text-2xl">{headline}</h2>
            </div>
            <div className="max-w-full my-2">
                <h2 className=" font-bold text-[#eb7043] text-xl sm:text-xl md:text-2xl">{headline2}</h2>
            </div>
            <div className="flex-col text-center justify-center max-w-[full] my-2">
              <div>
              <h2 className=" font-bold text-xl sm:text-xl md:text-2xl">{headline1}</h2>
              <h2 className=" font-bold text-xl sm:text-xl md:text-2xl">{headline3}</h2>
              </div>
            </div>
        </div>
    );
};

export default Headline;

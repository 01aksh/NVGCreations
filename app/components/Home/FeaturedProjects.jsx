"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LeftRoundedBtn from "../common/LeftRoundedBtn";
import RightRoundedBtn from "../common/RightRoundedBtn";
import portfolioItems from "./Data/portfolioItems";

const FeaturedProjects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % portfolioItems?.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + portfolioItems?.length) % portfolioItems?.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="w-full bg-[#FFF7F0] rounded-[30px] my-10 p-6 sm:p-10 md:p-12 xl:p-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {portfolioItems.map((d, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-10 xl:gap-14 flex-shrink-0 w-full"
            >
              <div className="flex-1 h-[300px] md:h-[400px]  w-full">
                <Image
                  className="w-full h-full rounded-[30px]"
                  src={d?.image}
                  alt="projectImg"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full text-center lg:text-left">
                <div className="flex flex-col lg:block items-center justify-items-start">
                  {/* <span className="mb-5 lg:mb-10 headingStyle">
                    Featured Textiles
                  </span> */}
                  <div className="p-4 border border-[#187AC3] my-4 lg:my-8 rounded-[10px] bg-white text-center min-w-[200px] sm:min-w-[350px] xl:min-w-[430px] w-fit px-10">
                    <span className="font-medium text-[#4A4A4A] text-[22px] sm:text-[26px] md:text-[30px]">
                      {d?.title}
                    </span>
                  </div>

                  <div
                    className="mb-10 commonText"
                    dangerouslySetInnerHTML={{ __html: d?.description }}
                  ></div>

                  {/* <CustomButton label={'View All'} to="/portfolio" /> */}
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="flex justify-center space-x-2 mt-4">
                    {portfolioItems?.map((_, index) => (
                      <button
                        key={index}
                        className={`h-4 w-4
                         rounded-full ${
                           current === index ? "bg-[#EC7408]" : "bg-[#D9D9D9]"
                         } transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-10 lg:mt-0">
                    <LeftRoundedBtn
                      clickFunction={() => prevSlide()}
                      disabled={current === 0}
                    />
                    <RightRoundedBtn
                      clickFunction={() => nextSlide()}
                      disabled={current === portfolioItems.length - 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

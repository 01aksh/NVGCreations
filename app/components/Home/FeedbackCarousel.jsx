'use client';
import React, { useState, useEffect } from 'react';
import LeftRoundedBtn from '../common/LeftRoundedBtn';
import RightRoundedBtn from '../common/RightRoundedBtn';

const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    {
      message:
        'I enrolled for the complete web development and digital marketing package at SDS and I really appreciate the type of teamwork they have executed in designing and developing the website, attracting traffic, and converting visitors into customers. Well done guys!',
      name: 'Daphne Chandler',
      location: '(Edinburgh)',
    },
    {
      message:
        'The team of SDS Softwares is very professional and easy to deal with. I found their guidance and advice extremely helpful throughout the redesigning of my website. They helped me in converting my design ideas and concepts into a professional presentable website successfully.',
      name: 'Sebastian Rowe',
      location: '(Bristol)',
    },
    {
      message:
        'My experience with SDS Softwares was wonderful and praiseworthy. A few things that I would like to highlight about the company are - their on-time project execution, work commitment, understanding of basic concepts, and familiarity with the latest trends.',
      name: 'Bethany Higgins',
      location: '(Birmingham)',
    },
    {
      message:
        'Dheeraj and his team did a great job on our project. They were very responsive and handled all the changes at the end of the project efficiently. The quality of their work was excellent, and we definitely plan to work with them again in the future.',
      name: 'Adrian',
      location: '(Australia, Melbourne)',
    },
    {
      message:
        'Wonderful experience! Very skilled team and very responsive to all questions.',
      name: 'Richard',
      location: '(United States)',
    },
    {
      message:
        'Very cooperative and understanding team. All my concerns were addressed promptly and work was delivered on time. Will work again for future projects.',
      name: 'Jaskirat Singh',
      location: '(Canada)',
    },
    {
      message: 'Raj and his team worked quickly and communicated well.',
      name: 'Justin',
      location: '(United States)',
    },
    {
      message:
        'The experience was professional and the team were patient and understanding. Will use again.',
      name: 'Tom Frazer',
      location: '(Singapore)',
    },
    {
      message:
        'It’s been a year now when I subscribed for Search Engine Optimization services of SDS Softwares and I must say, they are the best in it. My website has not only gained huge traffic but also turns up at the very first page of search engines.',
      name: 'Margot Lawrence',
      location: '(Edinburgh)',
    },
    {
      message:
        'I recommend SDS Softwares for time and cost effective website designing services. They turned my dream e-commerce website into reality in just a few months. I am glad I chose them.',
      name: 'Mollie Cooke',
      location: '(Leicester)',
    },
    {
      message:
        'Being a newbie in this already established market, I was worried about making my presence out there, but SDS made it easy. Within a couple of weeks, they designed my website and popularized it on the search engines. They know the art of attracting visitors and converting them into the customers.',
      name: 'Dylan Willis',
      location: '(Bradford)',
    },
    {
      message:
        'SDS Softwares is a team of skilled professionals who love what they do. Besides explicitly sharing their ideas and knowledge, they also attentively listen to your requirements and suggestions and execute them.',
      name: 'Theo Holt',
      location: '(Winchester)',
    },
    {
      message:
        'Getting in touch with this company was one of the most pleasing experiences I have had. They are polite, talented, and trustworthy. I used their digital marketing services for promoting my business and I believe I will return to them again and again in the future.',
      name: 'Louie Bryant',
      location: '(Durham, England)',
    },
    {
      message:
        'Got my logo designed at SDS Softwares and it did not only match up to my expectations but exceeded. I sincerely recommend their services for quality results with time and cost efficiency.',
      name: 'Alfred Garner',
      location: '(Southampton)',
    },
    {
      message:
        'I am very impressed seeing the SEO results of my website. Good work SDS! Keep it up!',
      name: 'Elliott Horton',
      location: '(Sheffield)',
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data?.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data?.length) % data?.length);
  };
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="w-full items-center justify-center md:justify-between flex bg-[#F6F9FB] rounded-[30px] my-10 p-6 sm:p-10 md:p-12 xl:p-16">
        <div className="hidden md:block">
          <LeftRoundedBtn
            clickFunction={() => prevSlide()}
            disabled={current === 0}
          />
        </div>

        <div
          style={{ width: '85%' }}
          className="flex flex-col items-center text-center"
        >
          <span className="headingStyle pb-5">Client Feedback</span>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {data.map((d, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-full px-0 md:px-8"
                >
                  <span className="commonText mb-4">{d?.message}</span>
                  <hr
                    className="h-[8px] border-black w-[100px] my-8"
                    style={{ borderTopWidth: '4px', borderRadius: '50px' }}
                  />
                  <div className="font-semibold text-2xl mb-1">{d?.name}</div>
                  <div className="text-xl font-[500]">{d?.location}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-5 flex w-[210px] sm:w-full overflow-hidden justify-center">
            <div className="flex justify-between">
              <div className="flex justify-center space-x-2 mt-4">
                {data?.map((_, index) => (
                  <button
                    key={index}
                    className={`h-4 w-4
                     rounded-full ${
                       current === index ? 'bg-[#187AC3]' : 'bg-[#D9D9D9]'
                     } transition-all duration-300`}
                    onClick={() => setCurrent(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-10 md:mt-0 lg:mt-10 xl:mt-0 block md:hidden">
            <LeftRoundedBtn
              clickFunction={() => prevSlide()}
              disabled={current === 0}
            />
            <RightRoundedBtn
              clickFunction={() => nextSlide()}
              disabled={current === data.length - 1}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <RightRoundedBtn
            clickFunction={() => nextSlide()}
            disabled={current === data.length - 1}
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackCarousel;

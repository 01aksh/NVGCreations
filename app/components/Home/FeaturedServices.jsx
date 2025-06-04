import ServiceImage from "@/assets/images/image.avif";
import Image from "next/image";
import ServicesBox from "../ServicesBox/ServicesBox";

const FeaturedServices = () => {
  const featuredServices = [
    {
      id: 1,
      name: "Web Design",
      bgColor: "bg-[#F6F9FB]",
      boderColor: "border-[#187AC3]",
    },
    {
      id: 2,
      name: "Web Development",
      bgColor: "bg-[#FFF7F0]",
      boderColor: "border-[#EC7408]",
    },
    {
      id: 3,
      name: "AI and Machine Learning",
      bgColor: "bg-[#FFF7F0]",
      boderColor: "border-[#EC7408]",
    },
    {
      id: 4,
      name: "Mobile Applications",
      bgColor: "bg-[#F6F9FB]",
      boderColor: "border-[#187AC3]",
    },
    {
      id: 5,
      name: "Digital Marketing",
      bgColor: "bg-[#F6F9FB]",
      boderColor: "border-[#187AC3]",
    },
    {
      id: 6,
      name: "Software Testing",
      bgColor: "bg-[#FFF7F0]",
      boderColor: "border-[#EC7408]",
    },
  ];
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between gap-5 lg:gap-10 xl:gap-14">
      <div className="flex-1 w-full flex flex-col justify-between space-y-2 text-center lg:text-left">
        <div className="headingStyle">Featured Services</div>
        <div className="grid grid-cols-2 gap-4">
          {featuredServices.map((service) => (
            <ServicesBox
              name={service?.name}
              key={service?.id}
              bgColor={service?.bgColor}
              boderColor={service?.boderColor}
            />
          ))}
        </div>
        {/* <div className="flex flex-col justify-center lg:justify-start space-y-4 sm:space-y-0 sm:flex-row pt-10">
          <CustomButton label={'View Services'} to="/services" />
          <CustomButton
            label={'View Case Studies'}
            type="Secondary"
            className="sm:ml-4"
            to="/case-studies"
          />
        </div> */}
      </div>
      <div className="flex-1 text-center w-auto md:w-max h-[300px] md:h-[400px] lg:h-full">
        <Image
          src={ServiceImage}
          alt="image"
          className="w-full h-full max-h-[600px] rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default FeaturedServices;

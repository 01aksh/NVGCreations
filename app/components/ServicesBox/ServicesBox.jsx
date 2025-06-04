const ServicesBox = ({
  name,
  colSpan,
  boderColor,
  bgColor = 'bg-[#FFFFFF]',
}) => {
  return (
    <div
      className={`rounded-lg ${colSpan} flex py-6 justify-center items-center font-normal text-[#4A4A4A] sm:text-lg text-center border-2 ${bgColor} ${boderColor}`}
    >
      <span>{name}</span>
    </div>
  );
};

export default ServicesBox;

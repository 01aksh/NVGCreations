import Image from 'next/image';
import WhiteArrowLeft from '@/assets/icons/white-arrow-up-left.svg';
import BlackArrowLeft from '@/assets/icons/black-arrow-up-left.svg';

const RoundedBtn = ({ clickFunction, disabled }) => {
  return (
    <button
      className="group cursor-pointer "
      onClick={clickFunction}
      disabled={disabled}
    >
      <div className="border-2 border-black rounded-[50%] h-[50px] w-[50px] p-2 bg-white group-hover:bg-black">
        <Image
          src={BlackArrowLeft}
          height={30}
          width={30}
          alt="arrow"
          className="block group-hover:hidden"
        />
        <Image
          src={WhiteArrowLeft}
          height={30}
          width={30}
          alt="arrow"
          className="hidden group-hover:block transform transition-transform duration-300 group-hover:-rotate-45"
        />
      </div>
    </button>
  );
};

export default RoundedBtn;

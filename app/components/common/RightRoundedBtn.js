import Image from 'next/image';
import WhiteArrowRight from '@/assets/icons/white-arrow-up-right.svg';
import BlackArrowRight from '@/assets/icons/black-arrow-up-right.svg';

const RightRoundedBtn = ({ clickFunction, disabled }) => {
  return (
    <button
      className="group cursor-pointer"
      onClick={clickFunction}
      disabled={disabled}
    >
      <div className="border-2 border-black h-[50px] w-[50px] rounded-[50%] p-2 bg-black group-hover:bg-white">
        <Image
          src={WhiteArrowRight}
          height={30}
          width={30}
          alt="arrow"
          className="block group-hover:hidden"
        />
        <Image
          src={BlackArrowRight}
          height={30}
          width={30}
          alt="arrow"
          className="hidden group-hover:block transform transition-transform duration-300 group-hover:rotate-45"
        />
      </div>
    </button>
  );
};

export default RightRoundedBtn;

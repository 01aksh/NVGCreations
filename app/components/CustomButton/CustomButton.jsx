import blackIcon from '@/assets/icons/black-arrow-up-right.svg';
import whiteIcon from '@/assets/icons/white-arrow-up-right.svg';
import Image from 'next/image';
import Link from 'next/link';

const CustomButton = ({
  label,
  type = 'primary',
  className,
  to = '#',
  isBtn,
  onClick,
}) => {
  return (
    <>
      {isBtn ? (
        <div
          onClick={() => onClick()}
          className={`${type === 'primary' ? 'bg-black text-white hover:bg-[#187AC3]' : 'bg-white text-black border-2 hover:border-white border-black hover:bg-[#EC7408] hover:text-black'} cursor-pointer font-semibold text-base px-6 py-4 rounded-[50px] flex items-center justify-center gap-4 ${className} group`}
        >
          <span className="truncate">{label}</span>
          <Image
            src={type === 'primary' ? whiteIcon : blackIcon}
            width={25}
            height={10}
            alt="up right icon"
            className={`flex-shrink-0 transition-transform duration-300 group-hover:rotate-45 ${type === 'secondary' ? 'group-hover:filter group-hover:invert' : ''}`}
          />
        </div>
      ) : (
        <Link
          href={`${to}`}
          className={`${type === 'primary' ? 'bg-black text-white hover:bg-[#187AC3]' : 'bg-white text-black border-2 border-black hover:bg-[#EC7408] hover:border-white hover:text-black'} font-semibold text-base px-6 py-4 rounded-[50px] flex items-center justify-center gap-4 ${className} group`}
        >
          <span className="truncate">{label}</span>
          <Image
            src={type === 'primary' ? whiteIcon : blackIcon}
            width={25}
            height={10}
            alt="up right icon"
            className={`flex-shrink-0 transition-transform duration-300 group-hover:rotate-45 ${type === 'secondary' ? 'group-hover:filter group-hover:invert' : ''}`}
          />
        </Link>
      )}
    </>
  );
};

export default CustomButton;

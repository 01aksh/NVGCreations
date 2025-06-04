import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
const CustomSections = ({
  title,
  image,
  bgColor,
  side = "left",
  buttonLabel,
  desc,
  to,
}) => {
  return (
    <div
      className={`w-full flex justify-center items-center bg-[${bgColor}] h-full rounded-[30px] p-6 sm:p-10 md:p-12 xl:p-16`}
    >
      <div
        className={`flex flex-col ${
          side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between items-center gap-5 lg:gap-10 xl:gap-14`}
      >
        <div className="sm:flex-1 w-fit md:w-max h-[300px] md:h-[400px] lg:h-full">
          <Image
            src={image}
            alt="image"
            className="w-full h-full max-h-[600px] rounded-[30px]"
          />
        </div>
        <div className="flex-1 w-full flex flex-col text-center space-y-4 lg:text-left">
          <p className="headingStyle">{title || ""}</p>
          {desc ? (
            <span className="commonText">{desc}</span>
          ) : (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Products
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                  <li>
                    <strong>Hand Block Printed Fabrics:</strong> Authentic,
                    eco-friendly prints on Cotton, Silk, and Linen.
                  </li>
                  <li>
                    <strong>Designer Sarees & Dupattas:</strong> Elevate your
                    wardrobe with our Handcrafted elegance.
                  </li>
                  <li>
                    <strong>Home Furnishings:</strong> From table linens to
                    cushion covers, bring artisanal charm to your space.
                  </li>
                  <li>
                    <strong>Custom Orders:</strong> Personalised designs
                    tailored to your Brand’s needs.
                  </li>
                </ul>
              </section>
            </>
          )}
          {/* {buttonLabel && (
            <div className="flex justify-center lg:justify-start pt-10">
              <CustomButton label={buttonLabel} to={to} />
            </div>
          )} */}
        </div>
      </div>{" "}
    </div>
  );
};

export default CustomSections;

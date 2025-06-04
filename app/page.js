import Image3 from "@/assets/images/image.avif";
import AgencyImage from "@/assets/images/image1.jpg";
import Image2 from "@/assets/images/image2.jpg";
import Image from "next/image";
import FeaturedProjects from "./components/Home/FeaturedProjects";

export default function Home() {
  return (
    <div>
      <div
        className={`w-full flex justify-center items-center  h-full rounded-[30px] p-6 sm:p-10 md:p-12 xl:p-16`}
      >
        <div
          className={`flex flex-col lg:flex-row-reverse justify-between items-center gap-5 lg:gap-10 xl:gap-14`}
        >
          {/* <CustomYTModal /> */}
          <div className="sm:flex-1 w-fit md:w-max h-[300px] md:h-[400px] lg:h-full">
            <Image
              src={AgencyImage}
              alt="image"
              className="w-full h-full max-h-[600px] rounded-[30px]"
            />
          </div>
          <div className="flex-1 w-full flex flex-col py-6 text-center lg:text-left">
            <p className="headingStyle mb-4">
              {" "}
              Your <span className="text-[#187AC3]">Trusted Partner</span> for
              Custom Textile Solutions
            </p>
            <p className="commonText">
              Welcome to NVG Creations, where Tradition meets Artistry! We
              specialise in exquisite Textile Hand Block Printing, Digital
              Printing, Embroidery, Crochet and Handmade Textile accessories,
              crafted with precision and passion. Each piece reflects the rich
              heritage of Indian craftsmanship, ensuring timeless elegance in
              every fabric. Explore our collection and bring home the beauty of
              Handcrafted Textiles.
            </p>
          </div>
        </div>{" "}
      </div>

      <div
        className={`w-full flex justify-center items-center  h-full rounded-[30px] p-6 sm:p-10 md:p-12 xl:p-16`}
      >
        <div
          className={`flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 xl:gap-14`}
        >
          <div className="sm:flex-1 w-fit md:w-max h-[300px] md:h-[400px]">
            <Image
              className="w-full h-full max-h-[600px] rounded-[30px]"
              src={Image2}
              alt="Image2"
            />
          </div>

          <div className="flex-1 w-full flex flex-col py-6 text-center lg:text-left">
            <p className="headingStyle">Our Products</p>
            <section className="mb-8">
              <ul className=" text-gray-700 text-lg leading-relaxed space-y-2">
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
                  <strong>Custom Orders:</strong> Personalised designs tailored
                  to your Brand’s needs.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex justify-center items-center  h-full rounded-[30px] p-6 sm:p-10 md:p-12 xl:p-16`}
      >
        <div
          className={`flex flex-col lg:flex-row-reverse justify-between items-center gap-5 lg:gap-10 xl:gap-2`}
        >
          <div className="sm:flex-1 w-fit md:w-max h-[300px] md:h-[400px]">
            <Image
              className="w-full h-full max-h-[600px] rounded-[30px]"
              src={Image3}
              alt="Image3"
            />
          </div>

          <div className="flex-1 w-full flex flex-col py-6 text-center lg:text-left">
            <p className="headingStyle">Why Choose Us?</p>
            <section className="mb-8">
              <ul className=" text-gray-700 text-lg leading-relaxed space-y-2">
                <li>
                  <strong>Sustainable & Ethical:</strong> We use azo-free dyes
                  and eco-friendly processes.
                </li>
                <li>
                  <strong>Authentic Craftsmanship:</strong> Handmade by skilled
                  artisans with generations of expertise.
                </li>
                <li>
                  <strong>Customizable Designs:</strong> Tailored to your
                  requirements for a unique touch.
                </li>
                <li>
                  <strong>B2B Excellence:</strong> We cater to bulk orders with
                  seamless delivery and quality assurance.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-text">
          NVG Creations offers comprehensive Workshops and Training programs in
          Hand Block Printing, Crochet, and Hand Embroidery, promoting the rich
          heritage of traditional handcrafts.
        </div>
      </div>

      <div className="mt-8 md:mt-14">
        <FeaturedProjects />
      </div>
    </div>
  );
}

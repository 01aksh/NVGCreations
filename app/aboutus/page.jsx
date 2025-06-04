import Head from "next/head";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen  py-10">
      <Head>
        <title>About Us - NVG Creations</title>
        <meta
          name="description"
          content="Learn about NVG Creations, our mission, and our expertise in hand block printing."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About NVG Creations
        </h1>

        <div className="bg-gray-50 shadow-lg rounded-lg p-8">
          {/* <div className="text-center">
            <img
              className="h-32 w-32 rounded-full mx-auto mb-4"
              src={`nvg.jpg`} // Replace with your image URL
              alt="Team Member"
            />
            <h2 className="text-2xl font-semibold text-gray-900">Navaneetha</h2>
            <p className="text-gray-600 text-lg mb-4">
              Lead Developer & Designer
            </p>
          </div> */}
          {/* Who We Are Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At NVG Creations, we are dedicated to preserving the Ancient art
              of Hand Block Printing while embracing modern aesthetics. Our
              artisans, with years of expertise, meticulously carve intricate
              designs onto wooden blocks, transferring them onto high-quality
              fabrics using azo-free dyes. Each creation tells a story of
              tradition, sustainability, and unparalleled craftsmanship. Our
              commitment to quality ensures that every fabric is unique,
              durable, and ethically produced.
            </p>
          </section>

          {/* Vision & Mission Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="my-6">
              Looking for premium Hand Block Prints or Hand Block Printed
              Fabrics and Handmade Textile Products? Partner with us and
              experience the finest in Handcrafted Excellence.
            </p>
            <ul className="list-none text-gray-700 text-lg leading-relaxed space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  className="w-6 h-6 text-blue-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 9.75V5.25H7.5v4.5M3.75 9.75v9a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-9M12 15.75v-3"
                  />
                </svg>
                <span>
                  <strong>Location:</strong> No.35, Dinnur main road, R T Nagar,
                  Bengaluru - 560032
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="w-6 h-6 text-green-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75L9 13.5l3-3 9.75 9.75"
                  />
                </svg>
                <span>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919066940495"
                    className="text-blue-500 hover:underline"
                  >
                    9066940495
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="w-6 h-6 text-red-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5h15v15h-15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l7.5 7.5 7.5-7.5"
                  />
                </svg>
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:nvgcreationss@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    nvgcreationss@gmail.com
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="w-6 h-6 text-purple-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15M19.5 12H4.5"
                  />
                </svg>
                <span>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://nvgcreations.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    nvgcreations.com
                  </a>
                </span>
              </li>
            </ul>
          </section>

          {/* Call to Action Section */}
          {/* <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Us in Celebrating Craftsmanship
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Partner with NVG Creations to bring the beauty of hand block
              printing to your business. Let’s create something extraordinary
              together.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get in Touch
            </button>
          </section> */}
        </div>
      </div>
    </div>
  );
}

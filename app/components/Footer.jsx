const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-4">
        <div className="md:flex md:justify-between">
          {/* Company Logo and Name */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="./nvg.jpg" // Replace with your logo path
                className="mr-3 h-16 w-16 rounded-full"
                alt="NVG Logo"
              />
              <span className="self-center text-xl font-medium whitespace-nowrap text-white">
                NVG Creations
              </span>
            </a>
          </div>

          {/* Company Address */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-white mb-2">
              Our Address
            </h2>
            <p className="text-gray-400">
              35, Dinnur Main Rd, Ex Servicemen Colony
              <br />
              Dinnur, RT Nagar,
              <br />
              Bengaluru, Karnataka 560032
              <br />
              India
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-white mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BcQhGA936/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/nvgcreationss?igsh=NHNsYTRkajBjYTdj" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-2.905.133-4.164 1.457-4.297 4.297-.058 1.281-.073 1.689-.073 4.948 0 3.259.015 3.668.073 4.948.133 2.905 1.457 4.164 4.297 4.297 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 2.905-.133 4.164-1.457 4.297-4.297.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.133-2.906-1.457-4.164-4.297-4.297C15.667 4.177 15.259 4.163 12 4.163zm-5.5 8.837c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5zm7.5 0c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* YouTube Link */}
              <a
                href="https://youtube.com/@nvgcreations?si=TdSYlaEFGgM-s3we"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} NVG Creations. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

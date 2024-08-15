import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 w-full bg-gray-900 text-gray-200">
      <div className="flex flex-col items-center justify-center py-8 md:flex-row md:justify-between md:px-16">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center pb-4">
            <img src="/house.svg" alt="logo" width={60} className="mr-2" />
            <h2 className="text-xl font-semibold">DreamDwell</h2>
          </div>

          <div className="flex items-center gap-4">
            <FacebookLogo
              size={28}
              className="transform cursor-pointer transition-transform hover:scale-110"
              color="#fcfcfc"
              weight="light"
            />
            <InstagramLogo
              size={28}
              className="transform cursor-pointer transition-transform hover:scale-110"
              color="#fcfcfc"
              weight="light"
            />
            <PinterestLogo
              size={28}
              className="transform cursor-pointer transition-transform hover:scale-110"
              color="#fcfcfc"
              weight="light"
            />
            <YoutubeLogo
              size={28}
              className="transform cursor-pointer transition-transform hover:scale-110"
              color="#fcfcfc"
              weight="light"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center md:mt-0 md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">123 Dream St., Real Estate City, 45678</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@dreamdwell.com</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-center md:mt-0 md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/properties" className="hover:text-white">
                Properties
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 text-center md:mt-0 md:text-left">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-2">Subscribe to get the latest updates:</p>
          <form className="mt-2 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md p-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-orange-600 p-2 text-white sm:mt-0 sm:rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="text-center text-sm">
          &copy; {currentYear} DreamDwell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

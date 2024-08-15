import about from "/about.jpg";

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 px-8 py-16 text-gray-800">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your Trusted Partner in Real Estate
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row">
          {/* Image */}
          <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
            <img
              src={about}
              alt="About DreamDwell"
              className="mx-auto w-full max-w-xs rounded-lg shadow-lg"
              style={{ maxHeight: "460px" }}
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <p className="mb-4 text-lg leading-relaxed">
              At DreamDwell, we believe that finding your dream home should be a
              seamless and enjoyable experience. Established in 2010, we have
              spent over a decade perfecting our services to ensure that you
              find the property that meets all your needs and desires. Our
              dedicated team of professionals is here to guide you every step of
              the way, whether you're looking to buy, sell, or rent.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Our mission is to make real estate transactions as smooth and
              transparent as possible, so you can focus on what matters most:
              living your best life in your new home. We are committed to
              providing top-notch service, personalized solutions, and a
              customer-first approach.
            </p>
            <p className="text-lg leading-relaxed">
              Join the countless satisfied customers who have trusted DreamDwell
              to make their real estate dreams come true. Together, let's find
              the perfect place for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

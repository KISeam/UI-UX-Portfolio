import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Package I",
      price: 300,
      time: "1 Musician / 1 Hour",
      features: ["Ideal for Solo Events", "Professional Setup", "Basic Sound Support"],
    },
    {
      title: "Package II",
      price: 500,
      time: "2 Musicians / 2 Hours",
      features: ["Perfect for Small Gatherings", "High-Quality Equipment", "Custom Setlist"],
    },
    {
      title: "Package III",
      price: 1000,
      time: "3 Musicians / 4 Hours",
      features: ["Best for Weddings & Events", "Complete Setup", "Extended Performance"],
    },
  ];

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-5xl font-serif text-[#4A060D] font-bold mb-4">
          Price Guide
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg mb-14">
          Discover the perfect package tailored for your special moments. Quality, professionalism,
          and elegance—at your service.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-[#e2e2e2] shadow-md transition hover:shadow-xl bg-gradient-to-b from-[#fff7ed] to-[#fae8d0]"
            >
              {/* Header */}
              <div className="py-6 px-6 border-b border-[#e2d5c4]">
                <h3 className="text-2xl font-semibold text-[#4A060D]">{plan.title}</h3>
                <p className="mt-1 text-sm text-[#6a4a3f]">{plan.time}</p>
              </div>

              {/* Price */}
              <div className="py-6 px-6 bg-[#4A060D] text-white text-center">
                <p className="text-5xl font-bold mb-2">
                  <span className="text-xl align-super">$</span>
                  {plan.price}
                </p>
                <p className="text-sm opacity-80">starting price</p>
              </div>

              {/* Features */}
              <div className="py-6 px-6 bg-white">
                <ul className="space-y-3 text-left text-gray-700 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#4A060D]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 text-center">
                  <a
                    href="#contact"
                    className="inline-block bg-[#4A060D] hover:bg-[#7a3411] text-white text-sm font-medium px-6 py-3 rounded-full transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      title: "E-commerce Platform Redesign",
      client: "FashionHub",
      image:
        "https://media.licdn.com/dms/image/v2/C4E12AQFuq3DvC1fiYw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1638362724757?e=2147483647&v=beta&t=SKW6BL0tPu1mOfLtRc0ByYHd39Fahnn1xbmLYM-eirE",
      results: [
        { value: "150%", label: "Conversion Increase" },
        { value: "$200K", label: "Monthly Revenue" },
        { value: "40%", label: "Faster Load Time" },
      ],
      description:
        "Transforming an outdated platform into a modern shopping experience",
      details: [
        "Complete UX/UI overhaul",
        "Mobile-first responsive design",
        "Checkout process optimization",
        "Performance benchmarking",
      ],
    },
    {
      title: "Healthcare SaaS Platform",
      client: "MediCare Solutions",
      image:
        "https://miro.medium.com/v2/resize:fit:974/1*feK9Q9NJUu4fv2CKW7-OpA.png",
      results: [
        { value: "300%", label: "User Growth" },
        { value: "4.8/5", label: "User Satisfaction" },
        { value: "90%", label: "Adoption Rate" },
      ],
      description: "Developing a patient-centric healthcare management system",
      details: [
        "HIPAA-compliant architecture",
        "Telemedicine integration",
        "AI-powered diagnostics",
        "Cross-platform synchronization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A060D] mb-4 relative pb-8">
            Success Stories
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#4A060D] rounded-full"></div>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven results through strategic digital innovation
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-80">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="text-sm font-medium text-white bg-[#4A060D]/90 px-4 py-2 rounded-lg">
                    {story.client}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-1">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-1">
                  {story.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {story.results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200"
                    >
                      <p className="text-2xl font-bold text-[#4A060D] mb-1">
                        {result.value}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {story.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#4A060D] mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lg">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Case Study Button */}
                <div className="border-t pt-6">
                  <Link
                    to="#"
                    className="inline-flex items-center text-[#4A060D] hover:text-[#6B1A1A] font-semibold"
                  >
                    View Full Case Study
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-[#4A060D] text-white rounded-lg hover:bg-[#6B1A1A] transition-colors duration-300 font-semibold"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import blogImg1 from "../assets/images/blog-1.jpeg";
import blogImg2 from "../assets/images/blog-2.png";
import blogImg3 from "../assets/images/blog-3.png";

const Blog = () => {
  return (
    <section id="blog" className="bg-[#F9F1F1] lg:py-20 py-12">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <h1 className="text-5xl md:text-7xl leading-[1.2] font-bold text-[#4A060D] text-center mb-10">
          My Blog
        </h1>

        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg1}
                  alt="UI Principles Every Designer Should Know"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UI Design
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>May 10, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-black line-clamp-1">
                    UI Principles Every Designer Should Know
                  </h5>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    Learn the foundational UI design rules that improve
                    usability and engagement.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg2}
                  alt="UX Psychology: How Design Influences Behavior"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UX Research
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>April 27, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-black line-clamp-1">
                    UX Psychology: How Design Influences Behavior
                  </h5>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    Discover how cognitive biases and psychology shape user
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg3}
                  alt="Top UX Trends to Watch in 2025"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UX Trends
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>March 30, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-black line-clamp-1">
                    Top UX Trends to Watch in 2025
                  </h5>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    Stay ahead with these emerging UX strategies, patterns, and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;

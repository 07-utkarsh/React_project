import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Amit Sharma",
    text: "Joining this gym has been a life-changing experience for me. The trainers are knowledgeable and the facilities are top-notch. I've seen tremendous improvement in my fitness levels.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Pooja Singh",
    text: "The variety of workout programs offered here is amazing! From cardio to strength training, they cover everything. I feel more confident and energetic after just a few months of training.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    text: "The personalized attention and support from the trainers are what make this gym stand out. They’ve helped me stay motivated and achieve my fitness goals faster than I expected.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sneha Verma",
    text: "This gym has everything I need to stay fit and healthy. The atmosphere is encouraging and the staff is always friendly. I highly recommend this place to anyone serious about fitness.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

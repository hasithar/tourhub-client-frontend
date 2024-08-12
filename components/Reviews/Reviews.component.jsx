import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Thompson",
      description:
        "Our Sri Lanka adventure was beyond amazing! ITH crafted a perfect itinerary, from the breathtaking beaches to the ancient ruins. Our guide was knowledgeable and friendly. Highly recommend!",
      image: "/images/reviews/sarah-thompson.jpg",
    },
    {
      name: "David Lee",
      description:
        "We had an unforgettable experience with ITH. The attention to detail was impeccable. Every moment was well-planned, from luxurious accommodations to authentic local cuisine. Can't wait to return!",
      image: "/images/reviews/david-lee.jpg",
    },
    {
      name: "Emily Carter",
      description:
        "Exploring Sri Lanka with ITH was a dream come true. The team was incredibly helpful and accommodating. We loved the personalized touch and the opportunity to immerse ourselves in the local culture.",
      image: "/images/reviews/emily-carter.jpg",
    },
  ];

  return (
    <section className="pb-15">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-8 mb-6">
          <h2 className="font-semibold text-3xl text-gray-800">
            What our happy customers say.
          </h2>
          <a href="#" className="group text-dark leading-none">
            <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              Read all reviews
              <svg
                className="fill-current group-hover:rotate-45 transition-all"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_675_6418)">
                  <path
                    d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z"
                    fill=""
                  ></path>
                </g>
                <defs>
                  <clippath id="clip0_675_6418">
                    <rect width="18" height="18" fill="white"></rect>
                  </clippath>
                </defs>
              </svg>
            </span>
          </a>
        </div>

        <div className="pt-12 pb-12 border-t border-gray-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-8 ">
            {reviews.length > 0 &&
              reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

const Review = ({ review }) => {
  const { name, description, image } = review;

  return (
    <a
      href="https://clarity-tailwind.preview.uideck.com/author.html"
      className="group"
    >
      <div className="border border-gray-3 rounded-[20px] bg-gray p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-row items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src={image} alt={name} width={100} height={100} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 ml-4">{name}</h3>
          </div>

          <div>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

import Image from "next/image";
import Link from "next/link";

const FeaturedGrid = (props) => {
  const { featured } = props;

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-8 xl:px-0 relative z-1">
      <div className="flex flex-wrap">
        {featured.length > 0 &&
          featured.map((item, index) => (
            <FeaturedCard key={index} details={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;

const FeaturedCard = ({ details, index }) => {
  const { name, description, image, category } = details;

  return (
    <div className={`${index === 0 ? "w-full" : "w-1/2"} p-4`}>
      <div className="w-full  flex flex-col sm:flex-row sm:items-center gap-6 shadow-sm rounded-xl p-2 bg-white">
        <div className="w-full ">
          <Link href="/">
            <Image
              className="w-full rounded-lg"
              src={image}
              alt={name}
              width={1024}
              height={768}
            />
          </Link>
        </div>

        <div className=" w-full">
          <a
            href="#"
            className="inline-flex text-green-500 bg-green-500/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
          >
            {category}
          </a>

          <h2
            className={`${
              index === 0 ? "text-3xl" : "text-xl"
            } font-semibold  text-gray-800 mb-3`}
          >
            <a href="#">{name}</a>
          </h2>

          {description && index === 0 && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";

const TabItem = (props) => {
  const { name, description, image } = props;

  return (
    <>
      <div className="group">
        <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
          {image && (
            <a href="#">
              <Image
                src={image}
                alt="image"
                className="w-full"
                width={1024}
                height={768}
              />
            </a>
          )}
        </div>

        {name && (
          <h3>
            <a href="#" className="block text-dark font-bold text-xl mb-3.5">
              <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {name}
              </span>
            </a>
          </h3>
        )}

        {description && <p>{description}</p>}
      </div>
    </>
  );
};

export default TabItem;

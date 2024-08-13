const SectionTitle = (props) => {
  const { title, description, align = "left" } = props;

  const textAlign =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <>
      <div className={`mb-12 ${textAlign}`}>
        <h2 className="text-gray-800  text-2xl font-bold sm:text-4xl xl:text-heading-3">
          {title}
        </h2>
        {description && <p className="mt-4">{description}</p>}
      </div>
    </>
  );
};

export default SectionTitle;

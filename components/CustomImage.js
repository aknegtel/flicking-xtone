import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));

const CustomImage = ({ src, noPlaceholder, ...props }) => {
  const image = src.startsWith("http")
    ? { src }
    : require(`../public${src}?lqip`);

  return (
    <div className={`relative overflow-hidden flex `}>
      {image.dataURI && !noPlaceholder && (
        <img
          src={image.dataURI}
          className="absolute inset-0 w-full h-full transform scale-110 m-0"
          style={{ filter: "blur(5px)" }}
          aria-hidden="true"
          alt=""
        />
      )}
      <Image src={image?.src || image.default} {...props} />
    </div>
  );
};

export default CustomImage;

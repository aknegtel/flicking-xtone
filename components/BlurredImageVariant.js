import Image from "next/image";

// Main difference is the className control is in the closest div, also, the closest div is not relative, the relative one is going to be the outside div...
const BlurredImageVariant = ({ src, noPlaceholder, className, ...props }) => {
  const image = src.startsWith("http")
    ? { src }
    : require(`../public${src}?lqip`);

  return (
    <div className={`overflow-hidden flex ${className && className}`}>
      {image.dataURI && !noPlaceholder && (
        <img
          src={image.dataURI}
          className="absolute object-cover inset-0 w-full h-full transform scale-110 m-0"
          style={{ filter: "blur(4px)" }}
          aria-hidden="true"
          alt="Blurred image"
        />
      )}
      <Image src={image?.src || image.default} {...props} />
    </div>
  );
};

export default BlurredImageVariant;

export default function SmallText({ children, className }) {
  return (
    <p
      className={`font-secondary font-extralight text-xs md:text-sm xl:text-base ${className}`}
    >
      {children}
    </p>
  );
}

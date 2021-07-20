import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"));
const SmallText = dynamic(() => import("./SmallText"));

export default function A({ children, className, href, small }) {
  return (
    <>
      {!small ? (
        <a href={href} className={`link--metis ${className}`}>
          <Paragraph>{children}</Paragraph>
        </a>
      ) : (
        <a href={href} className={`link--metis ${className}`}>
          <SmallText>{children}</SmallText>
        </a>
      )}
    </>
  );
}

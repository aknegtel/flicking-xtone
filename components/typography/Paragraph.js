export default function Paragraph({ html, children, style, className }) {
  if (html)
    return (
      <p
        style={style}
        dangerouslySetInnerHTML={{ __html: html }}
        className={`font-secondary text-xs sm:text-sm md:text-base lg:text-base ${className}`}
      >
        {children}
      </p>
    );
  else
    return (
      <p
        style={style}
        className={`font-secondary text-xs sm:text-sm md:text-base lg:text-base ${className}`}
      >
        {children}
      </p>
    );
}

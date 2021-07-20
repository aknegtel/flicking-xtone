const Section = ({ className, id, children }) => {
  return (
    <>
      <section id={id} className={className}>
        {children}
      </section>
    </>
  );
};

export default Section;

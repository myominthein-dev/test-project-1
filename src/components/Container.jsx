const Container = ({ children, className }) => {
  return (
    <section
      className={`w-full md:w-[720px]  lg:w-[1000px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};
export default Container;

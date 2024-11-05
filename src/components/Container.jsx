const Container = ({ children, className }) => {
  return (
<<<<<<< Updated upstream
    <section className={`w-full  mx-auto ${className}`}>{children}</section>
=======
    <section
      className={`w-full md:w-[720px]  lg:w-[1000px] mx-auto ${className}`}
    >
      {children}
    </section>
>>>>>>> Stashed changes
  );
};
export default Container;

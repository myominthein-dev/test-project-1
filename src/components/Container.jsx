const Container = ({ children, className }) => {
  return (
    <section
      className={`w-full  mx-auto max-w-[1632px] ${className}`}
    >
      {children}
    </section>
  );
};
export default Container;

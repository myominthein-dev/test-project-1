const Container = ({ children, className }) => {
  return (
    <section className={`w-full  mx-auto ${className}`}>{children}</section>
  );
};
export default Container;

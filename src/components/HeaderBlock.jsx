import Badge from "./Badge";

const HeaderBlock = ({
  children,
  label,
  firstColor,
  secondColor,
  firstHeadline,
  secondHeadline,
}) => {
  return (
    <div className="mx-auto text-center">
      <Badge label={label} />
      <h2 className="text-[50px] font-futura font-bold">
        <span className={`text-${firstColor}-PRIMARY`}>{firstHeadline}</span>{" "}
        <span className={`text-${secondColor}-PRIMARY`}>{secondHeadline}</span>
      </h2>
      <p className="font-lato leading-6 text-secondaryGrey w-1/3 mx-auto">
        {children}
      </p>
    </div>
  );
};
export default HeaderBlock;

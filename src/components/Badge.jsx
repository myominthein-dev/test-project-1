const Badge = ({ label }) => {
  return (
    <div className="text-base lg:text-xl border border-lightGrey inline-block px-4 py-2 rounded-[20px] text-blue-PRIMARY  font-futura">
      {label}
    </div>
  );
};
export default Badge;

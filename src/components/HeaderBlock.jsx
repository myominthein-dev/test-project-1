import Badge from "./Badge";
import { motion } from "framer-motion";

const HeaderBlock = ({
  children,
  label,
  firstColor,
  secondColor,
  firstHeadline,
  secondHeadline,
}) => {
  return (
    <div className="mx-auto w-[355px] md:w-[655px] lg:w-full sm:text-center  max-w-[1100px]">
      <Badge label={label} />
      <h2 className="text-xl md:text-2xl lg:text-[50px] font-futura font-bold my-3 lg:my-5 flex gap-3 justify-center">
        <motion.span
          className={`text-${firstColor}-PRIMARY`}
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {firstHeadline}
        </motion.span>
        <motion.span
          className={`text-${secondColor}-PRIMARY`}
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {secondHeadline}
        </motion.span>
      </h2>
      <p className="text-sm md:text-base font-lato leading-6 text-secondaryGrey w-full md:w-2/3 lg:w-1/3 mx-auto">
        {children}
      </p>
    </div>
  );
};
export default HeaderBlock;

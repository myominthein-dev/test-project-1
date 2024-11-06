import Container from "./Container";
import avatarOne from "../assets/HomeAssets/avactor-a.png";
import avatarTwo from "../assets/HomeAssets/avatar-b.png";
import avatarThree from "../assets/HomeAssets/avatar-c.png";
import avatarFour from "../assets/HomeAssets/avatar-d.png";
import avatarFive from "../assets/HomeAssets/avatar-e.png";
import divider from "../assets/HomeAssets/divider.svg";
import star from "../assets/HomeAssets/star.svg";
import yellowStar from "../assets/HomeAssets/yellow-star.svg";
import placeholderIcon from "../assets/HomeAssets/placeholder.svg";

const avatars = [avatarOne, avatarTwo, avatarThree, avatarFour, avatarFive];
const rating = [1, 2, 3, 4];

const Testimonial = () => {
  return (
    <Container className="max-w-[1218px]  md:py-8 lg:py-[100px] relative">
      {/* First Divider positioned independently */}
      <img
        src={divider}
        className="hidden md:block absolute md:top-1/5 left-1/3 transform -translate-x-1/2"
        alt="Divider"
      />

      {/* Second Divider positioned independently */}
      <img
        src={divider}
        className="hidden md:block absolute md:top-1/5 left-2/3 transform -translate-x-1/2"
        alt="Divider"
      />

      <div className="px-16 grid grid-cols-1 md:grid-cols-3 gap-16 relative">
        <div className="text-center">
          <div className="flex justify-center">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                className="size-8 -ml-2"
                alt="Avatar"
              />
            ))}
          </div>
          <p className="font-lato text-secondaryGrey mt-4">
            Repurpose analytics with the possibility to come
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-1">
            {rating.map((rate) => (
              <img
                src={yellowStar}
                key={rate}
                className="size-7 text-lightGrey"
                alt="Rating"
              />
            ))}
            <img src={star} className="size-7" alt="Rating" />
          </div>
          <p className="font-lato text-secondaryGrey mt-4">
            5 out of 5 stars from 123 reviews from our users
          </p>
        </div>

        <div className="text-center">
          <img
            src={placeholderIcon}
            className="mx-auto"
            alt="Placeholder Icon"
          />
          <p className="font-lato text-secondaryGrey mt-4">
            Repurpose analytics with the possibility to come up.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;

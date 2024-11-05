import Container from "./Container";
import HeaderBlock from "./HeaderBlock";

const MasterfulDesign = () => {
  return (
    <Container className="max-w-screen-2xl min-h-[875px] pt-[100px]">
      <HeaderBlock
        label="Masterful Design"
        firstColor="black"
        firstHeadline="A New Era of"
        secondColor="blue"
        secondHeadline="Design Excellence"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </HeaderBlock>
    </Container>
  );
};
export default MasterfulDesign;

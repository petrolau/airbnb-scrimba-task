import image from "../../assets/images/image.png";
import { StyledDiv, StyledImg } from "./styles";

const Hero = () => {
  return (
    <StyledDiv>
      <StyledImg src={image} alt="Grid" />
    </StyledDiv>
  );
};

export default Hero;

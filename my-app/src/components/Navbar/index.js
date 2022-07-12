import { FaAirbnb } from "react-icons/fa";
import { StyledDiv, StyledH1, StyledNav } from "./styles";
const Navbar = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <FaAirbnb size={50}></FaAirbnb>
        <StyledH1>airbnb</StyledH1>
      </StyledDiv>
    </StyledNav>
  );
};

export default Navbar;

import { AiFillStar } from "react-icons/ai";
import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledSpans,
  StyledDiv,
  StyledWrap,
} from "./styles";

const ImageCard = ({ data = [] }) => {
  return (
    <StyledWrap>
      {data.map((image) => (
        <StyledCard key={image.alt}>
          <StyledImg alt={image.alt} src={`${image.src}`}></StyledImg>
          <div>
            <StyledTitle>
              <AiFillStar />
              <span>{image.rating}</span>
              <StyledSpans>
                <span>
                  /{image.number} {image.country}
                </span>
              </StyledSpans>
            </StyledTitle>
            <StyledDiv>
              <span>
                {image.alt} with {image.author}{" "}
              </span>
              <span>From {image.price} /person </span>
            </StyledDiv>
          </div>
          {console.log(image.src)}
        </StyledCard>
      ))}
    </StyledWrap>
  );
};

export default ImageCard;

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import { StyledDiv } from "./styles";
import ImageCard from "../ImageCard/index";

const mockedImages = [
  {
    alt: "Mountain Biking",
    src: image1,
    rating: "5.0",
    number: 6,
    country: "USA",
    price: "$136",
    author: "Katie ",
    openSpots: 0,
    location: "Online",
  },
  {
    alt: "Life lessons",
    src: image2,
    rating: "5.0",
    number: 10,
    country: "USA",
    price: "$139",
    author: "Lana Lune",
    openSpots: 0,
    location: "Online",
  },
  {
    alt: "wedding photography",
    src: image3,
    rating: "4.8",
    number: 12,
    country: "USA",
    price: "$120",
    author: "Steven Ferrbs",
    openSpots: 2,
    location: "Online",
  },
];

const ImageGrid = () => {
  return (
    <StyledDiv>
      <ImageCard data={mockedImages} />
    </StyledDiv>
  );
};

export default ImageGrid;

import Navbar from "./components/Navbar";
import { StyledBody } from "./components/StyledBody/styles";
import Hero from "./components/Hero/index";
import MainContent from "./components/MainContent";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <StyledBody>
      <Navbar />
      <Hero />
      <MainContent />
      <ImageGrid />
    </StyledBody>
  );
}

export default App;

import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/heroSection";
import { Slider } from "./Slider/Slider";
import { Process } from "./What we do/Process";
import { OurWork } from "./Our Work/ourWork";
import { Steps } from "./Process/Steps";
import { Idea } from "./Idea/Idea";
import { Team } from "./Team/Team";
import { Footer } from "./Footer/Footer";
export const PageLayout = () => {
  const Container = ({ children }) => (
    <div className="bg-[#FBF0E8]">
      <div className="w-9/10  max-w-360 m-auto">{children}</div>
    </div>
  );
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
      </Container>
      <Slider />
      <Container>
        <Process />
      </Container>
        <OurWork />
        <Container>
          <Steps />
        </Container>
          <Idea />
          <Container>
            <Team />
          </Container>
          <Footer />
    </>
  );
};

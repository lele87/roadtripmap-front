import { useEffect, useState } from "react";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import StyledWelcomePage from "./StyledWelcomePage";

const WelcomePage = (): JSX.Element => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/sagrada-familia.jpeg"
  );

  useEffect(() => {
    const images = [
      "sagrada-familia.jpeg",
      "ponte-vecchio-firenze.jpeg",
      "new-york.jpeg",
    ];

    const intervalId = setInterval(() => {
      setBackgroundImage(
        `/images/${images[Math.floor(Math.random() * images.length)]}`
      );
    }, 8000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <StyledWelcomePage background={backgroundImage}>
        <WelcomeText />
        <WelcomeForm />
      </StyledWelcomePage>
    </>
  );
};

export default WelcomePage;

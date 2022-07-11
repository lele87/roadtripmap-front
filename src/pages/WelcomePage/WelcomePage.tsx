import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import StyledWelcomePage from "./StyledWelcomePage";

const WelcomePage = (): JSX.Element => {
  return (
    <>
      <StyledWelcomePage>
        <WelcomeText />
        <WelcomeForm />
      </StyledWelcomePage>
    </>
  );
};

export default WelcomePage;

import StyledWelcomeText from "./StyledWelcomeText";

const WelcomeText = (): JSX.Element => {
  return (
    <>
      <StyledWelcomeText>
        <div className="welcome__text--container">
          <div className="welcome__image--container">
            <img src="/images/trippy_logo314.webp" alt="trippy logo" />
          </div>
          <div className="welcome__paragraph--container">
            <p>Remember your trips</p>
          </div>
        </div>
      </StyledWelcomeText>
    </>
  );
};

export default WelcomeText;

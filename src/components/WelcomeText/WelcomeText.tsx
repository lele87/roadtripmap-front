const WelcomeText = (): JSX.Element => {
  return (
    <div className="welcome_text--container">
      <div className="welcome-image--container">
        <img src="/images/trippy_logo314.webp" alt="trippy logo" />
      </div>
      <div className="welcome_parraph--container">
        <p>Create your perfect road trip!</p>
      </div>
    </div>
  );
};

export default WelcomeText;

import StyledLoadingSpinner from "./StyledLoadingSpinner";

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <div className="dot-pulse">
        <div data-testid="dot-pulse__dot" className="dot-pulse__dot"></div>
      </div>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;

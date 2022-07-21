import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  padding: 160px 0;
  position: absolute;
  top: calc(50% - 170px);
  left: calc(50% - 40px);
  z-index: 1000;

  .dot-pulse {
    --uib-size: 60px;
    --uib-speed: 1.3s;
    --uib-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.27);
  }

  .dot-pulse__dot,
  .dot-pulse::before,
  .dot-pulse::after {
    content: "";
    display: block;
    height: calc(var(--uib-size) * 0.18);
    width: calc(var(--uib-size) * 0.18);
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
  }

  .dot-pulse::before {
    animation: pulse var(--uib-speed) ease-in-out infinite;
  }

  .dot-pulse__dot {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * 0.125)
      infinite both;
  }

  .dot-pulse::after {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * 0.25)
      infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }
  }
`;

export default StyledLoadingSpinner;

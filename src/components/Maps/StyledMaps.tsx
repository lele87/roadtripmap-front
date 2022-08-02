import styled from "styled-components";

const StyledMaps = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 30px;

  .map {
    width: 100%;
    height: 450px;
    margin-bottom: 10px;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location__info {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .location__button {
    display: flex;
    width: 140px;
    justify-content: center;
    margin-top: 8px;
    position: relative;
    left: 80px;
    cursor: pointer;
  }
`;

export default StyledMaps;

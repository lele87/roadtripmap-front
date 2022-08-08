import styled from "styled-components";

interface welcomePageProps {
  background: string;
}

const StyledWelcomePage = styled.div`
  height: 100vh;
  background-image: url(${(props: welcomePageProps) => props.background});
  background-size: cover;
  display: flex;
  gap: 120px;
  transition-delay: background-image 2s;
  transition: background-image 2s;
`;

export default StyledWelcomePage;

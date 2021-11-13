import styled from "styled-components";

const Headline = styled.h1`
  color: rgba(175, 47, 47, 0.15);
  font-size: 100px;
  font-weight: 100;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const HeadlineComponent = () => {
  return <Headline>todos</Headline>;
};

export default HeadlineComponent;

import styled from "styled-components";
import Status from "./Status";
import FilterButtons from "./FilterButtons";

const Container = styled.div`
  display: flex;
`;

const ActionBar = () => {
  return (
    <Container>
      <Status />
      <FilterButtons />
    </Container>
  );
};

export default ActionBar;

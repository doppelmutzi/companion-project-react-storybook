import styled from "styled-components";
import Headline from "./Headline";
import Todos from "./Todos";

const AppContainer = styled.div`
  border: 1px solid red;
`;

const App = () => (
  <AppContainer>
    <Headline />
    <Todos />
  </AppContainer>
);

export default App;

import { GlobalStyle } from "../App";
import AppContext from "../AppContext";

export const StyleAndContextProvider = ({ children, ...argsAndCtxValues }) => (
  <AppContext.Provider
    value={{
      ...argsAndCtxValues,
    }}
  >
    <GlobalStyle />
    {children}
  </AppContext.Provider>
);

/*
    since every component is layout-agnostic and streteches 100% of parent 
    width, we need to take care of a container with appropriate width. 
    Therefore, we can define styles, e.g., width or height.
*/
export const StorySpecificContainer = ({ children, styles }) => (
  <div style={styles}>{children}</div>
);

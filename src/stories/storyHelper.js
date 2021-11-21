import { GlobalStyle } from "../App";
import AppContext from "../AppContext";

export const commonStoryContainerWidth = 750;

export const StyleAndContextProvider = ({ children, ...ctxValues }) => (
  <AppContext.Provider
    value={{
      ...ctxValues,
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

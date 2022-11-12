import { createContext, useState, useEffect } from "react";

// export const ThemeProvider = ({ children }) => {
//   const [userDetails, setUserDetails] = useState("");

//   const changeToDark = (data) => {
//     console.log(data);
//     setUserDetails(data);
//   };
//   return (
//     <ThemeContext.Provider
//       value={{ userDetails, setUserDetails, changeToDark }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };
export const ThemeContext = createContext({
  theme: "",
  toggleStyle: (theme) => {},
});

export default ThemeContext;

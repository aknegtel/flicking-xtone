import { useState } from "react";
import { createContext } from "react";

const XtoneAltissimaContext = createContext(false);

export const XtoneAltissimaProvider = ({ children }) => {
  const [altissima, changeAltissima] = useState(false);

  const setAltissima = (bool) => {
    changeAltissima(bool);
  };

  return (
    <XtoneAltissimaContext.Provider value={{ altissima, setAltissima }}>
      {children}
    </XtoneAltissimaContext.Provider>
  );
};

export default XtoneAltissimaContext;

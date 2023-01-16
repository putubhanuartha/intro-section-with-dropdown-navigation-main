import { createContext, useState } from "react";
import Header from "./components/Header";

export const AppContext = createContext();
function App() {
  // Global hooks
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <AppContext.Provider value={{ isCollapse, setIsCollapse }}>
      <div className={isCollapse && "overlay"}></div>
      <Header />
    </AppContext.Provider>
  );
}

export default App;

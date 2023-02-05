import { createContext, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// Version 1.0
export const AppContext = createContext();
function App() {
	// Global hooks
	const [isCollapse, setIsCollapse] = useState(false);
	return (
		<AppContext.Provider value={{ isCollapse, setIsCollapse }}>
			<div className={isCollapse && "overlay"}></div>
			<Header />
			<Hero />
		</AppContext.Provider>
	);
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Acordion/Accordion";
import Checkbox from "./components/Checkbox/Checkbox";
import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import DarkModeToggle from "react-dark-mode-toggle";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ThemeContext, { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const queryClient = new QueryClient();
  // const [data, setData] = useState();
  const [style, setStyle] = useState("light");

  function toggleStyle(data) {
    setStyle(data);
  }
  return (
    
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ style, toggleStyle }}>
        <div className="App">
          <Layout />
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
    
  );
}

export default App;

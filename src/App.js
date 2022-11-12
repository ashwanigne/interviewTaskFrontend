import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DarkModeToggle from "react-dark-mode-toggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

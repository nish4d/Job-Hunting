import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import { createContext } from "react";

export const AppContext = createContext([]);

function App() {
  const {jobs} = useLoaderData();
  

  return (
    <AppContext.Provider value={jobs}>
      <Header></Header>
      <Outlet></Outlet>
    </AppContext.Provider>
  );
}

export default App;

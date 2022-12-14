import { Outlet } from "react-router-dom";
import { Navbar } from "./cmp/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

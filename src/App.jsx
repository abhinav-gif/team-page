import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";

function App() {
  const [open, setOpen] = useState(false);

  return open ? (
    <Drawer open={open} setOpen={setOpen}></Drawer>
  ) : (
    <>
      <Navbar open={open} setOpen={setOpen}></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

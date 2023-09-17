import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ open, setOpen }) => {
  const navContent = ["Home", "Collection", "About", "Contact"];
  const drawerHandler = () => {
    setOpen(!open);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <nav>
      <div className="nav-left">
        <span>This Interior</span>
      </div>
      <div className="nav-right">
        {width > 850 ? (
          navContent.map((content, index) => {
            return <button key={index}>{content} </button>;
          })
        ) : (
          <button onClick={drawerHandler}>
            <FaBars></FaBars>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

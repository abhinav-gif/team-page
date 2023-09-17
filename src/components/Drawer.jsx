import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Drawer = ({ open, setOpen }) => {
  const navContent = ["Home", "Collection", "About", "Contact"];

  const drawerHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="drawer">
      <button onClick={drawerHandler}>
        <RxCross2></RxCross2>
      </button>
      <div className="list">
        {navContent.map((content, index) => {
          return <button key={index}>{content} </button>;
        })}
      </div>
    </div>
  );
};

export default Drawer;

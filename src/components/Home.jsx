import { HiArrowLongRight } from "react-icons/hi2";
import Card from "./Card";
const Home = () => {
  return (
    <main>
      <div className="main-left">
        <h1>Modern interior</h1>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <h6>
          Read more
          <span className="arrow">
            <HiArrowLongRight />
          </span>
        </h6>
      </div>
      <div className="main-right">
        <img src="../assets/photo1.png" alt="cover photo" />
        <Card></Card>
      </div>
    </main>
  );
};

export default Home;

import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-e.png";
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          unice
          <br />
          web developer
        </h1>
        <h2>
          Frontend Developer [React ~ JavaScript] | Programming Instructor |
          Content Writer
        </h2>
        <Link to="/contact" className="flat-button">
          BUY ME COFFEE
        </Link>
      </div>
    </div>
  );
};

export default Home;

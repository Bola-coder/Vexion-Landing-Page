import Banner from "./components/Banner";
import Features from "./components/Features";
import Nav from "./components/Nav";
import style from "./styles/landingpage.module.css";
const LandingPage = () => {
  return (
    <div className={style.landingpage}>
      <Nav />
      <Banner />
      <Features />
    </div>
  );
};

export default LandingPage;

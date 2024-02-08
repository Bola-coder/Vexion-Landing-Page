import styles from "./../styles/banner.module.css";
// import bannerImage from "./../assets/images/bannerImage.png";
import phones from "./../assets/images/phones.png";
import companyLogoOne from "./../assets/images/companyLogoOne.png";
import companyLogoTwo from "./../assets/images/companyLogoTwo.png";
import companyLogoThree from "./../assets/images/companyLogoThree.png";
import companyLogoFour from "./../assets/images/companyLogoFour.png";
import companyLogoFive from "./../assets/images/companyLogoFive.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerMainText}>
          <h1>
            <sup>A</sup> Universal Application
          </h1>
          <h4>To Manage Your</h4>
          <h1 className={styles.imageBgText}>Satellite Internet</h1>
        </div>
        <div className={styles.subText}>
          <p>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </p>
        </div>
        <div className={styles.bannerBtns}>
          <button className={styles.learnMoreBtn}>Learn more</button>
          <button className={styles.getAppBtn}>Get the app</button>
        </div>
      </div>
      <div className={styles.bannerImage}>
        {/* <img src={bannerImage} alt="banner" className={styles.curlyImage} /> */}
        <div className={styles.phoneImageComtainer}>
          <img src={phones} alt="Phones" className={styles.phoneImage} />
        </div>
      </div>
      <div className={styles.companies}>
        <p>These companies work with us</p>
        <div className={styles.companyLogos}>
          <img src={companyLogoOne} alt="companyLogoOne" />
          <img src={companyLogoTwo} alt="companyLogoTwo" />
          <img src={companyLogoThree} alt="companyLogoThree" />
          <img src={companyLogoFour} alt="companyLogoFour" />
          <img src={companyLogoFive} alt="companyLogoFive" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;

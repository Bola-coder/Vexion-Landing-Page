import styles from "./../styles/features.module.css";
import ellipse from "./../assets/images/ellipseRing.png";
import controlImage from "./../assets/images/controlImage.png";
const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresHeader}>
        <h6>Vexion app</h6>
        <h3>Universal Application</h3>
        <p>Our app makes your internet control smarter than you think.</p>
      </div>
      <div className={styles.featuresContent}>
        <div className={styles.gridContent1}>
          <img src={ellipse} alt="RIng" className={styles.ellipseImage} />
          <div className={styles.applicationTexts}>
            <h4>Universal Application</h4>
            <p>
              Control your internet. Check the latency (ms). Keep an eye on the
              transfer. Test the speed.
            </p>
            <button>Get the app</button>
          </div>
        </div>
        <div className={styles.gridContent2}>
          <img src={controlImage} />
          <div className={styles.controlText}>
            <h4>Control your internet</h4>
            <p>
              Control the connection status of all connected devices with the
              app.
            </p>
          </div>
          2
        </div>
        <div className={styles.gridContent3}>3</div>
        <div className={styles.gridContent4}>4</div>
        <div className={styles.gridContent5}>5</div>
      </div>
    </div>
  );
};

export default Features;

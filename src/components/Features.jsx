import styles from "./../styles/features.module.css";
import ellipse from "./../assets/images/ellipseRing.png";
import controlImage from "./../assets/images/controlImage.png";
import downloadImage from "./../assets/images/downloadImage.png";
import latencyImage from "./../assets/images/latencyImage.png";
import speedImage from "./../assets/images/speedImage.png";
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
        </div>
        <div className={styles.gridContent3}>
          {" "}
          <img src={latencyImage} />
          <div className={styles.controlText}>
            <h4>Check the latency</h4>
            <p>
              Test and graph your Internet latency across the world in seconds.
            </p>
          </div>
        </div>
        <div className={styles.gridContent4}>
          {" "}
          <img src={downloadImage} />
          <div className={styles.controlText}>
            <h4>Keep an eye on the transfer</h4>
            <p>
              Monitor how much transfer you have used and the download and
              upload speeds.
            </p>
          </div>
        </div>
        <div className={styles.gridContent5}>
          {" "}
          <img src={speedImage} />
          <div className={styles.controlText}>
            <h4>Test the speed</h4>
            <p>
              Measure the speed and quality of your Internet connection using
              our app.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import styles from "./banner.module.css" 

const Banner = ({ isVisible }) => {
  return (

    <div className={`container ${!isVisible ? "hidden-banner" : ""}`}>
      <h1 className={styles.bannerText}>DIY Electronics Repair Resource is currently not working</h1>
    </div>
  );
}

export default Banner;
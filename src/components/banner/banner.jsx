import styles from "./banner.module.css" 

const Banner =()=> {
  return (

    <div className={styles.container}>
        <p className={styles.bannerText}>DIY Electronics Repair Resource</p>
    </div>
  );
}

export default Banner;
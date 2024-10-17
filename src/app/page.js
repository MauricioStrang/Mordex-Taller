import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  description: "Home page",
};


export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.mordexBannerContainer}>
          <Image
          src='/mordexfix1.png'
          alt=''
          fill
          className={styles.mordexBanner} 
          />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.links}>

              <div className={styles.aboutContainer}>

              </div>

              <div className={styles.storeContainer}>
                
              </div>

              <div className={styles.businessContainer}>
                
              </div>

              <div className={styles.repairsContainer}>
                
              </div>
          </div>
        </div>
        
    </div>
  );
}

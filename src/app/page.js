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
                <div className={styles.imgContainer}>
                  <Image 
                  src='/people-outline.svg'
                  fill
                  className={styles.aboutImg}
                  />
                </div>
                  
              </div>

              <div className={styles.storeContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                    src='/store.svg'
                    fill
                    className={styles.storeImg}
                    />
                </div>
              </div>

              <div className={styles.businessContainer}>
                <div className={styles.imgContainer}>
                      <Image 
                      src='/business.svg'
                      fill
                      className={styles.businessImg}
                      />
                </div>
              </div>

              <div className={styles.repairsContainer}>
                <div className={styles.imgContainer}>
                      <Image 
                      src='/repairs.svg'
                      fill
                      className={styles.repairsImg}
                      />
                </div>
              </div>
          </div>
        </div>
        
    </div>
  );
}

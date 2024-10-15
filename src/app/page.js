import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.mordexBannerContainer}>
          <Image
          className={styles.mordexBanner} 
          src="/mordexfix.png"
          fill
          />
        </div>
        
    </div>
  );
}

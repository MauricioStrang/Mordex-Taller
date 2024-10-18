import Image from "next/image";
import styles from "./home.module.css";

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

              <div className={styles.linksContainer}>
                <div className={styles.imgContainer}>
                  <Image 
                  src='/people-outline.svg'
                  fill
                  className={styles.img}
                  />
                </div>
                <span className={styles.linksTitle}>
                  Sobre Nosotros
                </span>

                <p className={styles.linkSubTitle}>
                  Conoce al equipo de MordexFix
                </p>
              </div>

              <div className={styles.linksContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                    src='/store.svg'
                    fill
                    className={styles.img}
                    />
                </div>
                <span className={styles.linksTitle}>
                  Tienda
                </span>

                <p className={styles.linkSubTitle}>
                  Productos en Venta
                </p>
              </div>

              <div className={styles.linksContainer}>
                <div className={styles.imgContainer}>
                      <Image 
                      src='/business.svg'
                      fill
                      className={styles.img}
                      />
                </div>
                <span className={styles.linksTitle}>
                  Negocio
                </span>

                <p className={styles.linkSubTitle}>
                  Contactanos
                </p>
              </div>

              <div className={styles.linksContainer}>
                <div className={styles.imgContainer}>
                      <Image 
                      src='/repairs.svg'
                      fill
                      className={styles.img}
                      />
                </div>
                <span className={styles.linksTitle}>
                  Reparaciones
                </span>

                <p className={styles.linkSubTitle}>
                  Ver Reparaciones
                </p>

              </div>
          </div>
        </div>
        
    </div>
  );
}

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
                <a className={styles.linksClickable} href="/about"></a>
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
                  Conoce al Equipo
                </p>
              </div>

              <div className={styles.linksContainer}>
              <a className={styles.linksClickable} href="/store"></a>
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
                <a className={styles.linksClickable} href="/contact"></a>
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
                <a className={styles.linksClickable} href="/repairs"></a>
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

          <h2 className={styles.homeSectionTitle}> Artículos de Reparaciones DIY</h2>
          <div className={styles.blogPostsContainer}>

                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/ps5">
                      <Image src={'/ps5.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">PS5 Optical Disc Drive Problems</a></h2>
                  <div className={styles.blogText}>There are several problems that can occur with the disc drive on a PS5, including your disc not reading correctly or not spinning or working in general. Here we will tackle common issues and outline DIY fixes you can try at home.</div>
                  <a href="blog/ps5">Read Now</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/soldering">
                      <Image src={'/soldering.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">How To Solder On Fan and Power Supply Connectors</a></h2>
                  <div className={styles.blogText}>If you've accidentally broken the fan or power supply connector off the motherboard of your game console this is the post for you. Well get your started with your repair with tool recommendations and an explanation of each step of the process.</div>
                  <a href="blog/soldering">Read Now</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/retrogames">
                      <Image src={'/retrogames.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">How to Clean Retro Game Cartridges</a></h2>
                  <div className={styles.blogText}>Most retro game cartridges are between 20-40 years old, and you may have noticed that they don’t work the way they used to anymore. Luckily, a simple cleaning is often the only thing needed to fix them.</div>
                  <a href="blog/retrogames">Read Now</a>
                </div>
                
            </div>
        </div>  
    </div>
  );
}

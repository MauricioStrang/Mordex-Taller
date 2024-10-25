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

          <h2 className={styles.homeSectionTitle}> Artículos de Reparaciones</h2>
          <div className={styles.blogPostsContainer}>

                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/ps5">
                      <Image src={'/ps5.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">Problemas con la Unidad de Disco Óptico de la PS5</a></h2>
                  <div className={styles.blogText}>Existen varios problemas que pueden ocurrir con la unidad de disco de una PS5, incluyendo que el disco no se lea correctamente, que no gire, o que simplemente no funcione. Aquí abordaremos problemas comunes y te mostraremos soluciones que puedes intentar en casa.</div>
                  <a className={styles.arrowRedirect} href="blog/ps5">Leer más  {'>'}</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/soldering">
                      <Image src={'/soldering.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">Cómo Soldar Conectores de Ventilador y Fuente de Alimentación</a></h2>
                  <div className={styles.blogText}>Si accidentalmente has roto el conector del ventilador o de la fuente de alimentación en la placa base de tu consola de juegos, esta publicación es para ti. Te ayudaremos a comenzar tu reparación con recomendaciones de herramientas y una explicación de cada paso del proceso.</div>
                  <a className={styles.arrowRedirect} href="blog/soldering">Leer más  {'>'}</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                    <a href="/blog/retrogames">
                      <Image src={'/retrogames.png'} fill className={styles.blogImg}/>
                    </a>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">Cómo Limpiar Cartuchos de Juegos Retro</a></h2>
                  <div className={styles.blogText}>La mayoría de los cartuchos de juegos retro tienen entre 20 y 40 años, y es posible que hayas notado que ya no funcionan como antes. Afortunadamente, una simple limpieza suele ser lo único necesario para arreglarlos</div>
                  <a className={styles.arrowRedirect} href="blog/retrogames">Leer más  {'>'}</a>
                </div>  
            </div>
        </div>  
        <div className={styles.seeMore}>
          <p>Explorar más {'>'}</p>
        </div>       
    </div>
  );
}

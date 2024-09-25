import Image from "next/image";
import styles from "./header.module.css" 

export default function Header() {
  return (

    <div className={styles.container}>

        <div className={styles.brgMenuContainer}>
            <Image 
                className={styles.brgMenu} 
                src={'/menu.png'} alt="menu button"
                width={30} height={30} 
            />
        </div>

        <div className={styles.logoContainer}>
            <h1 className={styles.logo}> Mordex Taller in working process </h1>
        </div>


        <div className={styles.searchContainer}>
            <div className={styles.dropdown}>
                <select name="Categorías" id="cars">
                    <option value="volvo">Todas las Categorías</option>
                    <option value="volvo">Remeras</option>
                    <option value="saab">Herramientas</option>
                    <option value="opel">Sticker</option>
                </select>
            </div>

            <div className={styles.searchBarContainer}>
                <div className={styles.searchBar}>
                    <p>¿Qué estás buscando?</p>
                </div>
            </div>


            <div className={styles.searchBtnContainer}>
                <Image
                    className={styles.searchBtn} 
                    src={'/search.png'} alt="search button"
                    width={25} height={25} 
                />
            </div>
        </div>
        


        <div className={styles.userContainer}>
            <Image 
                className={styles.userBtn}
                src={'/user.png'} alt="user button"
                width={30} height={30} 
            />
            <p>Login</p>
        </div>

        <div className={styles.cartContainer}>
            <Image
                className={styles.cartBtn}
                src={'/cart.png'} alt="cart button"
                width={30} height={30} 
            />
        </div>
    </div>
  );
}


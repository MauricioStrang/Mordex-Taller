import Image from "next/image";
import styles from "./header.module.css" 

export default function Header() {
  return (

    <div className={styles.container}>

        <div className={styles.brgMenuContainer}>
            <Image className={styles.brgMenu} src={'/menu.png'} width={25} height={20} alt="menu button"/>
        </div>

        <div className={styles.logoContainer}>
            <h1 className={styles.logo}> Mordex Taller </h1>
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

            <div className={styles.searchContainer}>
                <div className={styles.searchBar}>
                    <p>¿Qué estás buscando?</p>
                </div>
            </div>


            <div className={styles.searchLogo}>
                <button>Search button</button>
            </div>
        </div>
        


        <div className={styles.userLogo}>
            <button>Login logo</button>
            <p>Login</p>
        </div>

        <div className={styles.cartLogo}>
            <button>Cart logo</button>
        </div>
    </div>
  );
}


import Image from "next/image";
import styles from "./header.module.css" 

const Header =()=> {
  return (

    <div className={styles.container}>

        <div className={styles.brgMenuContainer}>
            <Image 
                className={styles.brgMenu} 
                src={'/menu2.png'} alt="menu button"
                width={34} height={32} 
            />
        </div>

        <div className={styles.logoContainer}>
            <h1 className={styles.logo}> Mordex Fix </h1>
        </div>


        <div className={styles.searchContainer}>
            <div className={styles.dropdownContainer}>
                <select className={styles.selectButton} name="Categorías" id="cars">
                    <option value="volvo">Categorías</option>
                    <option value="volvo">Remeras</option>
                    <option value="saab">Herramientas</option>
                    <option value="opel">Sticker</option>
                </select>
                <label className={styles.selectLabel}>Categorías</label>

                <div className={styles.dropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdown.png'} alt= "dropdown icon"
                        width={10} height={10}
                    />
                </div>
                
            </div>

            <div className={styles.searchInputContainer}>
                <input 
                className= {styles.searchInput} 
                type="text" 
                placeholder = "¿Qué estás buscando?"
                />
            </div>


            <div className={styles.searchBtnContainer}>
                <Image
                    className={styles.searchBtn} 
                    src={'/search1.png'} alt="search button"
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


        <div className={styles.subHeader}>
            <div className= {styles.navMenu}>
                <select className={styles.navMenuBtn} name="Tienda" id="cars">
                    <option value="volvo">Todos los prouctos</option>
                    <option value="volvo">Consolas</option>
                    <option value="volvo">Computadoras</option>
                    <option value="saab">Otros Electrónicos</option>
                </select>
                <label className={styles.navMenuLabel}>Tienda</label>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
            </div>

            <div className= {styles.navMenu}> 
                <select className={styles.navMenuBtn} name="Redes" id="cars">
                    <option value="volvo">Facebook</option>
                    <option value="volvo">Instagram</option>
                    <option value="volvo">YoutubeEN</option>
                    <option value="saab">TwitchEN</option>
                </select>
                <label className={styles.navMenuLabel}>Redes</label>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
            </div>

            <div className= {styles.navMenu}>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
                <select className={styles.navMenuBtn} name="Sobre-mi" id="cars">
                    <option value="volvo">FAQ</option>
                    <option value="volvo">Contactame</option>
                    <option value="volvo">¿Quién soy?</option>
                </select>
                <label className={styles.navMenuLabel}>Sobre mí</label>
            </div>
            
        </div>
    </div>
  );
}

export default Header;
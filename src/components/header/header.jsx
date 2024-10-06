import Image from "next/image";
import styles from "./header.module.css" 

const Header =()=> {
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
            <h1 className={styles.logo}> Mordex Taller </h1>
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
                placeholder = "What are you looking for?"
                />
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

export default Header;
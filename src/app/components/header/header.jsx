import styles from "./header.module.css" 

export default function Header() {
  return (
    <div className={styles.container}>
        <div>
            <button>Burger menu</button>
        </div>

        <div className={styles.logo}>
            <h1>MORDEXtm</h1>
        </div>

        <div className={styles.logo}>
          <button>Categorias dropdown</button>
        </div>

        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <p>¿Qué estás buscando?</p>
            </div>
        </div>


        <div className={styles.searchLogo}>
            <button>Search button</button>
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


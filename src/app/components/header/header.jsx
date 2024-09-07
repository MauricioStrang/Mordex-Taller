import styles from "./header.module.css" 

export default function Header() {
  return (
    <div className={styles.container}>
        <div>
            <button>Burger menu</button>
        </div>

        <div>
            <h1>MORDEXtm</h1>
        </div>

        <div>
          <button>Categorias dropdown</button>
        </div>

        <div>
            <div className={styles.searchBar}>
                <p>¿Qué estás buscando?</p>
            </div>
        </div>


        <div>
            <button>Search button</button>
        </div>


        <div>
            <button>Login logo</button>
            <p>Login</p>
        </div>

        <div>
            <button>Cart logo</button>
        </div>
    </div>
  );
}


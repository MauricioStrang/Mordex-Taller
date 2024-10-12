import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <div>
            <button>About</button>
        </div>

        <div>
          <button>Reparaciones</button>
        </div>
        
    </div>
  );
}

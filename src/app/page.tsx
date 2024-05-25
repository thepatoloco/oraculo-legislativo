import Image from "next/image";
import styles from './home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Por una ciudadanía informada
        </h1>
      </div>
      {/* <div className={styles.imgContainer}>
        <Image
          src="/comunidad.jpg"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div> */}
    </div>
  );
}

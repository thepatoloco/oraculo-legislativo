import Image from "next/image";
import styles from './home.module.css'
import CardHome from "@/components/cardHome/CardHome";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Por una ciudadanía informada
        </h1>
      </div>

      <div>
        <div>
          <h1 className={styles.subtitle}>
            ¿Qué puedo hacer?
          </h1>
        </div>

        <div className="flex justify-evenly">
          <CardHome title="Entender el Senado" message="Informarte mediante el asistente sobre las más recientes iniciativas." icon="question"/>
          <CardHome title="Supervisar actividades" message="Enterate sobre las últimas actividades del Senado." icon="alert"/>
          <CardHome title="Proponer cambios" message="Como ciudadano tenemos derecho a proponer cambios." icon="idea"/>

        </div>
      </div>
      
    </div>
  );
}

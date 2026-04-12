import styles from "./Home.module.css";
import foto from "../assets/foto.png"

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>Ana Clara de Oliveira Cavalcante</h1>
      <h2>Sistemas de Informação (2° período)</h2>

      <article className={styles.infoBasica}>
        <img src={foto} alt="Foto minha" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam deserunt temporibus aspernatur! Tempora voluptatem numquam quos, molestias ex veniam laudantium nostrum perspiciatis ipsam repellendus a voluptatum labore? Recusandae, nobis.</p>
      </article>
    </section>
  );
}

export default Home;

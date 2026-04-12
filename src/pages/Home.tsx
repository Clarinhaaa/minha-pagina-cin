import styles from "./Home.module.css";
import foto from "../assets/foto.png";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>Ana Clara de Oliveira Cavalcante</h1>
      <article className={styles.infoBasica}>
        <img src={foto} alt="Foto minha" />
        <p>
          Olá! Sou aluna do Bacharelado em Sistemas de Informação do Centro de
          Informática e estou no 2° período; também sou Técnica em Informática
          pelo Instituto Federal da Bahia (IFBA). Meu interesse pela tecnologia
          surgiu mais ou menos durante minha pré-adolescência, especialmente
          pela programação. Agora, almejo a melhoria contínua nessa área e
          aproveitar o máximo que conseguir deste curso para que eu possa ser
          uma boa profissional, seja como contratada, ou em projetos
          pessoais.
          <br />
          <br />
          Neste site estão algumas informações sobre mim, tanto pessoais como
          acadêmicas/profissionais e minhas produções.
        </p>
      </article>
    </section>
  );
}

export default Home;

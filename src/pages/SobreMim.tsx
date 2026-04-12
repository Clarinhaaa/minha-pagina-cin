import styles from "./SobreMim.module.css";

function SobreMim() {
  return (
    <section className={styles.sobreMimContainer}>
      <h1>Sobre mim</h1>

      <section className={styles.infos}>
        <article className={styles.textBlock}>
          <h2>Trajetória acadêmica</h2>
          <p>
            - Instituto Federal da Bahia, campus Paulo Afonso (2021-2025):
            Técnico em Informática Integrado.
          </p>
          <p>
            - Universidade Federal de Pernambuco, campus Recife (2025-hoje):
            Bacharelado em Sistemas de Informação, com previsão de conclusão
            para 2029.2.
          </p>
        </article>
        <article className={styles.textBlock}>
          <h2>Habilidades profissionais</h2>
          <p>
            - Técnicas: Java, Springboot, HTML, CSS, JavaScript/TypeScript,
            MySQL, Scrum, Kanban, Git e GitHub.
          </p>
          <p>
            - Pessoais: Organização, raciocínio lógico, proatividade,
            criatividade, curiosidade e trabalho em equipe.
          </p>
        </article>
        <article className={styles.textBlock}>
          <h2>Interesses técnicos</h2>
          <p>
            Atualmente, meu maior interesse é desenvolvimento, já que uma das
            minhas maiores paixões é criar. Por causa disso, também me vejo nas
            artes e, a fim de misturar ambos os conhecimentos, tenho muita
            vontade de aprender mais sobre o desenvolvimento de jogos,
            especificamente. Contudo, tenho notado a importância de estudar mais
            sobre gestão de projetos e equipes, o que não é o foco agora.
          </p>
        </article>
        <article className={styles.textBlock}>
          <h2>Interesses pessoais</h2>
          <p>
            Para além do mundo técnico e profissional, eu gosto de qualquer
            coisa que envolva arte, como desenhar, ler, escrever, jogar,
            assistir séries/filmes, dançar, etc; além de estudar sobre tais
            assuntos. Também gosto de pesquisar sobre mitologias antigas,
            sobretudo a grega e romana, e sobre o espaço.
          </p>
        </article>
      </section>
    </section>
  );
}

export default SobreMim;

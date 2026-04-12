import styles from "./Portfolio.module.css";

function Portfolio() {
  interface Projeto {
    id: number;
    nome: string;
    descricao: string; // Descrição + objetivo + disciplina
    imagem: string; // Endereço do arquivo
    tecnologias: string;
    prototipo?: string;
    gitHubRepo?: string;
    observacao?: string;
  }

  const projetos: Projeto[] = [
    {
      id: 1,
      nome: "Stayfe",
      descricao: "lorem ipsum",
      imagem: "",
      tecnologias: "Miro, ChatGPT, Lovable",
      prototipo: "https://stayfe.online/map",
    },
    {
      id: 2,
      nome: "Cadus",
      descricao: "lorem ipsum",
      imagem: "",
      tecnologias: "Jira, Claude Code, Lovable, React + Vite, TypeScript",
      observacao: "O repositório deste projeto está em produção!"
    },
  ];

  return (
    <section className={styles.portfolioContainer}>
      <h1>Portfólio</h1>
      <section className={styles.projetos}>
        {projetos.map((proj) => (
          <article className={styles.projetoUnico} key={proj.id}>
            <h2>{proj.nome}</h2>
            <p>{proj.descricao}</p>
            <img
              src={proj.imagem}
              alt={`Imagem do protótipo do ${proj.nome}`}
            />
            <p>Tencologias: {proj.tecnologias}</p>
            <div className={styles.linksProjeto}>
              {proj.prototipo && (
                <a href={proj.prototipo} target="_blank">
                  Protótipo
                </a>
              )}
              {proj.gitHubRepo && (
                <a href={proj.gitHubRepo} target="_blank">
                  GitHub
                </a>
              )}
              {proj.observacao && (
                <em>{proj.observacao}</em>
              )}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Portfolio;

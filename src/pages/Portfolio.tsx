import styles from "./Portfolio.module.css";
import protStayfe from "../assets/prototipo-stayfe.png";
import protCadus from "../assets/prototipo-cadus.png";

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
      descricao:
        "Projeto para a disciplina de Concepção de Artefatos Digitais com o professor Gusto, desenvolvido em equipe com Albert Santos, Bernardo Belfort, Edísio Uchôa, Gabriel Cássio e Victor Lemos. Consiste em um aplicativo que gera um mapa interativo, focado em dispositivos móveis, no qual o usuário pode registrar alguma ocorrência que tenha comprometido a sua segurança ou a de outrém na respectiva localização, dessa forma, outras pessoas poderão ver e se precaver na hora de sair de casa. Ele procura resolver o problema da insegurança que muitras pessoas sentem ao caminharem pela cidade de Recife, principalmente à noite, além de mitigar o preconceito sobre as regiões mais pobres, conscientizando a população de que o perigo pode acontecer em qualquer bairro.",
      imagem: protStayfe,
      tecnologias: "Miro, ChatGPT, Lovable",
      prototipo: "https://stayfe.online/map",
      observacao: "O Stayfe não tem um repositório no GitHub, pois o projeto requeria apenas um protótipo funcional."
    },
    {
      id: 2,
      nome: "Cadus",
      descricao:
        "Projeto para a disciplina de Desenvolvimento de Software com os professores Kiev Gama e Vinícius Cardoso, que está sendo desenvolvido em equipe com Alex Mayrinck, Bernardo Belfort, Edísio Uchôa, Francisco Faustino, Gabriel Cássio, Rafael Samico e Victor Lemos. Ele é um site que serve de ponte entre o paciente encaminhado às clínicas-escola da UFPE e as próprias instituições, fornecendo o contato inicial através de um formulário no qual o paciente informa sua queixa e é devidamente associado à melhor clínica que possa recebê-lo, como se fosse um processo de triagem digitalizado. Depois disso, o profissional pode ter acesso às informações médicas do paciente antes do seu atendimento.",
      imagem: protCadus,
      tecnologias:
        "Jira, Claude, Lovable, React + Vite (HTML, CSS e TypeScript)",
      prototipo: "https://cadus-facil-login.lovable.app/",
      observacao: "O repositório deste projeto está em produção!",
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
            <p>Tencologias: {proj.tecnologias}.</p>
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
            </div>
            {proj.observacao && <em>{proj.observacao}</em>}
          </article>
        ))}
      </section>
    </section>
  );
}

export default Portfolio;

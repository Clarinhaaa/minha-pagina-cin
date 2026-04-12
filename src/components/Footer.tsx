import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  function showWarning(param: string): void {
    window.alert(`Contato: ${param}`);
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contact}>
        <a href="https://github.com/Clarinhaaa" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="https://www.linkedin.com/in/ana-clara-cavalcante-83ba59374/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a href="#" onClick={() => showWarning("acoc@cin.ufpe.br")}>
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
        <a href="#" onClick={() => showWarning("(82) 9 9910-6186")}>
          <FontAwesomeIcon icon={faPhone} size="xl" />
        </a>
      </div>
      <p>
        Favicon encontrado em{" "}
        <a href="https://www.svgrepo.com/svg/407540/sun" target="_blank" style={{ padding: 0 }}>
          SVG Repo
        </a>
      </p>
    </footer>
  );
}

export default Footer;

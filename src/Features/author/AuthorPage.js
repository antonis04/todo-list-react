import Container from "../../Common/Container";
import Header from "../../Common/Header";
import Section from "../../Common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section title="Antek Samol" 
    body={<>
           <p>
        Cześć! Jestem <strong>Antek Samol</strong>, pasjonat programowania i twórca tej aplikacji do zarządzania zadaniami.
      </p>
      <p>
        Aplikacja została stworzona w ramach nauki <em>React</em> oraz <em>Redux</em>, pokazując praktyczne zastosowanie tych technologii w zarządzaniu stanem aplikacji.
      </p>
      <p>
        Posiadam <strong>3-letnie doświadczenie</strong> w programowaniu frontendowym, ze szczególnym uwzględnieniem <em>JavaScript</em> i nowoczesnych frameworków.
      </p>
      <p>
        W wolnym czasie lubię <strong>rozwijać swoje umiejętności</strong> poprzez tworzenie projektów open source i uczestnictwo w społeczności programistycznej.
      </p>
    </>} />
  </Container>
);

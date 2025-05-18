
import { Sections } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <header>
      <h2>{title}</h2>
      {extraHeaderContent}
    </header>
    <div>{body}</div>
  </Sections>
);

export default Section;

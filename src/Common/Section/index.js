import {
  Sections,
  SectionHeader,
  SectionTitle,
  SectionExtraContent,
  SectionBody,
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    {(title || extraHeaderContent) && (
      <SectionHeader>
        {title && <SectionTitle>{title}</SectionTitle>}
        {extraHeaderContent && (
          <SectionExtraContent>{extraHeaderContent}</SectionExtraContent>
        )}
      </SectionHeader>
    )}
    <SectionBody>{body}</SectionBody>
  </Sections>
);

export default Section;

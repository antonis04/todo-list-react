import "./style.css"; 

const Section = ({title, body, extraHeaderContent}) => (
    <section class="task-list">
    <div class="task-list__header">
      <h2 class="task-list__title">{title}</h2>
      {extraHeaderContent}
    </div>
    {body}
  </section>
);


export default Section;
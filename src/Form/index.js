import "./style.css";

const Form = () => (
  <form class="task-form__form">
    <input
      class="task-form__input"
      type="text"
      placeholder="Co jest do zrobienia?"
    />
    <button class="task-form__button" type="submit">
      Dodaj zadanie
    </button>
  </form>
);

export default Form;

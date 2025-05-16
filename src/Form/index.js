import { useState, useRef } from "react";
import { Forms, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const trimmedTaskContent = newTaskContent.trim();
    if (trimmedTaskContent) {
      addNewTask(trimmedTaskContent);
      setNewTaskContent("");
      inputRef.current.focus();
    }
  };

  return (
    <Forms onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </Forms>
  );
};

export default Form;

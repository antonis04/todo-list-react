import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: teal;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #006666;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #008080;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

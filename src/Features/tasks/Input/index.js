import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  flex-grow: 1;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default Input;
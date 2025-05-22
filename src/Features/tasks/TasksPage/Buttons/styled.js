import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  background: transparent;
  color: teal;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

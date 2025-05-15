import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 0;
  background-color: transparent;
  color: #006666;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #008080;
    background-color: transparent;
  }
`;

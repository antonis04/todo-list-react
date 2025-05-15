import styled, { css } from "styled-components";

export const Forms = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
`;
export const FormInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
`;

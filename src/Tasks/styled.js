import styled, { css } from "styled-components";

export const Task = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  background-color: white;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex: 1;
  text-align: left;
  font-size: 16px;
  margin-left: 10px;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #008000;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;

      &hover {
        transition-duration: 2s;
        background: darkgreen;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: #dc3545;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      transition-transform: 0.5s;

      &hover {
        background: red;
        transition-duration: 2s;
      }
    `}
`;

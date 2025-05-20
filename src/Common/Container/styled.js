import styled from "styled-components";

export const ContainerBox = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 10px;
    margin: 0 auto;
    width: 100%;
  }
`;

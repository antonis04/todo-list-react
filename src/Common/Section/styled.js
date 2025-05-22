import styled, { css } from "styled-components";

export const Sections = styled.section`
  background: #f9f9f9;
  padding: 24px 20px;
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
`;

export const SectionExtraContent = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SectionBody = styled.div`
  padding: 20px 0;
`;

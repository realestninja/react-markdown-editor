import styled, { css } from "styled-components";

export const Wrapper = styled.div`
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    width: 100%;
    max-width: calc(50% - 15px);
  }
`;

export const ButtonRow = styled.div`
  margin-bottom: 15px;
`;

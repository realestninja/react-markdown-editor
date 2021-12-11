import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 0 15px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    width: 100%;
    max-width: calc(50% - 15px);
    height: 80vh;
    max-height: 80vh;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BackgroundBlur = styled.div`
  height: 100%;
  width: 100%;
  z-index: 11;
  backdrop-filter: blur(1.25rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 12;
  overflow-y: auto;
`;

export const ModalWrapper = styled.div`
  margin: auto;

  @media screen and (max-width: 48rem) {
    width: 100%;
    min-width: 19.125rem;
  }
`;

export const Modal = styled.div`
  min-width: ${(props) => props.width || "33"}rem;
  background-color: var(--color-modal);
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 1rem 1.5rem 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

export const CloseContainer = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 100%;
`;

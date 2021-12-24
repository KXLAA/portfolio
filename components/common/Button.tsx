/* eslint-disable react/display-name */
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 280px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px 0px;
  transition: all 0.3s ease;
  font-weight: 800;
  font-size: 36px;
  color: #ffffff;
  cursor: pointer;
  background: #101010;
  border: none;

  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    transform: translateX(0rem) translateY(-0.125rem);
    background: #ffffff;
    color: #101010;
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

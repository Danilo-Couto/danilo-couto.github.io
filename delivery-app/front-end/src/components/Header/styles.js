import styled, { css } from 'styled-components';

export const wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.color.vividGreenDarkest};
    position: relative;
    height: 5rem;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px ${theme.color.lightGrey};
    box-shadow: 0 2px 1px 1px ${theme.color.vividGreenDarkest}; 
  `}
`;

const ButtonModifier = {
  first: (theme) => css`
    > :first-child {
      background-color: inherit;
      cursor: default;
      :hover {
        color: inherit;
      }
    }
    > :nth-child(2) {
      background-color: ${theme.color.bgTertiary};
      :hover {
        color: ${theme.color.vividGreenDarkest};
      }
    }
  `,
  second: (theme) => css`
    > :first-child {
      background-color: ${theme.color.bgTertiary};
      :hover {
        color: ${theme.color.vividGreenDarkest};
      }
    }
    > :nth-child(2) {
      background-color: inherit;
      cursor: default;
      :hover {
        color: inherit;
      }
    }
  `,
};

export const actionButtons = styled.div`
  ${({ theme, route }) => css`
    display: flex;
    width: 25%;
    height: 100%;
    ${route ? ButtonModifier.first(theme) : ButtonModifier.second(theme)}
  `}
`;

export const accountButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    width: 20%;
    > :first-child {
      background-color: ${theme.color.vividGreenStrong};
    }
    > :nth-child(2) {
      width: 60%;
      background-color: ${theme.color.vividRed};
      :hover {
        color: ${theme.color.white};
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0 0 1rem 1rem;
      font-size: ${theme.font.size.regular};
      background-color: ${theme.color.white};
      color: ${theme.color.black};
      cursor: pointer;
      :hover {
        transition-duration: 0.4s;
        color: ${theme.color.bgTertiary};
      }
  `}
`;

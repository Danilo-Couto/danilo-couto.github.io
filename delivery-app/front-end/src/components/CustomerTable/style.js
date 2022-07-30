import styled from 'styled-components';

export const Table = styled.table`
  padding-left: 23%;
`;

export const ThItem = styled.th`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
    padding: 15px 32px;
    text-align: center;
  `}
`;

export const TdItem = styled.td`
  ${({ theme }) => `
    font-size: ${theme.font.size.xsmall};
    padding: 15px 32px;
    text-align: center;
  `}
`;

export const RemoveItemBttn = styled.button`
  ${({ theme }) => `background-color: ${theme.color.vividCyanLimeGreen};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: ${theme.font.size.xsmall};
    font-size: ${theme.font.size.regular};
    background-color: ${theme.color.vividGreen};
    color: ${theme.color.black};
    margin-top: 10px;
    cursor: pointer;
    &:hover { 
      background-color: ${theme.color.vividGreenDark};
      color: ${theme.color.white};
      transition-duration: 0.4s;
    }
    &:disabled { 
      cursor: not-allowed;
      background-color: red;
    } 
  `}
`;

export const Total = styled.p`
  ${({ theme }) => `
      padding-left: 23%;
      padding-top: 2%;
      padding-bottom: 4%;
      font-size: ${theme.font.size.large};
      // background-color: ${theme.color.vividGreenStrong}`};
`;

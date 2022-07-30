import styled from 'styled-components';

export const OrderDetail = styled.p`
  ${({ theme }) => `
    // color: ${theme.color.vividGreenStrong};
    padding-top: 2%;
    padding-left: 20%;
    padding-bottom: 2%;
    font-size: ${theme.font.size.large}`}
`;

export const OrderInfoContainer = styled.div`
  padding-left: 20%;
`;

export const OrderInfo = styled.div`
  display: inline-block;
  padding-right: 3%;
`;

export const OrderNumber = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
    color: ${theme.color.black};
  `}
`;

export const Seller = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
  `}
`;

export const Date = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
    background-color: ${theme.color.bgSecondary};
    padding: 10px;
  `}
`;

export const PendingStatus = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
    background-color: #CCCC00;
    padding: 10px;
  `}
`;

export const DeliveredStatus = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.size.regular};
    background-color: ${theme.color.vividGreen};
    padding: 10px;
  `}
`;

export const ReceiveOrderButton = styled.button`
  ${({ theme }) => `
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: ${theme.font.size.regular};
    background-color: ${theme.color.vividGreenDarkest};
    color: ${theme.color.black};
    margin-top: 10px;
    cursor: pointer;
    &:hover { 
        background-color: ${theme.color.vividCyanLimeGreen};
        color: ${theme.color.white};
        transition-duration: 0.4s;
      }
      &:disabled { 
        cursor: not-allowed;
        background-color: red;
      } 
  `}
`;
